# Seguridad en base de datos

## ¿Qué es una inyección SQL?

Ocurre cuando un atacante introduce código SQL dentro de un campo de entrada
y ese código se ejecuta en la base de datos.

### Ejemplo vulnerable
const name = req.body.name;
const query = "SELECT * FROM products WHERE name = '" + name + "'";

Un atacante puede enviar: x'; DROP TABLE products;--
y ese código se ejecutaría destruyendo la tabla.

### Cómo lo prevenimos: parámetros preparados

Con el driver de Neon usamos template literals que separan el código SQL
de los datos del usuario:

const result = await sql`
  INSERT INTO products (name, price, stock, category_id)
  VALUES (${name}, ${price}, ${stock}, ${category_id})
`;

Los valores entre ${} nunca se interpretan como SQL, solo como datos.
El driver los envía por un canal separado al motor de base de datos,
haciendo imposible que un atacante altere la consulta.
