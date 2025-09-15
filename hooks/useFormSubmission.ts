import { useState } from 'react';
import { sendGeneralInquiry, sendPropertyReservation } from '@/lib/emailjs';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleGeneralInquiry = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendGeneralInquiry(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your inquiry has been sent successfully. We\'ll get back to you within 24 hours.'
        });
        return true;
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
        });
        return false;
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePropertyReservation = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    property: string;
    budget: string;
    timeline: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendPropertyReservation(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your property request has been submitted successfully. Our sales team will contact you within 24 hours.'
        });
        return true;
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error submitting your request. Please try again or contact us directly.'
        });
        return false;
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your request. Please try again or contact us directly.'
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearStatus = () => {
    setSubmitStatus({ type: null, message: '' });
  };

  return {
    isSubmitting,
    submitStatus,
    handleGeneralInquiry,
    handlePropertyReservation,
    clearStatus,
  };
};
