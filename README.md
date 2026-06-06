# Learning Inventory

Aplicación fullstack de gestión de inventario construida con PostgreSQL, Neon, Node.js, Express, React y Vite.

## Estructura del proyecto

- `learning-inventory-backend/` — API REST con Node.js y Express
- `learning-inventory-frontend/` — Interfaz web con React y Vite
- `sql/` — Scripts de esquema y datos
- `docs/` — Documentación técnica

## Stack tecnológico

- **Base de datos**: PostgreSQL en Neon (serverless)
- **Backend**: Node.js, Express, @neondatabase/serverless
- **Frontend**: React, Vite
- **Despliegue**: Vercel

## Endpoints

- `GET /api/products` — Devuelve todos los productos con su categoría
- `POST /api/products` — Inserta un producto nuevo

## ORMs: ventaja de Drizzle ORM

Escribir SQL puro es esencial para entender los fundamentos, pero en proyectos grandes se usan ORMs como Drizzle ORM. Al estar completamente tipado en TypeScript, el editor detecta errores en las consultas antes de ejecutarlas, lo que reduce bugs y hace el código más mantenible y escalable.

## Despliegue

- Frontend: https://learning-inventory-frontend-sage.vercel.app/
- Backend: https://learning-inventory-nu.vercel.app/