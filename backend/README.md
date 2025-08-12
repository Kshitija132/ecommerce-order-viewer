
# Products Database – MongoDB Import Tool

Hi, I’m Kshitija 👋  
This is a glimpse of building a e commerce application.
This is a Node.js utility I built to import product data from a CSV file into MongoDB. It’s designed for MERN stack apps and includes validation, indexing, and basic verification.

---

## What It Does

- ✅ Parses and validates CSV data  
- 📦 Inserts products in batches (1000 rows)  
- 🧠 Uses a Mongoose schema with indexes  
- 📊 Verifies data with stats and sample queries  
- 🛠️ Handles errors without stopping the process

---

## Product Schema

```js
{
  id: Number,            // unique
  cost: Number,
  category: String,      // indexed
  name: String,
  brand: String,         // indexed
  retail_price: Number,
  department: String,    // indexed
  sku: String,           // unique
  distribution_center_id: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## How to Use

### 1. Install dependencies

```bash
npm install
```

### 2. Import products

```bash
node loadProducts.js
```

### 3. Verify import

```bash
node verifyData.js
```

---

## Sample Query

```js
const products = await Product.find({
  category: 'Accessories',
  retail_price: { $gte: 10, $lte: 50 }
}).limit(20).skip(page * 20);
```

---

## API Route Example

```js
app.get('/api/products', async (req, res) => {
  const query = buildQuery(req.query);
  const products = await Product.find(query).limit(limit).skip(offset);
  const total = await Product.countDocuments(query);
  res.json({ products, total });
});
```

---

## Notes

- MongoDB Atlas (`products_db`, `products` collection)  
- Unique indexes on `id` and `sku`  
- Streams used for memory-efficient CSV handling  
- Ready for MERN stack integration

