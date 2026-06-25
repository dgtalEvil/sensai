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
| Syntax highlighting | shiki | Server-side code highlighting, zero runtime cost, themes match dark/light mode |

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

## 4. Business Requirements — Problem Domain

### Data Source
Import the Blind 75 DSA problem set from a public GitHub repository. Store all 75 problems in the Supabase `problems` table with structured metadata. No LeetCode API — all content is self-hosted in Supabase.

### Problem Structure (per problem)
Each problem stores:
- `title`, `slug`, `difficulty` (easy/medium/hard)
- `category` — maps to tab system below
- `description` — full problem statement
- `examples` — JSONB array of `{ input, output, explanation }` objects
- `constraints` — TEXT array
- `solution_js` — JavaScript solution code
- `solution_python` — Python solution code
- `solution_java` — Java solution code (stretch goal)
- `time_complexity`, `space_complexity`
- `is_premium` — boolean
- `visualizer_type` — e.g. `"tree"`, `"graph"`, `"array"`, `"two-pointer"`, `null`
- `order_index` — integer for ordering and premium pattern

### Freemium Model
- Problems 1–5: free
- Problem 6: premium
- Pattern: every 6th problem (`order_index % 6 === 0`, 1-indexed) is premium
- Premium problems are visible in the list (title, difficulty, tags shown) but content is blurred/locked behind `PremiumGate` component
- Registered non-premium users → "Upgrade" CTA on locked problems
- Guest users → "Sign up" CTA on locked problems
- MVP: premium flag set manually in Supabase — no payment integration

### DSA Visualizer
Every problem has an interactive visualizer matched to its type. Step-by-step execution with prev/next controls, play/pause auto-step, configurable speed, and user-editable input.

| Type | Rendering | Description |
|---|---|---|
| `array` | Custom (shadcn + Framer Motion) | Animated array bars/boxes with pointer highlights |
| `two-pointer` | Custom (shadcn + Framer Motion) | Array with two animated pointer indicators |
| `sliding-window` | Custom (shadcn + Framer Motion) | Array with animated window highlight region |
| `tree` | react-d3-tree | Interactive binary/n-ary tree with node highlighting |
| `graph` | Custom (SVG + Framer Motion) | Node-edge graph with BFS/DFS step animation |
| `dynamic-programming` | Custom (shadcn + Framer Motion) | DP table grid with cell fill animation |
| `linked-list` | Custom (shadcn + Framer Motion) | Horizontal node chain with pointer animation |

Visualizer requirements:
- Step-by-step (prev/next step controls)
- Play/pause auto-step with configurable speed slider
- User can change the input values to see different behavior
- Active nodes/cells/pointers highlighted at each step
- Works in both dark and light mode

### Multi-Language Code Display
Each problem detail page has a language switcher (tabs):
- **Required:** JavaScript, Python
- **Stretch:** Java
- Syntax highlighting via `shiki` (zero-cost, server-side, no runtime overhead)
- Copy-to-clipboard button on every code block
- Language preference persisted in `localStorage`

### Tab System (Problem Categories)
Problems are organized into category tabs. Each problem belongs to exactly one primary category.

| Tab Label | Category Slug | Example Problems |
|---|---|---|
| All | `all` | — |
| Arrays & Hashing | `arrays-hashing` | Two Sum, Contains Duplicate |
| Two Pointers | `two-pointers` | Valid Palindrome, 3Sum |
| Sliding Window | `sliding-window` | Best Time to Buy Stock, Longest Substring |
| Stack | `stack` | Valid Parentheses |
| Binary Search | `binary-search` | Find Minimum in Rotated Array |
| Linked List | `linked-list` | Reverse Linked List, Merge Two Lists |
| Trees | `trees` | Invert Binary Tree, Max Depth |
| Tries | `tries` | Implement Trie |
| Heap / Priority Queue | `heap` | Top K Frequent Elements |
| Backtracking | `backtracking` | Combination Sum, Word Search |
| Graphs | `graphs` | Number of Islands, Clone Graph |
| Dynamic Programming | `dynamic-programming` | Climbing Stairs, Coin Change |
| Greedy | `greedy` | Jump Game |
| Intervals | `intervals` | Merge Intervals |
| Math & Geometry | `math` | Rotate Image |
| Bit Manipulation | `bit-manipulation` | Number of 1 Bits |

### Search & Filter System
Filters are combinable (AND logic). Active filters reflect in URL query params for shareable links.

| Filter | Type | Guest | Registered |
|---|---|---|---|
| Search bar | Fuzzy text search on title | ✓ | ✓ |
| Difficulty | Easy / Medium / Hard (multi-select chips) | ✓ | ✓ |
| Category tab | Single select from tab list | ✓ | ✓ |
| Status | All / Solved / Unsolved / Attempted | ✗ | ✓ |
| Premium | All / Free only / Premium only | ✓ | ✓ |

### Progress System
- **Overall progress bar** — X / 75 problems solved (on dashboard header)
- **Category progress** — mini progress bar per tab (e.g. "Trees: 4/10")
- **Streak counter** — consecutive days with ≥ 1 problem solved
- **Daily goal ring** — circular indicator: solved 1+ today = complete
- Registered users only — guests see "Sign up to track progress" prompt

