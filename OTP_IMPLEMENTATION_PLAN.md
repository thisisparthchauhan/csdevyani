# OTP Verification Implementation Plan

## Overview
Implement dual OTP verification (Email + Mobile) during user signup to ensure verified contact information.

---

## Architecture

### Signup Flow:
```
Step 1: User enters details (Name, Email, Mobile, Password)
   ↓
Step 2: Send OTP to Email
   ↓
Step 3: User verifies Email OTP
   ↓
Step 4: Send OTP to Mobile
   ↓
Step 5: User verifies Mobile OTP
   ↓
Step 6: Create Firebase Auth account
   ↓
Step 7: Save verified user to Firestore
   ↓
Step 8: Redirect to Dashboard
```

---

## Technical Implementation

### 1. Email OTP
**Method:** Firebase Auth Email Verification + Custom OTP
- Generate 6-digit OTP
- Send via Firebase Email (or third-party service like SendGrid)
- Store OTP hash in Firestore with expiry (5 minutes)
- Verify OTP before proceeding

### 2. Mobile OTP
**Method:** Firebase Phone Authentication
- Use Firebase Phone Auth with reCAPTCHA
- Send SMS OTP automatically
- Verify phone number
- Link to email account

### 3. Alternative: Third-Party Services
**For Production:**
- **Email OTP:** SendGrid, AWS SES, Mailgun
- **SMS OTP:** Twilio, AWS SNS, MSG91 (India)

---

## Firebase Configuration Required

### 1. Enable Phone Authentication
```
Firebase Console → Authentication → Sign-in method → Phone → Enable
```

### 2. Add Authorized Domains
```
Firebase Console → Authentication → Settings → Authorized domains
Add: csdevyani-web-2025.web.app
```

### 3. Configure reCAPTCHA
```
Firebase automatically provides reCAPTCHA for phone auth
```

---

## Database Schema

### otpVerification/{sessionId}
```typescript
{
  email: string,
  emailOTP: string,          // Hashed
  emailOTPExpiry: timestamp,
  emailVerified: boolean,
  
  mobile: string,
  mobileOTP: string,         // Hashed (if custom)
  mobileOTPExpiry: timestamp,
  mobileVerified: boolean,
  
  userData: {
    fullName: string,
    email: string,
    mobile: string,
    password: string         // Temporary, hashed
  },
  
  createdAt: timestamp,
  expiresAt: timestamp       // 30 minutes
}
```

---

## Implementation Options

### Option 1: Firebase Native (Recommended for MVP)
**Pros:**
- No additional cost
- Built-in security
- Easy integration
- Automatic SMS delivery

**Cons:**
- Limited customization
- reCAPTCHA required (can be invisible)
- SMS costs after free tier

### Option 2: Third-Party Services (Production)
**Pros:**
- Better deliverability
- More customization
- Detailed analytics
- Better rates for bulk

**Cons:**
- Additional cost
- More complex setup
- API key management

---

## Cost Estimation

### Firebase Phone Auth Pricing:
- **Free Tier:** 10,000 verifications/month
- **Paid:** $0.01 per verification after free tier
- **India SMS:** ~₹0.20 per SMS

### Third-Party (Twilio):
- **SMS:** $0.0079 per SMS (~₹0.65)
- **Email:** Free with SendGrid (100/day free tier)

---

## Security Considerations

### 1. Rate Limiting
- Max 3 OTP requests per email/mobile per hour
- Max 5 verification attempts per OTP
- Block suspicious IPs

### 2. OTP Security
- 6-digit random OTP
- 5-minute expiry
- Hash before storing
- Single-use only

### 3. Session Management
- Unique session ID for each signup
- 30-minute session expiry
- Clear data after successful signup

---

## UI/UX Flow

### Step 1: User Details
```
┌─────────────────────────────┐
│  Sign Up                    │
├─────────────────────────────┤
│  Full Name: [__________]    │
│  Email:     [__________]    │
│  Mobile:    [__________]    │
│  Password:  [__________]    │
│                             │
│  [Continue →]               │
└─────────────────────────────┘
```

### Step 2: Email OTP
```
┌─────────────────────────────┐
│  Verify Email               │
├─────────────────────────────┤
│  We sent a code to:         │
│  user@example.com           │
│                             │
│  Enter OTP: [_][_][_][_][_][_] │
│                             │
│  Resend OTP (00:45)         │
│  [Verify →]                 │
└─────────────────────────────┘
```

### Step 3: Mobile OTP
```
┌─────────────────────────────┐
│  Verify Mobile              │
├─────────────────────────────┤
│  We sent a code to:         │
│  +91 98765 43210            │
│                             │
│  Enter OTP: [_][_][_][_][_][_] │
│                             │
│  Resend OTP (00:45)         │
│  [Complete Signup →]        │
└─────────────────────────────┘
```

---

## Implementation Priority

### Phase 1: Email OTP (Week 1)
1. ✅ Create multi-step signup component
2. ✅ Generate and send email OTP
3. ✅ Verify email OTP
4. ✅ Store verification status

### Phase 2: Mobile OTP (Week 1)
1. ✅ Integrate Firebase Phone Auth
2. ✅ Add reCAPTCHA
3. ✅ Verify mobile OTP
4. ✅ Link phone to account

### Phase 3: Enhancement (Week 2)
1. ✅ Add rate limiting
2. ✅ Improve error handling
3. ✅ Add analytics
4. ✅ Optimize UX

---

## Code Structure

### Components:
```
/src/components/auth/
├── SignupWizard.tsx          # Main wizard component
├── StepUserDetails.tsx       # Step 1: Collect info
├── StepEmailOTP.tsx          # Step 2: Email verification
├── StepMobileOTP.tsx         # Step 3: Mobile verification
├── StepSuccess.tsx           # Step 4: Success screen
└── OTPInput.tsx              # Reusable OTP input
```

### Utils:
```
/src/lib/
├── otp.ts                    # OTP generation/validation
├── sms.ts                    # SMS sending (if custom)
└── email.ts                  # Email sending (if custom)
```

---

## Testing Checklist

- [ ] Email OTP sends successfully
- [ ] Email OTP validates correctly
- [ ] Email OTP expires after 5 minutes
- [ ] Mobile OTP sends successfully
- [ ] Mobile OTP validates correctly
- [ ] Mobile OTP expires after 5 minutes
- [ ] Rate limiting works
- [ ] Resend OTP works
- [ ] Invalid OTP shows error
- [ ] Expired OTP shows error
- [ ] Session timeout works
- [ ] reCAPTCHA displays correctly
- [ ] Mobile responsive
- [ ] Accessibility compliance

---

## Recommended Approach

### For Immediate Implementation:
**Use Firebase Phone Authentication** for mobile OTP (built-in, reliable)
**Use Custom Email OTP** with Firebase Functions or client-side generation

### For Production:
**Consider Twilio** for SMS (better deliverability in India)
**Consider SendGrid** for email (better customization)

---

## Next Steps

1. **Enable Firebase Phone Auth** in console
2. **Create SignupWizard component** with multi-step flow
3. **Implement Email OTP** generation and verification
4. **Integrate Firebase Phone Auth** for mobile
5. **Add rate limiting** and security measures
6. **Test thoroughly** on different devices
7. **Deploy and monitor**

---

**Status:** Ready to implement
**Estimated Time:** 2-3 days for full implementation
**Complexity:** Medium-High
