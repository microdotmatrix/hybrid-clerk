# Tech Stack and Project Conventions

Generated: 2025-08-17
Project: `next16-ai`
Package manager: `pnpm@10.10.0`

## Primary Technologies
- __Next.js__: ^15.4.6 (App Router, RSC)
- __React__: 19.1.0 (React Compiler enabled)
- __TypeScript__: ^5.9.2
- __Tailwind CSS__: ^4.1.12 (via `@tailwindcss/postcss`)
- __UI__: shadcn/ui (style: new-york), Radix UI, lucide-react
- __ORM__: Drizzle ORM ^0.44.4 with PostgreSQL
- __Auth__: Clerk (`@clerk/nextjs` ^6.31.1)
- __AI__: Vercel AI SDK (`@ai-sdk/*`), OpenAI, Anthropic, OpenRouter
- __Email/Comms__: Resend, `@react-email/components`

## Runtime & Build
- __Next config__: `next.config.ts`
  - experimental: `reactCompiler`, `viewTransition`, `useLightningcss`, `authInterrupts`
  - images: remote patterns configured (Unsplash, Cloudinary, AWS, ufs.sh, Google)
  - build ignores TS/ESLint errors (typescript.eslint ignoreDuringBuilds)
- __React Compiler__: `babel-plugin-react-compiler@19.1.0-rc.2`
- __Scripts__: `dev`/`build` use Turbopack

## UI System
- __Tailwind v4__: PostCSS plugin only
  - PostCSS: `postcss.config.mjs` uses `@tailwindcss/postcss`
  - Global CSS: `src/app/globals.css`
- __shadcn/ui__: `components.json`
  - rsc: true, tsx: true, style: new-york, iconLibrary: lucide
  - aliases: `ui` -> `@/components/ui`, `components` -> `@/components`, `utils` -> `@/lib/utils`

## TypeScript
- `tsconfig.json`
  - paths: `@/*` -> `./src/*`
  - strict: true, moduleResolution: bundler, jsx: preserve, noEmit: true

## Database & ORM
- __Drizzle Kit__: `drizzle.config.ts`
  - schema: `src/lib/db/schema/index.ts`
  - migrations: `src/lib/db/migrations`
  - dialect: postgresql
  - tablesFilter: `hybrid-clerk_*`
  - db url: `process.env.DATABASE_URL`
- __Common commands__
  - Generate: `pnpm db:generate`
  - Push: `pnpm db:push`
  - Migrate: `pnpm db:migrate`
  - Studio: `pnpm db:studio`
- __Driver__: `@neondatabase/serverless`

## Environment Variables
- Validation: `@t3-oss/env-nextjs` in `src/lib/env/server.ts`
- Required: `DATABASE_URL`, `BASE_URL`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `OPENROUTER_API_KEY`
- `drizzle.config.ts` loads `.env.local`

## AI Stack
- Libraries: `@ai-sdk/react`, `@ai-sdk/rsc`, `@ai-sdk/openai`, `@ai-sdk/anthropic`, `@openrouter/ai-sdk-provider`, `openai`
- Required keys: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `OPENROUTER_API_KEY`

## Notable Libraries
- `class-variance-authority`, `tailwind-merge`, `date-fns`, `motion`, `react-day-picker`, `input-otp`, `sonner`, `next-themes`, `server-only`

## Project Conventions (for AI assistants)
- __React + Next.js__
  - Use TypeScript everywhere. Avoid `any`. Do not use `React.FC`.
  - App Router + RSC by default. Client components only when needed.
  - Prefer Server Actions for mutations; use `useActionState` where suitable.
  - Lazy-load client components with `next/dynamic` when helpful. Use `Suspense` for streaming.
- __Styling & UI__
  - Tailwind CSS v4. Use shadcn/ui components. Keep design consistent with `components.json`.
- __Data & Validations__
  - Use Drizzle ORM with PostgreSQL. Co-locate schema under `src/lib/db/schema/`.
  - Validate inputs with Zod (`zod` is installed). Validate env with `@t3-oss/env-nextjs`.
- __Code Style__
  - Follow AirBnB style. Use `const` components, named exports, composable patterns.
  - Use `useMemo`/`useCallback` selectively to prevent unnecessary re-renders.
  - Prefer computed state over excessive `useState`/`useEffect`.
- __Paths & Imports__
  - Use `@/*` alias (maps to `src/*`). Key aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`.
- __AI Features__
  - Use Vercel AI SDK for AI tasks.

## Key Files
- Next: `next.config.ts`
- TS: `tsconfig.json`
- Tailwind/PostCSS: `postcss.config.mjs`, `src/app/globals.css`
- Drizzle: `drizzle.config.ts`, `src/lib/db/schema/index.ts`, `src/lib/db/migrations/`
- Env: `src/lib/env/server.ts`
- shadcn: `components.json`

## Commands
```bash
pnpm dev       # Start dev with Turbopack
pnpm build     # Build with Turbopack
pnpm start     # Start production server
pnpm lint      # Run ESLint (ignored during build)

pnpm db:generate  # Drizzle schema snapshot
pnpm db:push      # Push schema
pnpm db:migrate   # Run migrations
pnpm db:studio    # Open Drizzle Studio
```
