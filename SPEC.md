# SensAI — Project Constitution

## 1. Project Overview

SensAI is a full-stack SaaS learning and productivity platform. It enables users to track problems, view daily stats, navigate features via tabs, and access premium content. The platform supports two user types: **guests** (unauthenticated, limited access) and **registered users** (authenticated, full access).

---

## 2. Tech Stack

### Core
| Layer | Technology | Tier |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Free |
| Auth | Clerk | Free tier |
| Database | Supabase (PostgreSQL) | Free tier |
| Styling | Tailwind CSS | Free |
| Components | shadcn/ui (all components built from shadcn primitives) | Free |
| Deployment | Vercel | Free tier |
| CI/CD | GitHub Actions | Free |

### Open-Source Libraries (Zero-Cost)
| Purpose | Library | Justification |
|---|---|---|
| Animation | Framer Motion | Best-in-class React animation, MIT license, Next.js compatible |
| Graph/Tree/Array Viz | Recharts | Composable React chart library, MIT, no cost |
| Tree Structures | react-d3-tree | D3-based tree rendering, MIT, zero-cost |
| Array/List Viz | Custom shadcn components | Keep visual primitives in-house using shadcn tables + cards |
| Icons | Lucide React | Consistent icon set, ships with shadcn |
| Date handling | date-fns | Lightweight, tree-shakeable, MIT |
| Class merging | clsx + tailwind-merge | Required by shadcn/ui |

---

## 3. Design System

### Themes
- Full **dark mode** and **light mode** support via Tailwind CSS `dark:` variants + `next-themes`
- Default: system preference, user can toggle

### Two Design Variants
Both variants share the same component API but differ in visual weight and personality:

#### Variant A — "Sharp" (default)
- **Font:** Geist Sans (headings) + Geist Mono (code/stats)
- **Cards:** Sharp corners (`rounded-md`), thin 1px borders, subtle shadows
- **Layout:** Dense, information-heavy, compact spacing
- **Filters:** Pill-style chip filters with sharp edges

#### Variant B — "Soft"
- **Font:** Inter (headings) + JetBrains Mono (code/stats)
- **Cards:** Rounded corners (`rounded-xl`), no border, elevated shadows
- **Layout:** Spacious, generous padding, breathing room
- **Filters:** Toggle-button style filters with rounded full

### Design Tokens (shared across variants)
```
Colors (CSS variables via shadcn):
  --background, --foreground
  --card, --card-foreground
  --primary, --primary-foreground
  --secondary, --secondary-foreground
  --muted, --muted-foreground
  --accent, --accent-foreground
  --destructive
  --border, --input, --ring

Spacing scale: Tailwind default (4px base)
Border radius: --radius CSS variable (variant-specific)
```

---

## 4. Feature Surface & API Map

### Features
| Feature | Guest | Registered |
|---|---|---|
| View problem list | ✓ (limited, first 10) | ✓ (full) |
| Filter problems | ✓ | ✓ |
| View problem detail | ✗ | ✓ |
| Daily stats dashboard | ✗ | ✓ |
| Tab navigation | ✓ | ✓ |
| Premium content | ✗ | Gated (premium flag) |
| Auth (sign up/in/out) | — | ✓ via Clerk |

### API Routes (Next.js App Router)

```
GET  /api/problems              — list problems (supports filter params)
GET  /api/problems/[id]         — single problem detail (auth required)
GET  /api/stats/daily           — daily stats for current user (auth required)
GET  /api/user/profile          — current user profile (auth required)
GET  /api/premium/status        — check premium status (auth required)
POST /api/webhooks/clerk        — Clerk user sync webhook
```

### Query Parameters for `/api/problems`
```
?difficulty=easy|medium|hard
?tag=array|graph|tree|string|dp|...
?status=solved|unsolved|attempted   (registered only)
?tab=all|daily|bookmarked           (registered only)
?page=1&limit=20
```

---

## 5. Supabase Schema

### Tables

