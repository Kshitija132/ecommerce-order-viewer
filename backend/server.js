// server.js
const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

require('dotenv').config();  // if you use .env for MONGO_URI

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error', err));

// Mount your products routes at /api/products
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
