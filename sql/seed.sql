-- ============================================
-- FASE 6: Learning Inventory - Seed
-- ============================================

-- Categorías
INSERT INTO categories (name, description) VALUES
  ('Electrónica',  'Dispositivos tecnológicos y accesorios'),
  ('Hogar',        'Muebles, decoración y utensilios'),
  ('Ropa',         'Prendas de vestir y accesorios de moda');

-- Productos (usamos subqueries para obtener el UUID de cada categoría)
INSERT INTO products (name, price, stock, category_id) VALUES
  ('Laptop Pro 15',     1299.99, 10, (SELECT id FROM categories WHERE name = 'Electrónica')),
  ('Auriculares BT',      89.99, 35, (SELECT id FROM categories WHERE name = 'Electrónica')),
  ('Teclado mecánico',    74.50, 20, (SELECT id FROM categories WHERE name = 'Electrónica')),
  ('Sofá 3 plazas',      499.00,  5, (SELECT id FROM categories WHERE name = 'Hogar')),
  ('Lámpara de pie',      59.99, 12, (SELECT id FROM categories WHERE name = 'Hogar')),
  ('Camiseta algodón',    19.99, 50, (SELECT id FROM categories WHERE name = 'Ropa')),
  ('Zapatillas running',  95.00, 30, (SELECT id FROM categories WHERE name = 'Ropa'));

-- ============================================
-- CONSULTAS DEL EJERCICIO
-- ============================================

-- 1. Simular una venta: restar stock a un producto
UPDATE products
SET stock = stock - 1
WHERE name = 'Laptop Pro 15';

-- 2. Eliminar un producto
DELETE FROM products
WHERE name = 'Lámpara de pie';

-- 3. INNER JOIN: producto, precio y nombre de categoría
SELECT 
  p.name        AS producto,
  p.price       AS precio,
  c.name        AS categoria
FROM products p
INNER JOIN categories c ON p.category_id = c.id
ORDER BY c.name, p.price DESC;

-- 4. GROUP BY: cuántos productos tiene cada categoría
SELECT
  c.name        AS categoria,
  COUNT(p.id)   AS total_productos
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.name
ORDER BY total_productos DESC;
