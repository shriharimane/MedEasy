# MedEasy 💊

A full-stack online medicine delivery platform that makes healthcare more accessible. Users can browse pharmacies, manage a cart, place orders, pay securely via Stripe, and track order history — all through a responsive, Redux-powered interface.

---

## Overview

MedEasy replicates a real-world e-commerce workflow applied to healthcare. The frontend is built with React and Redux Toolkit for predictable state management, while the backend handles authentication, order processing, image storage, and payment — following a RESTful, modular architecture. The project demonstrates end-to-end full-stack development from database schema to payment confirmation email.

---

## Features

### User
- Registration and login with secure authentication
- Browse pharmacies and medicine listings
- Search and filter products by name or category
- View medicine details — price, image, and description
- Add and remove items from cart
- Place orders with a delivery address
- View full order history and current order status
- Fully responsive UI across all devices

### Payments & Notifications
- Secure checkout via **Stripe**
- Order confirmation emails via **Mailtrap**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Redux & Redux Toolkit, React Router DOM, Axios |
| Styling | HTML5, CSS3, JavaScript, React Input Range |
| Backend | Node.js (Express), MongoDB |
| Image Storage | Cloudinary |
| Payments | Stripe |
| Email | Mailtrap |

---

## Project Structure

```
MedEasy/
│
├── Database/
│   ├── Internship.fooditems.json      # Seed data — medicine items
│   ├── Internship.menus.json          # Seed data — menus
│   └── Internship.restaurants.json   # Seed data — pharmacies
│
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   ├── favicon.ico
│   │   └── index.html
│   │
│   └── src/
│       ├── actions/                   # Redux action creators
│       ├── components/                # Reusable UI components
│       ├── constants/                 # Action type constants
│       ├── reducer/                   # Redux reducers
│       ├── store.js                   # Redux store configuration
│       ├── App.jsx                    # Root component & routing
│       └── index.js                   # React entry point
│
├── Backend-obfuscated/
│   ├── config/                        # DB connection & environment config
│   ├── controllers/                   # Business logic per route
│   ├── middlewares/                   # Auth & validation middleware
│   ├── models/                        # Mongoose database schemas
│   ├── routes/                        # API route definitions
│   ├── utils/                         # Helper / utility functions
│   └── view/                          # View templates (if applicable)
│
├── menuReducer.js
└── README.md
```

---

## Getting Started

**Prerequisites:** Node.js 16+, npm, and a running MongoDB instance

### 1. Clone the repository
```bash
git clone <repository-url>
cd MedEasy
```

### 2. Frontend setup
```bash
cd frontend
npm install
npm start
```
Runs at: [http://localhost:3000](http://localhost:3000)

### 3. Backend setup
```bash
cd Backend-obfuscated
npm install
npm start
```
Runs at: [http://localhost:5000](http://localhost:5000)

### 4. Environment variables

Create a `.env` file inside `Backend-obfuscated/`:

```env
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_URL=your_cloudinary_url
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
```

> **Note:** Never commit your `.env` file. It is already listed in `.gitignore`.

---

## Application Flow

```
Sign up / Log in
      ↓
Browse pharmacies & medicines
      ↓
Add items to cart
      ↓
Enter delivery address & place order
      ↓
Complete payment via Stripe
      ↓
Receive confirmation email (Mailtrap)
      ↓
Track order in order history
```

---

## Concepts Demonstrated

- Full-stack MERN architecture (MongoDB, Express, React, Node.js)
- Redux & Redux Toolkit for global state management
- RESTful API design with controllers, routes, and middleware
- JWT-based authentication and protected routes
- Stripe payment gateway integration
- Cloudinary for cloud-based image storage
- Email notifications with Mailtrap
- Modular, scalable codebase organisation

---

## Roadmap

- [ ] Prescription upload and verification system
- [ ] Doctor consultation module
- [ ] Admin dashboard for inventory and order management
- [ ] Real-time order tracking
- [ ] Push notifications
- [ ] Mobile app version (React Native)

---

## Use Cases

- Online pharmacy or healthcare e-commerce platform
- Full-stack internship or placement showcase project
- College major project with real-world integrations
- MERN stack + payments reference implementation

---

## License

MIT — free to use and adapt with attribution.