```sql
-- Users (synced from Clerk via webhook)
CREATE TABLE users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id    TEXT UNIQUE NOT NULL,
  email       TEXT NOT NULL,
  username    TEXT,
  is_premium  BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Problems
CREATE TABLE problems (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  difficulty  TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  tags        TEXT[] DEFAULT '{}',
  description TEXT,
  is_premium  BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- User Problem Attempts
CREATE TABLE user_problems (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id) ON DELETE CASCADE,
  problem_id  UUID REFERENCES problems(id) ON DELETE CASCADE,
  status      TEXT CHECK (status IN ('solved', 'attempted', 'unsolved')),
  solved_at   TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, problem_id)
);

-- Daily Stats
CREATE TABLE daily_stats (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES users(id) ON DELETE CASCADE,
  date         DATE NOT NULL,
  solved_count INT DEFAULT 0,
  streak_days  INT DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Bookmarks
CREATE TABLE bookmarks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id) ON DELETE CASCADE,
  problem_id  UUID REFERENCES problems(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, problem_id)
);
```

### Row-Level Security (RLS)
```sql
-- users: only the owner can read/update their own row
-- problems: anyone can read non-premium; premium requires is_premium = true on user
-- user_problems: user can only read/write their own rows
-- daily_stats: user can only read their own rows
-- bookmarks: user can only read/write their own rows
```

---

## 6. Clerk Auth Configuration

### Setup
- Provider: Clerk (Next.js SDK `@clerk/nextjs`)
- Middleware: protect all `/dashboard/*` and `/api/*` routes except `/api/problems` (GET, public) and `/api/webhooks/clerk`
- User sync: on `user.created` and `user.updated` webhook events → upsert into `users` table

### User Flows

**Guest flow:**
1. Land on `/` → sees limited problem list (first 10, no detail)
2. Clicks "Sign in" → Clerk modal
3. After auth → redirect to `/dashboard`

**Registered flow:**
1. `/dashboard` → full problem list with filters + tabs
2. `/dashboard/stats` → daily stats
3. `/problems/[slug]` → problem detail
4. Premium gate: blurred content + "Upgrade" CTA if `is_premium = false`

---

## 7. Component Library (shadcn/ui)

All components must be built using `npx shadcn@latest add <component>` or custom-built on top of shadcn primitives. No third-party pre-styled component libraries.

### Required Components
```
Core:       Button, Input, Badge, Avatar, Separator, Skeleton
Layout:     Card, Sheet, Dialog, Drawer, Popover, Tooltip
Navigation: Tabs, NavigationMenu, Breadcrumb, DropdownMenu
Forms:      Select, Checkbox, Switch, Label, Form (react-hook-form)
Data:       Table, DataTable (custom), Pagination
Feedback:   Toast (Sonner), Alert, Progress
Charts:     (Recharts wrapped in custom components)
Custom:     ProblemCard, StatCard, FilterBar, PremiumGate, DifficultyBadge, TagChip
```

---

## 8. Development Rules (Strict)

1. **Format after every phase** — run `prettier --write .` before moving to next phase
2. **Lint after every phase** — run `eslint . --fix` and resolve all errors before moving to next phase
3. **No test files** — no `.test.ts`, `.spec.ts`, no Jest, no Vitest, no Playwright config
4. **No co-author citations** — zero tolerance for `Co-Authored-By` lines in any git commit
5. **Zero-cost only** — no paid APIs, services, or libraries
6. **shadcn only** — no pre-styled third-party component kits (no MUI, Chakra, Ant Design, etc.)

---

## 9. Git Conventions

- **Style:** Conventional Commits (`feat:`, `fix:`, `chore:`, `style:`, `refactor:`, `docs:`)
- **No co-author lines** — commits must never contain `Co-Authored-By`
- **Branch:** work on `main` for solo project
- **Commit cadence:** commit at end of each phase after format + lint pass

---

## 10. CI/CD (GitHub Actions)

```yaml
# Triggers: push to main, PR to main
# Jobs:
#   1. lint — eslint check
#   2. format-check — prettier --check
#   3. build — next build (type check + build)
#   4. deploy — vercel deploy (on main push only)
```

### Vercel Config
- Framework: Next.js (auto-detected)
- Environment variables: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `CLERK_WEBHOOK_SECRET`
