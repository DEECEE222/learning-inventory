const { pgTable, uuid, varchar, numeric, integer, text } = require('drizzle-orm/pg-core');

const categories = pgTable('categories', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
});

const products = pgTable('products', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  price: numeric('price').notNull(),
  stock: integer('stock').default(0),
  category_id: uuid('category_id').notNull(),
});

module.exports = { categories, products };