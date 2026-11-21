# Kriyova Technologies — Backend API Server

High-performance, secure Node.js & Express REST API for Kriyova Technologies.

## Features
- **Security:** Helmet headers, CORS protection with origin whitelist, Express rate limiting (100 req / 15 min per IP).
- **Validation:** Multi-layer input sanitization and schema-level validation via Mongoose.
- **Resilience:** Non-blocking database connection with graceful fallback in development.
- **Email Notifications:** Configurable SMTP mail dispatch via Nodemailer (optional; logs gracefully when unconfigured).
- **Architecture:** Clean controller-service-route-model separation.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env

# 3. Start development server
npm run dev

# 4. Or start production server
npm start
```

## Environment Configuration (`.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kriyova
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_TO=hello@kriyova.com
```

## Running Verification Tests
```bash
node test-backend.js
```
