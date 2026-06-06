const express = require('express');
const { sql } = require('./lib/db');
const { getProductsWithCategory } = require('./lib/drizzle');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// GET - obtener todos los productos con su categoría (SQL puro)
app.get('/api/products', async (req, res) => {
  try {
    const products = await sql`
      SELECT 
        p.id,
        p.name        AS producto,
        p.price       AS precio,
        p.stock,
        c.name        AS categoria
      FROM products p
      INNER JOIN categories c ON p.category_id = c.id
      ORDER BY c.name, p.name
    `;
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - insertar un producto nuevo
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, stock, category_id } = req.body;

    const result = await sql`
      INSERT INTO products (name, price, stock, category_id)
      VALUES (${name}, ${price}, ${stock}, ${category_id})
      RETURNING *
    `;
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET con Drizzle ORM
app.get('/api/products-drizzle', async (req, res) => {
  try {
    const products = await getProductsWithCategory();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});