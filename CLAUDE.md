# [PROJECT NAME]
# Stack: [Node.js/Python] + [NestJS/Express/FastAPI] + [PostgreSQL/MongoDB] + [Next.js/React/React Native]
# Status: [MVP / Production / Scaling]

---

## Active Stack (delete what you don't use)
- **Backend**: Node.js 20 + TypeScript strict + NestJS + Prisma + PostgreSQL + Redis + BullMQ
- **Frontend**: Next.js 14 App Router + TypeScript + Tailwind + Zustand + TanStack Query v5
- **Mobile**: React Native (New Arch) + Redux Toolkit + React Navigation
- **Auth**: JWT (15m access / 7d refresh) + RBAC + httpOnly cookie for refresh token
- **Testing**: Vitest + Supertest + Playwright

## Commands
```
dev:          npm run dev          python: uvicorn app.main:app --reload
build:        npm run build        python: ruff check . && mypy app/
test:         npm run test         python: pytest -v --cov=app
typecheck:    npm run typecheck
migrate:      npx prisma migrate dev    python: alembic upgrade head
all-checks:   make check
```

## Layer Rules (NEVER BREAK THESE)
```
Node.js:  api/ → services/ → data/     (never skip, never reverse)
Python:   routers/ → services/ → repositories/ → models/
Frontend: app/ → features/ → components/ui/    (no business logic in components)
Mobile:   screens/ → features/ → store/ + api/
```

## Non-Negotiable Rules
- Zero `any` types — Zod (TS) / Pydantic v2 (Python) for ALL inputs
- ORM only — no raw SQL string interpolation ever
- Every async operation: loading + error + success states handled
- All secrets in env vars — validated at startup, never hardcoded
- Standard response: `{ success, data?, error?, meta?, requestId }`
- CSS colors: CSS variables only — never hardcode hex/rgb in components
- Animate only `transform` + `opacity` — never layout properties

## → For domain-specific guidance: read agent_docs/00-start-here.md
