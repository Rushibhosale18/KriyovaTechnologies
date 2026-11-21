# Kriyova Technologies — Official Company Website

> **Tagline:** *"Building Digital Experiences. Empowering Businesses."*  
> **Brand Positioning:** Digital technology and software solutions company helping startups, educational institutions, coaching centers, small & medium businesses, and growing enterprises thrive through modern web experiences, custom software, e-commerce systems, and intelligent automation.

---

## 🚀 Overview

This repository contains the complete full-stack web application for **Kriyova Technologies**, built with a modern MERN stack architecture, premium dark technology design system, and clean code organization.

### 🌟 Key Highlights
- **Premium UI/UX:** Tailored dark technology aesthetic (`#0B1220`, `#111827`, `#172554`, `#2563EB`, `#06B6D4`) with smooth Framer Motion transitions, responsive layouts, glass accents, and custom SVG dashboard graphics.
- **Production-Ready Backend:** Modular Node.js + Express.js API with Mongoose schemas, rate limiting, Helmet security headers, CORS origin protection, centralized error management, and resilient development offline mode.
- **Honest Positioning:** Transparent branding highlighting founder Rushikesh Bhosale (BE Electronics and Telecommunication Engineering) and clearly labelled concept/demonstration projects with zero false metrics or fake testimonials.
- **Validated Interactive Workflows:** End-to-end validated Contact Enquiry form and Custom Project Quote generator with instant feedback, spinner indicators, and MongoDB persistence.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18 (Vite build tool)
- **Language:** JavaScript (Clean JSX, no TypeScript)
- **Styling:** Tailwind CSS with custom brand theme tokens
- **Icons:** Lucide React
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **HTTP Client:** Axios with response interceptors

### Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Security:** Helmet, CORS, Express-Rate-Limit (100 req/15min)
- **Utilities:** Nodemailer (configurable SMTP notifications)

---

## 📂 Project Architecture

```
kriyova-technologies/
├── frontend/                     # React 18 + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/             # Custom SVG dashboard graphics
│   │   │   ├── layout/           # Sticky Navbar, Footer with legal & social links
│   │   │   └── ui/               # Reusable Button, Card, Badge, SectionHeader
│   │   ├── hooks/                # useScrollAnimation and custom hooks
│   │   ├── pages/                # 9 Complete Pages
│   │   │   ├── Home.jsx          # Hero, Services, Why Us, Projects, Process, Tech, CTA
│   │   │   ├── Services.jsx      # Web Dev, E-Commerce, AI & Auto, Custom Software
│   │   │   ├── Portfolio.jsx     # 6 Filterable Demo Projects with Details Modal
│   │   │   ├── About.jsx         # Story, Mission/Vision, Founder Profile, Values
│   │   │   ├── Process.jsx       # 8-step client journey with timeline visuals
│   │   │   ├── Contact.jsx       # Enquiries form + direct communication channels
│   │   │   ├── Quote.jsx         # Custom estimation generator + project scope
│   │   │   ├── PrivacyPolicy.jsx # Comprehensive privacy documentation
│   │   │   └── Terms.jsx         # Legal terms of service
│   │   ├── utils/                # api.js client, constants.js
│   │   ├── App.jsx               # Routes, Suspense code-splitting, ScrollToTop
│   │   ├── main.jsx              # App entry point
│   │   └── index.css             # Tailwind base styles and utility classes
│   ├── index.html                # SEO meta tags, Google Fonts Inter
│   ├── vite.config.js            # Vite config with API proxy
│   ├── tailwind.config.js        # Brand color extensions
│   └── package.json
│
└── backend/                      # Node.js + Express API
    ├── config/
    │   └── db.js                 # Mongoose connection with resilient fallback
    ├── controllers/
    │   ├── contactController.js  # Enquiry handling + validation
    │   └── quoteController.js    # Quote requests + validation
    ├── middleware/
    │   ├── errorHandler.js       # Centralized error handler
    │   ├── rateLimiter.js        # API rate limiting
    │   └── validate.js           # Server-side sanitizer and validator
    ├── models/
    │   ├── Enquiry.js            # Mongoose schema for contact messages
    │   └── Quote.js              # Mongoose schema for custom quotes
    ├── routes/
    │   ├── contactRoutes.js      # POST /api/contact
    │   ├── quoteRoutes.js        # POST /api/quote
    │   └── healthRoutes.js       # GET /api/health
    ├── utils/
    │   └── sendEmail.js          # Optional Nodemailer email dispatch
    ├── .env.example              # Environment variables template
    ├── server.js                 # Express server configuration
    └── package.json
```

---

## ⚡ Quick Start Guide

### 1. Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm** or **pnpm**
- **MongoDB:** (Optional for local review; backend has resilient in-memory fallback)

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
Backend will start on `http://localhost:5000`.

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Frontend will be accessible at `http://localhost:5173`.

---

## 🌐 API Specification

| Endpoint | Method | Description | Payload |
|---|---|---|---|
| `/api/health` | `GET` | Server health check | None |
| `/api/contact` | `POST` | Submit general enquiry | `{ name, email, description, [businessName, phone, service, budget] }` |
| `/api/quote` | `POST` | Request formal project quote | `{ name, email, projectType, requirements, [phone, budget, timeline] }` |

---

## 📄 License & Intellectual Property

Copyright © 2024–2026 **Kriyova Technologies**. All rights reserved.
