# SensAI — Project Roadmap

## Phase Gates
Every phase ends with:
1. `prettier --write .`
2. `eslint . --fix` (zero errors before proceeding)
3. Git commit with conventional commit message (no co-author lines)

---

## Phase 1 — Research & Foundation
**Goal:** Finalize all decisions, scaffold the project, wire up tooling.

### Tasks
- [ ] Initialize Next.js 14 (App Router, TypeScript, Tailwind CSS)
- [ ] Install and configure shadcn/ui (`npx shadcn@latest init`)
- [ ] Install Framer Motion, Recharts, react-d3-tree, date-fns, Lucide React
- [ ] Configure `next-themes` for dark/light mode
- [ ] Set up ESLint + Prettier with project config
- [ ] Set up absolute imports (`@/`)
- [ ] Create folder structure (see below)
- [ ] Create `.env.local` with all required env var keys (empty values)
- [ ] Add `.env.local` to `.gitignore`

### Folder Structure
```
sensai/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   └── stats/page.tsx
│   │   └── problems/[slug]/page.tsx
│   ├── api/
│   │   ├── problems/route.ts
│   │   ├── problems/[id]/route.ts
│   │   ├── stats/daily/route.ts
│   │   ├── user/profile/route.ts
│   │   ├── premium/status/route.ts
│   │   └── webhooks/clerk/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/              (shadcn generated)
│   ├── layout/          (Navbar, Sidebar, Footer)
│   ├── problems/        (ProblemCard, FilterBar, ProblemList, DifficultyBadge, TagChip)
│   ├── stats/           (StatCard, DailyChart, StreakDisplay)
│   ├── auth/            (PremiumGate, AuthGuard)
│   └── shared/          (ThemeToggle, Logo, LoadingSpinner)
├── lib/
│   ├── supabase/        (client.ts, server.ts, types.ts)
│   ├── clerk/           (utils.ts)
│   └── utils.ts         (cn helper)
├── hooks/               (useProblems, useStats, useUser)
├── types/               (index.ts — all shared TypeScript types)
├── styles/              (variant-a.css, variant-b.css)
├── SPEC.md
├── ROADMAP.md
└── middleware.ts
```

**Phase 1 exit criteria:** `next dev` runs, shadcn components installable, theme toggle works, no lint errors.

---

## Phase 2 — Design System
**Goal:** Implement both design variants, all tokens, dark/light mode, and core layout components.

### Tasks
- [ ] Define CSS variables for Variant A ("Sharp") — fonts, radius, shadows
- [ ] Define CSS variables for Variant B ("Soft") — fonts, radius, shadows
- [ ] Implement dark/light mode switching with `next-themes` + `ThemeToggle` component
- [ ] Build `Navbar` with logo, theme toggle, auth buttons
- [ ] Build `Sidebar` (dashboard navigation)
- [ ] Build `Footer`
- [ ] Build `FilterBar` component (chip filters for difficulty + tags)
- [ ] Build `DifficultyBadge` (easy/medium/hard color-coded)
- [ ] Build `TagChip`
- [ ] Build `PremiumGate` (blur overlay + upgrade CTA)
- [ ] Add all shadcn components needed: Button, Card, Badge, Tabs, Select, Sheet, Dialog, Skeleton, Tooltip, DropdownMenu, Separator, Table, Progress, Switch, Alert, Toast (Sonner)
- [ ] Verify both variants render correctly in dark and light mode

**Phase 2 exit criteria:** All design tokens applied, both variants render, dark/light toggle works, no lint errors.

---

## Phase 3 — API Design & Data Layer
**Goal:** Build all API routes and Supabase integration.

### Tasks
- [ ] Create Supabase project and run schema migrations (all 5 tables)
- [ ] Configure RLS policies for all tables
- [ ] Add Supabase client (browser) and server-side client to `lib/supabase/`
- [ ] Add TypeScript types generated from Supabase schema (`lib/supabase/types.ts`)
- [ ] Implement `GET /api/problems` with filter + pagination query params
- [ ] Implement `GET /api/problems/[id]` (auth check + premium gate)
- [ ] Implement `GET /api/stats/daily` (auth required)
- [ ] Implement `GET /api/user/profile` (auth required)
- [ ] Implement `GET /api/premium/status` (auth required)
- [ ] Implement `POST /api/webhooks/clerk` (user sync on create/update)
- [ ] Add middleware.ts for Clerk route protection

**Phase 3 exit criteria:** All API routes return correct data/errors, RLS enforced, middleware protecting auth routes, no lint errors.

---

## Phase 4 — Component Library
**Goal:** Build all custom components on top of shadcn primitives.