### Seeding Strategy
- One-time seed script at `scripts/seed-problems.ts`
- Fetches Blind 75 metadata from a public GitHub source
- Maps each problem to its category slug and `visualizer_type`
- Sets `is_premium = true` for every 6th problem (`order_index % 6 === 0`)
- Inserts all 75 problems via Supabase service role key
- Run once locally — never in CI

### MVP Scope Boundaries
- No payment processing (Stripe etc.) — premium flag set manually
- No user-submitted code execution (no sandboxed runner)
- No discussion/comments section
- No AI hints or spaced repetition
- Visualizer animates the algorithm — not user-written code

---

## 5. Feature Surface & API Map

### Features
| Feature | Guest | Registered |
|---|---|---|
| View problem list | ✓ (limited, first 10) | ✓ (full 75) |
| Search problems | ✓ | ✓ |
| Filter by difficulty/category | ✓ | ✓ |
| Filter by status | ✗ | ✓ |
| View problem detail | ✗ | ✓ |
| DSA Visualizer | ✗ | ✓ |
| Multi-language code view | ✗ | ✓ |
| Daily stats dashboard | ✗ | ✓ |
| Progress bar + streak | ✗ | ✓ |
| Premium content | ✗ | Gated (premium flag) |
| Bookmarks | ✗ | ✓ |
| Auth (sign up/in/out) | — | ✓ via Clerk |

### API Routes (Next.js App Router)

```
GET  /api/problems                — list problems (filter + search + pagination)
GET  /api/problems/[id]           — single problem detail (auth required)
GET  /api/stats/daily             — daily stats for current user (auth required)
GET  /api/stats/progress          — overall + per-category progress (auth required)
GET  /api/user/profile            — current user profile (auth required)
GET  /api/premium/status          — check premium status (auth required)
POST /api/problems/[id]/solve     — mark problem solved/attempted (auth required)
POST /api/bookmarks               — add/remove bookmark (auth required)
POST /api/webhooks/clerk          — Clerk user sync webhook
```

### Query Parameters for `/api/problems`
```
?search=two+sum
?difficulty=easy|medium|hard      (comma-separated for multi-select)
?category=trees|graphs|...
?status=solved|unsolved|attempted  (registered only)
?premium=free|premium|all
?page=1&limit=20
```

---

## 6. Supabase Schema

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

-- Problems (Blind 75, self-hosted)
CREATE TABLE problems (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title            TEXT NOT NULL,
  slug             TEXT UNIQUE NOT NULL,
  difficulty       TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  category         TEXT NOT NULL DEFAULT 'arrays-hashing',
  tags             TEXT[] DEFAULT '{}',
  description      TEXT,
  examples         JSONB DEFAULT '[]',
  constraints      TEXT[] DEFAULT '{}',
  solution_js      TEXT,
  solution_python  TEXT,
  solution_java    TEXT,
  time_complexity  TEXT,
  space_complexity TEXT,
  visualizer_type  TEXT,
  order_index      INT,
  is_premium       BOOLEAN DEFAULT FALSE,
  created_at       TIMESTAMPTZ DEFAULT NOW()
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
Core:         Button, Input, Badge, Avatar, Separator, Skeleton, Slider
Layout:       Card, Sheet, Dialog, Drawer, Popover, Tooltip
Navigation:   Tabs, NavigationMenu, Breadcrumb, DropdownMenu
Forms:        Select, Checkbox, Switch, Label, Form (react-hook-form)
Data:         Table, DataTable (custom), Pagination
Feedback:     Toast (Sonner), Alert, Progress
Charts:       (Recharts wrapped in custom components)

Problem UI:
  ProblemCard           — title, difficulty badge, category tag, lock icon, solved state
  ProblemList           — paginated list with empty/loading states
  DifficultyBadge       — color-coded easy/medium/hard chip
  TagChip               — category tag pill
  FilterBar             — search input + difficulty chips + category tabs + status toggle
  PremiumGate           — blur overlay with Sign up / Upgrade CTA
  CodeBlock             — shiki syntax-highlighted code with copy button + language switcher
  LanguageSwitcher      — JS / Python / Java tab switcher, persists to localStorage

Visualizers:
  ArrayVisualizer       — animated array boxes with pointer highlights
  TwoPointerVisualizer  — array with two animated pointer indicators
  SlidingWindowVisualizer — array with animated window region
  TreeVisualizer        — react-d3-tree binary/n-ary tree with node highlighting
  GraphVisualizer       — SVG node-edge graph with BFS/DFS step animation
  DPTableVisualizer     — grid with animated cell fill
  LinkedListVisualizer  — horizontal node chain with pointer animation
  VisualizerControls    — prev/next step, play/pause, speed slider, input editor

Progress UI:
  OverallProgressBar    — X / 75 with percentage label
  CategoryProgress      — mini progress bar per category tab
  StreakCounter         — flame icon + consecutive day count
  DailyGoalRing         — circular progress ring (0 or 1 problem today)
  StatCard              — metric display (number, label, trend)
  DailyChart            — Recharts bar chart for daily solve activity
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
