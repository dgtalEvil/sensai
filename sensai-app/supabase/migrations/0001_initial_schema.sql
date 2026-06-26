-- ============================================================
-- SensAI Initial Schema
-- ============================================================

-- Users (synced from Clerk via webhook)
CREATE TABLE IF NOT EXISTS users (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id            TEXT UNIQUE NOT NULL,
  email               TEXT UNIQUE NOT NULL,
  name                TEXT,
  avatar_url          TEXT,
  is_premium          BOOLEAN DEFAULT false,
  premium_expires_at  TIMESTAMPTZ,
  created_at          TIMESTAMPTZ DEFAULT now()
);

-- DSA Problems
CREATE TABLE IF NOT EXISTS problems (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug                  TEXT UNIQUE NOT NULL,
  title                 TEXT NOT NULL,
  difficulty            TEXT NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  topic                 TEXT NOT NULL,
  description           TEXT NOT NULL,
  examples              JSONB NOT NULL DEFAULT '[]',
  constraints           JSONB NOT NULL DEFAULT '[]',
  starter_code          JSONB NOT NULL DEFAULT '[]',
  solution_explanation  TEXT,
  is_premium            BOOLEAN DEFAULT false,
  created_at            TIMESTAMPTZ DEFAULT now()
);

-- User attempts / solves per problem
CREATE TABLE IF NOT EXISTS user_problem_attempts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  problem_id  UUID NOT NULL REFERENCES problems(id) ON DELETE CASCADE,
  status      TEXT NOT NULL CHECK (status IN ('solved', 'attempted', 'bookmarked')),
  language    TEXT,
  code        TEXT,
  solved_at   TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Bookmarked problems per user
CREATE TABLE IF NOT EXISTS bookmarks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  problem_id  UUID NOT NULL REFERENCES problems(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, problem_id)
);

-- ============================================================
-- Row Level Security
-- ============================================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_problem_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

-- users: each user can read and update only their own row
CREATE POLICY "users_select_own" ON users
  FOR SELECT USING (clerk_id = auth.jwt() ->> 'sub');

CREATE POLICY "users_update_own" ON users
  FOR UPDATE USING (clerk_id = auth.jwt() ->> 'sub');

-- problems: all authenticated users can read all problems
-- (premium gating is handled at the application layer)
CREATE POLICY "problems_select_authenticated" ON problems
  FOR SELECT USING (auth.role() = 'authenticated');

-- user_problem_attempts: users can only access their own rows
CREATE POLICY "attempts_select_own" ON user_problem_attempts
  FOR SELECT USING (
    user_id = (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub')
  );

CREATE POLICY "attempts_insert_own" ON user_problem_attempts
  FOR INSERT WITH CHECK (
    user_id = (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub')
  );

CREATE POLICY "attempts_update_own" ON user_problem_attempts
  FOR UPDATE USING (
    user_id = (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub')
  );

-- bookmarks: users can only access their own rows
CREATE POLICY "bookmarks_select_own" ON bookmarks
  FOR SELECT USING (
    user_id = (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub')
  );

CREATE POLICY "bookmarks_insert_own" ON bookmarks
  FOR INSERT WITH CHECK (
    user_id = (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub')
  );

CREATE POLICY "bookmarks_delete_own" ON bookmarks
  FOR DELETE USING (
    user_id = (SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub')
  );

-- ============================================================
-- Performance Indexes
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_problems_difficulty    ON problems (difficulty);
CREATE INDEX IF NOT EXISTS idx_problems_topic         ON problems (topic);
CREATE INDEX IF NOT EXISTS idx_problems_slug          ON problems (slug);
CREATE INDEX IF NOT EXISTS idx_attempts_user_id       ON user_problem_attempts (user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_problem_id    ON user_problem_attempts (problem_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id      ON bookmarks (user_id);