### Tasks
- [ ] `ProblemCard` — shows title, difficulty, tags, solved state, bookmark button
- [ ] `ProblemList` — paginated list of ProblemCards with empty/loading states
- [ ] `DataTable` — shadcn table wrapper with sorting + pagination
- [ ] `StatCard` — metric display (number, label, trend arrow)
- [ ] `DailyChart` — Recharts line/bar chart for daily solve activity
- [ ] `StreakDisplay` — current streak with visual indicator
- [ ] `TreeVisualizer` — react-d3-tree wrapper for tree problem visualization
- [ ] `FilterBar` — full filter UI (difficulty chips, tag multi-select, status toggle)
- [ ] `TabsNav` — dashboard tab navigation (All / Daily / Bookmarked)
- [ ] `AuthGuard` — wrapper that shows sign-in prompt for guests
- [ ] `LoadingSpinner` and `Skeleton` variants for all data states
- [ ] `Logo` component

**Phase 4 exit criteria:** All components render in isolation in both themes/variants, no lint errors.

---

## Phase 5 — Page Implementation
**Goal:** Wire all pages to real data using hooks and API routes.

### Tasks
- [ ] `app/page.tsx` — landing page with limited problem list (guest-friendly)
- [ ] `app/(auth)/sign-in/page.tsx` — Clerk SignIn component
- [ ] `app/(auth)/sign-up/page.tsx` — Clerk SignUp component
- [ ] `app/(dashboard)/dashboard/page.tsx` — full problem list with filters + tabs
- [ ] `app/(dashboard)/dashboard/stats/page.tsx` — daily stats with charts
- [ ] `app/(dashboard)/problems/[slug]/page.tsx` — problem detail with premium gate
- [ ] Custom React hooks: `useProblems`, `useStats`, `useUser`
- [ ] Loading and error states on all pages
- [ ] Guest vs registered user branching logic on landing page

**Phase 5 exit criteria:** All pages render real data, auth gates work, premium gate shows for non-premium users, no lint errors.

---

## Phase 6 — Clerk Integration
**Goal:** Complete auth flow — sign up, sign in, sign out, webhook sync.

### Tasks
- [ ] Add Clerk provider to `app/layout.tsx`
- [ ] Configure Clerk publishable + secret keys in `.env.local`
- [ ] Implement Clerk webhook handler (`/api/webhooks/clerk`) to upsert users into Supabase
- [ ] Configure webhook in Clerk dashboard (user.created, user.updated events)
- [ ] Test guest → sign up → registered user flow end-to-end
- [ ] Test sign out → returns to guest state
- [ ] Verify premium gate shows for non-premium registered users
- [ ] Verify RLS correctly restricts data per user

**Phase 6 exit criteria:** Full auth flow works, user data syncs to Supabase, RLS enforced, no lint errors.

---

## Phase 7 — E2E Flow Validation (Manual)
**Goal:** Manually verify all critical user flows work correctly in the browser.

### Guest User Checklist
- [ ] Can view landing page with limited problem list (max 10)
- [ ] Cannot view problem detail (redirected to sign-in)
- [ ] Cannot view dashboard or stats
- [ ] Filter bar works on limited list
- [ ] Can navigate to sign-in / sign-up

### Registered User Checklist
- [ ] Can sign in via Clerk
- [ ] Redirected to `/dashboard` after sign-in
- [ ] Full problem list loads with pagination
- [ ] Filter by difficulty works
- [ ] Filter by tag works
- [ ] Tab switching (All / Daily / Bookmarked) works
- [ ] Problem detail page loads
- [ ] Premium gate shows for locked content
- [ ] Daily stats page shows charts and streak
- [ ] Sign out returns to guest state

**Phase 7 exit criteria:** All checklist items pass manually, no lint errors.

---

## Phase 8 — CI/CD & Deployment
**Goal:** GitHub Actions pipeline + Vercel deployment.

### Tasks
- [ ] Create `.github/workflows/ci.yml` with lint, format-check, and build jobs
- [ ] Configure Vercel project and link to GitHub repo
- [ ] Add all env vars to Vercel dashboard
- [ ] Add all env vars to GitHub Actions secrets
- [ ] Push to main → verify CI passes
- [ ] Verify Vercel deployment succeeds
- [ ] Test production URL for guest and registered flows
- [ ] Configure Clerk production domain in Clerk dashboard
- [ ] Configure Supabase allowed origins for production URL

**Phase 8 exit criteria:** CI green on push, Vercel deployment live, production flows verified.

---

## Milestones Summary

| # | Phase | Deliverable |
|---|---|---|
| 1 | Research & Foundation | Running Next.js scaffold, tooling configured |
| 2 | Design System | Both variants, dark/light mode, layout components |
| 3 | API & Data Layer | All API routes + Supabase schema + RLS |
| 4 | Component Library | All custom components built on shadcn |
| 5 | Pages | All pages wired to real data |
| 6 | Clerk Auth | Full auth flow + webhook sync |
| 7 | E2E Validation | Manual checklist all green |
| 8 | CI/CD & Deploy | Live on Vercel, CI passing |

---

## Environment Variables Reference

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
