## Description

Simple CRUD to create a User usando NestJs y MySQl como base de datos

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# install dependencies
$ pnpm i
# generate prisma client
$ pnpx prisma generate
# watch mode
$ pnpm run start:dev
```

### Ruta principal

[Live](https://crud-prueba-coral.vercel.app/)

### Mapped routes

{/user, POST}
{/user, GET}
{/user/:id, GET}
{/user/:id, PATCH}
{/user/:id, DELETE}
