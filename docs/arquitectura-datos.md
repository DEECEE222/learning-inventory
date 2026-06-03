# Arquitectura de datos

## ¿Qué es una Foreign Key?

`category_id` en la tabla `products` es una **foreign key** (clave foránea). Significa que esa columna no puede contener cualquier valor: solo puede contener un UUID que exista como `id` en la tabla `categories`.

Es el "pegamento relacional": garantiza que ningún producto apunte a una categoría que no existe.

## ON DELETE CASCADE vs ON DELETE RESTRICT

| Comportamiento | Qué pasa si eliminas una categoría con productos |
|---|---|
| `ON DELETE CASCADE` | Se eliminan automáticamente todos sus productos |
| `ON DELETE RESTRICT` | La base de datos lanza un error y bloquea el DELETE |

### ¿Cuál es más seguro?

`ON DELETE RESTRICT` es la opción más segura para un inventario.

**Razón:** en una tienda real, nunca queremos borrar productos accidentalmente por eliminar una categoría. RESTRICT obliga al desarrollador a tomar una decisión explícita: reasignar los productos a otra categoría primero, o borrarlos manualmente. CASCADE es conveniente pero peligroso — un solo DELETE en categories podría borrar miles de productos sin aviso.
