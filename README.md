

# 🛍️ MERN Stack Ecommerce App

Hi, I’m Kshitija 👋  
This is a full-stack product catalog application built with the MERN stack (MongoDB, Express, React, Node.js). It includes a backend utility for importing and verifying product data from CSV, and a frontend for browsing, filtering, and searching products.

---

## 📦 Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React, Axios, CSS/Flexbox |
| Backend    | Node.js, Express, Mongoose |
| Database   | MongoDB Atlas          |
| Testing    | Jest, Supertest, Postman |

---

## 🧩 Project Structure

```
├── backend/
│   ├── models/             # Mongoose schemas
│   ├── routes/             # Express API routes
│   ├── loadProducts.js     # CSV import script
│   ├── verifyData.js       # Data verification script
│   └── server.js           # Express server setup

├── frontend/
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Product listing, filters
│   │   ├── App.js          # Main app
│   │   └── index.js        # Entry point
│   └── public/             # Static assets

├── archive/
│   └── products.csv        # Source data

└── README.md               # This file
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kshitija132/ecommerce-order-viewer
cd product-catalog-app
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Import Product Data (Optional)

```bash
cd backend
node loadProducts.js
```

### 4. Run the App

```bash
# Backend
npm start

# Frontend (in separate terminal)
npm start
```

---

## 🌐 API Overview

Base URL: `/api/products`

| Endpoint        | Method | Description                      |
|----------------|--------|----------------------------------|
| `/`            | GET    | List products with filters       |
| `/categories`  | GET    | Get all categories               |
| `/brands`      | GET    | Get all brands                   |
| `/verify`      | GET    | Run data verification checks     |

Supports query params:
- `category`, `department`, `minPrice`, `maxPrice`, `page`, `limit`, `search`

---

## 🖥️ Frontend Features

- Product listing with pagination
- Category and price filters
- Search by name or brand
- Responsive layout (Flexbox + media queries)
- Axios-based API integration
- Error handling and loading states

---

## 🧪 Testing

- Backend API tested with Jest + Supertest
- Manual testing via Postman
- Frontend tested with React Testing Library (optional)

---

## ⚙️ Environment Setup

Create `.env` files in both `backend/` and `frontend/`:

**backend/.env**
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

**frontend/.env**
```
REACT_APP_API_BASE=http://localhost:5000/api
```

---

## 📊 Data Import Summary

- Validates and inserts products from CSV
- Uses streams for memory efficiency
- Adds indexes for fast queries
- Logs errors without halting import

---

## ✅ Status

- [x] Backend API complete  
- [x] CSV import and verification working  
- [x] Frontend UI functional and responsive  
- [ ] Optional: Add authentication and admin dashboard

---

## 🤝 Contributing

Feel free to fork, clone, and extend. If you spot bugs or want to improve something, open a PR or drop a message.

---

Let me know if you want to add deployment instructions (e.g., Render + Netlify), or set up CI/CD.
