# Simple Auth App (Next.js + TypeScript)

A minimal, self-contained signup/signin system.

## Features
- Sign up with name, email, password
- Sign in with email, password
- Passwords hashed with bcrypt (never stored in plain text)
- Session handled via a JWT stored in an httpOnly cookie
- `/dashboard` is a protected route (middleware redirects to `/signin` if not logged in)
- Sign out clears the session cookie
- Users stored in `data/users.json` (a simple file-based store — swap for a real database like PostgreSQL/MongoDB for production use)

## Setup

```bash
npm install
cp .env.local.example .env.local
```

Open `.env.local` and set `JWT_SECRET` to a long random string.

## Run

```bash
npm run dev
```

Visit http://localhost:3000 — it will redirect you to `/signin` or `/dashboard` depending on whether you're logged in.

## Project structure

```
app/
  page.tsx              -> redirects based on auth status
  signup/page.tsx        -> signup form
  signin/page.tsx        -> signin form
  dashboard/page.tsx     -> protected page, shows logged-in user
  api/auth/signup/route.ts
  api/auth/signin/route.ts
  api/auth/signout/route.ts
  api/auth/me/route.ts
  globals.css            -> all the UI styling
lib/
  db.ts   -> simple JSON file "database" for users
  auth.ts -> password hashing + JWT helpers
middleware.ts             -> protects /dashboard
data/users.json           -> where user records are stored
```

## Notes for production use
- Replace the JSON file store in `lib/db.ts` with a real database.
- Set `JWT_SECRET` to a strong, secret value via environment variables (never commit it).
- Consider adding rate limiting on the signin/signup routes and email verification.
