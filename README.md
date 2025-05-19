# API PRISMA Nest

Este proyecto es una API construida con [NestJS](https://nestjs.com/) y [Prisma](https://www.prisma.io/) como ORM. El objetivo es demostrar la versatilidad de Prisma y el uso de NestJS para crear una API básica y sencilla de la manera más cómoda posible.

## 1. Clonar el repositorio

```bash
git clone https://github.com/FelipeLilloS/api-prisma-nest
cd api-prisma-nest
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Configurar variables de entorno

Crea (o verifica) el archivo `.env` en la raíz del proyecto y define la variable `DATABASE_URL`. Por ejemplo, para SQLite:

```
DATABASE_URL="file:./dev.db"
```

> **Nota:** Este parámetro puede variar según el tipo de base de datos que se utilice.

## 4. Generar la base de datos y aplicar migraciones

El siguiente comando crea la base de datos y aplica las migraciones definidas en el esquema de Prisma:

```bash
npx prisma migrate dev --name init
```

## 5. Generar el cliente de Prisma

Si realizas algún cambio en el esquema, genera el nuevo cliente con:

```bash
npx prisma generate
```

## 6. Levantar el servidor

Para iniciar el servicio, ejecuta:

```bash
npm run start:dev
```

o

```bash
npm run start
```

El primer comando permite ver en tiempo real cada cambio realizado en el código. El segundo comando ejecuta el servicio en modo producción; cualquier cambio posterior requerirá reiniciar el servidor.

La API estará disponible en `http://localhost:3000`.

---

## 7. Casos de Uso

### **User**

#### Creación de Usuario sin Post

Crea un usuario básico.

```bash
curl -X POST http://localhost:3000/user/create \
-H "Content-Type: application/json" \
-d '{"email":"usuario1@ejemplo.com","name":"Usuario 1"}'
```

#### Creación de Usuario con Post

Crea un usuario junto con un post asociado.

```bash
curl -X POST http://localhost:3000/user/createWithPost \
-H "Content-Type: application/json" \
-d '{"email":"usuario2@ejemplo.com","name":"Usuario 2","title":"Primer Post","content":"Contenido del post"}'
```

#### Lectura de Usuarios

Obtiene todos los usuarios.

```bash
curl http://localhost:3000/user
```

#### Lectura de Usuario por ID

Obtiene un usuario específico por su ID.

```bash
curl http://localhost:3000/user/1
```

#### Actualización de Usuario

Actualiza los datos de un usuario.

```bash
curl -X PUT http://localhost:3000/user/update/1 \
-H "Content-Type: application/json" \
-d '{"email":"nuevoemail@ejemplo.com","name":"Nuevo Nombre"}'
```

#### Eliminación de Usuario

Elimina un usuario por su ID.

```bash
curl -X DELETE http://localhost:3000/user/delete/1
```

---

### **Post**

#### Creación de Post

(Agrega aquí el endpoint correspondiente cuando esté implementado)

#### Lectura de Posts

(Agrega aquí el endpoint correspondiente cuando esté implementado)

#### Actualización de Post por ID

(Agrega aquí el endpoint correspondiente cuando esté implementado)

#### Eliminación de Post

(Agrega aquí el endpoint correspondiente cuando esté implementado)

---

## Recursos útiles

- [Documentación de NestJS](https://docs.nestjs.com/)
- [Documentación de Prisma](https://www.prisma.io/docs/)