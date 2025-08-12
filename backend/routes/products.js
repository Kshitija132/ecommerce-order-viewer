// routes/products.js
const express = require('express');
const router  = express.Router();
const Product = require('../models/Product');

// GET /api/products
router.get('/', async (req, res) => {
  const { category, department, minPrice, maxPrice, page = 1, limit = 20 } = req.query;
  const query = {};

  if (category)   query.category   = category;
  if (department) query.department = department;

  if (minPrice || maxPrice) {
    query.retail_price = {};
    if (minPrice) query.retail_price.$gte = parseFloat(minPrice);
    if (maxPrice) query.retail_price.$lte = parseFloat(maxPrice);
  }

  const products = await Product.find(query)
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  const total = await Product.countDocuments(query);

  res.json({
    products,
    totalPages: Math.ceil(total / limit),
    currentPage: parseInt(page),
    total
  });
});

// (Optional) GET /api/products/:sku
router.get('/:sku', async (req, res) => {
  const product = await Product.findOne({ sku: req.params.sku });
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
});

// (Optional) POST /api/products
router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.status(201).json(saved);
});

module.exports = router;
