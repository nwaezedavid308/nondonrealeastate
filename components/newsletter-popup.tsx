'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Mail, Gift, CheckCircle } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; msg?: string }>({ type: 'idle' });
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if not closed before
    const timer = setTimeout(() => {
      const wasClosed = localStorage.getItem('newsletter-popup-closed');
      if (!wasClosed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-closed', 'true');
    setIsClosed(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ type: 'loading' });
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (!res.ok) {
        setStatus({ type: 'error', msg: data?.error || 'Something went wrong' });
      } else {
        setStatus({ type: 'success', msg: data?.message || 'Success!' });
        setEmail('');
        // Close popup after 2 seconds on success
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error' });
    }
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 opacity-50"></div>
        
        <div className="relative p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated!</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get exclusive updates on new properties, special offers, and real estate insights from Nondon Real Estate.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Gift className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Early access to new property launches</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Gift className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Exclusive pricing and payment plans</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Gift className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Market insights and investment tips</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                disabled={status.type === 'loading'}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </form>

          {/* Status Messages */}
          {status.type === 'success' && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-green-700 text-sm">{status.msg}</span>
            </div>
          )}
          
          {status.type === 'error' && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <span className="text-red-700 text-sm">{status.msg}</span>
            </div>
          )}

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
