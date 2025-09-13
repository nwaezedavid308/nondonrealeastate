# EmailJS Integration Setup Guide

## 🚀 Quick Setup Steps

### 1. EmailJS Account Setup
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month)
3. Verify your email address

### 2. Connect Your Email Service
1. In EmailJS dashboard → **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow setup instructions
5. **Note your Service ID**

### 3. Create Email Templates

#### Template 1: General Inquiry
- **Template Name:** `general_inquiry`
- **Subject:** `New General Inquiry from {{from_name}}`
- **Content:**
```
Name: {{from_name}} {{from_lastname}}
Email: {{from_email}}
Phone: {{from_phone}}
Subject: {{subject}}
Message: {{message}}

This inquiry was sent from your website contact form.
```

#### Template 2: Property Reservation
- **Template Name:** `property_reservation`
- **Subject:** `New Property Reservation from {{from_name}}`
- **Content:**
```
Name: {{from_name}} {{from_lastname}}
Email: {{from_email}}
Phone: {{from_phone}}
Property: {{property}}
Budget: {{budget}}
Timeline: {{timeline}}
Additional Notes: {{message}}

This reservation was sent from your website contact form.
```

### 4. Get Your Credentials
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key (User ID)**
3. Note your **Service ID** from step 2
4. Note your **Template IDs** from step 3

### 5. Update Environment Variables
Edit your `.env.local` file with your actual credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_GENERAL=your_general_template_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RESERVATION=your_reservation_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test Your Forms
1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out both forms and test submission
4. Check your email for the test messages

## 📧 What's Been Implemented

### ✅ Features Added:
- **Form Validation:** All required fields are validated
- **Loading States:** Buttons show loading spinners during submission
- **Success/Error Messages:** Clear feedback to users
- **Form Reset:** Forms clear after successful submission
- **Email Templates:** Professional email formatting
- **Error Handling:** Graceful error handling with user-friendly messages

### 🔧 Files Created/Modified:
- `lib/emailjs.ts` - EmailJS utility functions
- `hooks/useFormSubmission.ts` - Form handling hook
- `app/contact/page.tsx` - Updated with functional forms
- `.env.local` - Environment variables template

### 📱 Form Features:
- **General Inquiry Form:**
  - Name, Email, Phone (required)
  - Subject dropdown (required)
  - Message textarea (required)
  
- **Property Reservation Form:**
  - Name, Email, Phone (required)
  - Property selection (required)
  - Budget range (required)
  - Purchase timeline (required)
  - Additional notes (optional)

## 🎯 Next Steps:
1. Complete EmailJS account setup
2. Update `.env.local` with your credentials
3. Test both forms
4. Customize email templates as needed
5. Monitor email delivery in EmailJS dashboard

## 📞 Support:
If you need help with EmailJS setup, check their documentation at [EmailJS Docs](https://www.emailjs.com/docs/)
