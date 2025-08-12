// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  cost: Number,
  category: { type: String, index: true },
  name: String,
  brand: { type: String, index: true },
  retail_price: Number,
  department: { type: String, index: true },
  sku: { type: String, unique: true },
  distribution_center_id: Number
}, { timestamps: true });

// Compound indexes
productSchema.index({ category: 1, department: 1 });
productSchema.index({ brand: 1, category: 1 });

module.exports = mongoose.model('Product', productSchema);
