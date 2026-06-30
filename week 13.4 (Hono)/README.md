```txt
npm install
cp .env.example .env
npm run dev
```

Prisma/Postgres backend base:
- Set `DATABASE_URL` in `.env` to your Postgres connection string.
- Run `npm run prisma:generate` to generate the Prisma client.
- Run `npm run prisma:migrate` to create the initial database tables.

Available starter routes:
- `GET /health` checks the Prisma/Postgres connection.
- `GET /users` lists users.
- `POST /users` creates a user.

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiating `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```
