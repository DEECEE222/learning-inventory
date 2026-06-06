const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
const { eq } = require('drizzle-orm');
const { categories, products } = require('./schema');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

async function getProductsWithCategory() {
  const result = await db
    .select({
      id: products.id,
      producto: products.name,
      precio: products.price,
      stock: products.stock,
      categoria: categories.name,
    })
    .from(products)
    .innerJoin(categories, eq(products.category_id, categories.id));

  return result;
}

module.exports = { db, getProductsWithCategory };