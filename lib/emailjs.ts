import emailjs from '@emailjs/browser';

// EmailJS configuration - temporarily hardcoded for testing
const SERVICE_ID = 'service_vwl74we';
const GENERAL_TEMPLATE_ID = 'template_ryuzybu';
const RESERVATION_TEMPLATE_ID = 'template_dfx6ot8';
const PUBLIC_KEY = 'j5KZR3zZbC8CBFuW4';

// Initialize EmailJS
export const initEmailJS = () => {
  console.log('Initializing EmailJS with Public Key:', PUBLIC_KEY);
  try {
    emailjs.init(PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Error initializing EmailJS:', error);
  }
};

// Test EmailJS connection
export const testEmailJS = async () => {
  console.log('Testing EmailJS connection...');
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      GENERAL_TEMPLATE_ID,
      {
        from_name: 'Test User',
        from_lastname: 'Test',
        from_email: 'test@example.com',
        from_phone: '1234567890',
        subject: 'Test Subject',
        message: 'This is a test message'
      }
    );
    console.log('EmailJS test successful:', response);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return { success: false, error };
  }
};

// Send general inquiry email
export const sendGeneralInquiry = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    console.log('EmailJS Configuration:', {
      SERVICE_ID,
      GENERAL_TEMPLATE_ID,
      PUBLIC_KEY: PUBLIC_KEY ? 'Set' : 'Not Set'
    });

    const templateParams = {
      from_name: formData.firstName,
      from_lastname: formData.lastName,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      SERVICE_ID,
      GENERAL_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending general inquiry:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      text: error.text
    });
    return { success: false, error };
  }
};

// Send property reservation email
export const sendPropertyReservation = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  property: string;
  budget: string;
  timeline: string;
  message: string;
}) => {
  try {
    console.log('EmailJS Configuration:', {
      SERVICE_ID,
      RESERVATION_TEMPLATE_ID,
      PUBLIC_KEY: PUBLIC_KEY ? 'Set' : 'Not Set'
    });

    const templateParams = {
      from_name: formData.firstName,
      from_lastname: formData.lastName,
      from_email: formData.email,
      from_phone: formData.phone,
      property: formData.property,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      SERVICE_ID,
      RESERVATION_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending property reservation:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      text: error.text
    });
    return { success: false, error };
  }
};
