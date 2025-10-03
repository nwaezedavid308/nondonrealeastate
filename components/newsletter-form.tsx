'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; msg?: string }>({ type: 'idle' });

  const onSubmit = async (e: React.FormEvent) => {
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
        setStatus({ type: 'success', msg: data?.message || 'Success' });
        setEmail('');
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error' });
    }
  };

  return (
    <form onSubmit={onSubmit} className={compact ? 'flex gap-2' : 'space-y-3 max-w-md mx-auto'}>
      {!compact && <p className="text-lg font-semibold text-center">Subscribe to our newsletter</p>}
      <div className={compact ? 'flex gap-2 w-full' : 'flex gap-2'}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button type="submit" disabled={status.type === 'loading'}>
          {status.type === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </div>
      {status.type === 'success' && <p className="text-green-600 text-sm">{status.msg}</p>}
      {status.type === 'error' && <p className="text-red-600 text-sm">{status.msg}</p>}
    </form>
  );
}


