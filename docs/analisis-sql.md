# Análisis SQL

## INNER JOIN vs LEFT JOIN

### INNER JOIN
Devuelve **solo las filas que tienen coincidencia en ambas tablas**.

**Escenario real:** Quieres ver todos los pedidos con su cliente. Si un pedido tiene un `customer_id` que no existe en la tabla de clientes (dato corrupto), ese pedido no aparece en el resultado. Útil cuando solo te interesan los datos completos y consistentes.

```sql
SELECT p.name, c.name AS categoria
FROM products p
INNER JOIN categories c ON p.category_id = c.id;
```
→ Solo aparecen productos que tienen una categoría asignada.

### LEFT JOIN
Devuelve **todas las filas de la tabla izquierda**, y los datos de la derecha cuando hay coincidencia. Si no hay coincidencia, rellena con `NULL`.

**Escenario real:** Quieres ver todas tus categorías y cuántos productos tiene cada una, incluyendo las categorías vacías. Con INNER JOIN las categorías sin productos desaparecerían del resultado.

```sql
SELECT c.name, COUNT(p.id) AS total
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.name;
```
→ Aparecen todas las categorías, aunque algunas tengan `total = 0`.

### Regla práctica
Usa **INNER JOIN** cuando necesitas datos completos de ambas tablas.  
Usa **LEFT JOIN** cuando quieres conservar todos los registros de la tabla principal aunque no tengan relación en la otra.
