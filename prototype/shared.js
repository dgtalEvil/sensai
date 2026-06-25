// ── Mock Data ──
const PROBLEMS = [
  {
    id: 1,
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "easy",
    category: "Arrays & Hashing",
    isPremium: false,
    status: "solved",
    orderIndex: 1,
  },
  {
    id: 2,
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "easy",
    category: "Stack",
    isPremium: false,
    status: "solved",
    orderIndex: 2,
  },
  {
    id: 3,
    title: "Best Time to Buy and Sell Stock",
    slug: "best-time-to-buy-sell-stock",
    difficulty: "easy",
    category: "Sliding Window",
    isPremium: false,
    status: "solved",
    orderIndex: 3,
  },
  {
    id: 4,
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    difficulty: "easy",
    category: "Two Pointers",
    isPremium: false,
    status: "attempted",
    orderIndex: 4,
  },
  {
    id: 5,
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: "easy",
    category: "Linked List",
    isPremium: false,
    status: "unsolved",
    orderIndex: 5,
  },
  {
    id: 6,
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    difficulty: "medium",
    category: "Dynamic Programming",
    isPremium: true,
    status: "unsolved",
    orderIndex: 6,
  },
  {
    id: 7,
    title: "Invert Binary Tree",
    slug: "invert-binary-tree",
    difficulty: "easy",
    category: "Trees",
    isPremium: false,
    status: "solved",
    orderIndex: 7,
  },
  {
    id: 8,
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    difficulty: "easy",
    category: "Dynamic Programming",
    isPremium: false,
    status: "unsolved",
    orderIndex: 8,
  },
  {
    id: 9,
    title: "Binary Search",
    slug: "binary-search",
    difficulty: "easy",
    category: "Binary Search",
    isPremium: false,
    status: "attempted",
    orderIndex: 9,
  },
  {
    id: 10,
    title: "Flood Fill",
    slug: "flood-fill",
    difficulty: "easy",
    category: "Graphs",
    isPremium: false,
    status: "unsolved",
    orderIndex: 10,
  },
  {
    id: 11,
    title: "Lowest Common Ancestor",
    slug: "lowest-common-ancestor",
    difficulty: "medium",
    category: "Trees",
    isPremium: false,
    status: "unsolved",
    orderIndex: 11,
  },
  {
    id: 12,
    title: "Insert Interval",
    slug: "insert-interval",
    difficulty: "medium",
    category: "Intervals",
    isPremium: true,
    status: "unsolved",
    orderIndex: 12,
  },
  {
    id: 13,
    title: "3Sum",
    slug: "3sum",
    difficulty: "medium",
    category: "Two Pointers",
    isPremium: false,
    status: "unsolved",
    orderIndex: 13,
  },
  {
    id: 14,
    title: "Number of Islands",
    slug: "number-of-islands",
    difficulty: "medium",
    category: "Graphs",
    isPremium: false,
    status: "attempted",
    orderIndex: 14,
  },
  {
    id: 15,
    title: "Coin Change",
    slug: "coin-change",
    difficulty: "medium",
    category: "Dynamic Programming",
    isPremium: false,
    status: "unsolved",
    orderIndex: 15,
  },
  {
    id: 16,
    title: "Maximum Depth of Binary Tree",
    slug: "maximum-depth-binary-tree",
    difficulty: "easy",
    category: "Trees",
    isPremium: false,
    status: "solved",
    orderIndex: 16,
  },
  {
    id: 17,
    title: "Top K Frequent Elements",
    slug: "top-k-frequent-elements",
    difficulty: "medium",
    category: "Heap / Priority Queue",
    isPremium: false,
    status: "unsolved",
    orderIndex: 17,
  },
  {
    id: 18,
    title: "Word Search",
    slug: "word-search",
    difficulty: "medium",
    category: "Backtracking",
    isPremium: true,
    status: "unsolved",
    orderIndex: 18,
  },
  {
    id: 19,
    title: "Implement Trie",
    slug: "implement-trie",
    difficulty: "medium",
    category: "Tries",
    isPremium: false,
    status: "unsolved",
    orderIndex: 19,
  },
  {
    id: 20,
    title: "Jump Game",
    slug: "jump-game",
    difficulty: "medium",
    category: "Greedy",
    isPremium: false,
    status: "unsolved",
    orderIndex: 20,
  },
];

// ── Theme ──
function initTheme() {
  const saved = localStorage.getItem("sensai-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("sensai-theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.title =
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  });
}

// ── Tabs ──
function initTabs(containerSelector) {
  const containers = document.querySelectorAll(
    containerSelector || "[data-tabs]",
  );
  containers.forEach((container) => {
    const triggers = container.querySelectorAll(".tab-trigger");
    const panels = container.querySelectorAll(".tab-panel");
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        triggers.forEach((t) => t.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        trigger.classList.add("active");
        const target = trigger.dataset.tab;
        const panel = container.querySelector(
          `.tab-panel[data-tab="${target}"]`,
        );
        if (panel) panel.classList.add("active");
      });
    });
  });
}

// ── Language Switcher ──
function initLangSwitcher() {
  const savedLang = localStorage.getItem("sensai-lang") || "js";
  document.querySelectorAll(".lang-tab").forEach((tab) => {
    if (tab.dataset.lang === savedLang) {
      tab.classList.add("active");
    }
    tab.addEventListener("click", () => {
      const lang = tab.dataset.lang;
      localStorage.setItem("sensai-lang", lang);
      document
        .querySelectorAll(".lang-tab")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".lang-panel")
        .forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document
        .querySelectorAll(`.lang-panel[data-lang="${lang}"]`)
        .forEach((p) => p.classList.add("active"));
    });
  });
  document
    .querySelectorAll(`.lang-panel[data-lang="${savedLang}"]`)
    .forEach((p) => p.classList.add("active"));
}

// ── Filter Chips (multi-select) ──
function initFilterChips() {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const isMulti = group.dataset.filterGroup === "multi";
    group.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        if (isMulti) {
          chip.classList.toggle("active");
        } else {
          group
            .querySelectorAll(".chip")
            .forEach((c) => c.classList.remove("active"));
          chip.classList.add("active");
        }
        filterProblems();
      });
    });
  });
}

// ── Search Filter ──
function initSearch() {
  const searchInput = document.getElementById("problem-search");
  if (!searchInput) return;
  searchInput.addEventListener("input", filterProblems);
}

function filterProblems() {
  const search = (
    document.getElementById("problem-search")?.value || ""
  ).toLowerCase();
  const activeDiffs = [
    ...document.querySelectorAll('[data-filter-group="multi"] .chip.active'),
  ].map((c) => c.dataset.value);
  const activeStatus =
    document.querySelector('[data-filter-group="status"] .chip.active')?.dataset
      .value || "all";
  const activePremium =
    document.querySelector('[data-filter-group="premium"] .chip.active')
      ?.dataset.value || "all";

  document.querySelectorAll(".problem-card").forEach((card) => {
    const title = card.dataset.title?.toLowerCase() || "";
    const diff = card.dataset.difficulty || "";
    const status = card.dataset.status || "";
    const premium = card.dataset.premium || "";

    const matchSearch = !search || title.includes(search);
    const matchDiff = activeDiffs.length === 0 || activeDiffs.includes(diff);
    const matchStatus = activeStatus === "all" || status === activeStatus;
    const matchPremium =
      activePremium === "all" ||
      (activePremium === "premium" ? premium === "true" : premium === "false");

    card.style.display =
      matchSearch && matchDiff && matchStatus && matchPremium ? "" : "none";
  });
}

// ── Avatar Dropdown ──
function initAvatarDropdown() {
  const avatar = document.querySelector(".avatar");
  const dropdown = document.querySelector(".avatar-dropdown");
  if (!avatar || !dropdown) return;
  avatar.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });
  document.addEventListener("click", () => dropdown.classList.remove("open"));
}

// ── Copy Code ──
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pre = btn.closest(".code-block").querySelector("code");
      if (pre) {
        navigator.clipboard.writeText(pre.textContent).then(() => {
          btn.textContent = "Copied!";
          setTimeout(() => (btn.textContent = "Copy"), 1500);
        });
      }
    });
  });
}

// ── Visualizer Step Controls ──
function initVisualizer() {
  const steps = document.querySelectorAll(".viz-step");
  if (!steps.length) return;

  let current = 0;
  let playing = false;
  let speed = 1000;
  let interval = null;

  const counter = document.querySelector(".step-counter");
  const playBtn = document.querySelector(".play-btn");
  const speedSlider = document.querySelector(".speed-slider");

  function showStep(i) {
    steps.forEach((s, idx) => s.classList.toggle("active", idx === i));
    if (counter) counter.textContent = `Step ${i + 1} / ${steps.length}`;
  }

  document.querySelector(".prev-btn")?.addEventListener("click", () => {
    current = Math.max(0, current - 1);
    showStep(current);
  });

  document.querySelector(".next-btn")?.addEventListener("click", () => {
    current = Math.min(steps.length - 1, current + 1);
    showStep(current);
  });

  playBtn?.addEventListener("click", () => {
    playing = !playing;
    playBtn.textContent = playing ? "⏸ Pause" : "▶ Play";
    if (playing) {
      interval = setInterval(() => {
        current = (current + 1) % steps.length;
        showStep(current);
      }, speed);
    } else {
      clearInterval(interval);
    }
  });

  speedSlider?.addEventListener("input", (e) => {
    speed = 2000 - e.target.value * 180;
    if (playing) {
      clearInterval(interval);
      interval = setInterval(() => {
        current = (current + 1) % steps.length;
        showStep(current);
      }, speed);
    }
  });

  showStep(0);
}

// ── Mark Solved Toggle ──
function initSolveButton() {
  const btn = document.getElementById("mark-solved-btn");
  if (!btn) return;
  let solved = false;
  btn.addEventListener("click", () => {
    solved = !solved;
    btn.textContent = solved ? "✓ Solved!" : "Mark as Solved";
    btn.classList.toggle("btn-primary", !solved);
    btn.style.background = solved ? "var(--easy)" : "";
    btn.style.color = solved ? "#fff" : "";
  });
}

// ── Sign In / Up Form ──
function initAuthForms() {
  const signinBtn = document.getElementById("signin-btn");
  if (signinBtn) {
    signinBtn.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }
  const signupBtn = document.getElementById("signup-btn");
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }
}

// ── Render Problem List ──
function renderProblemList(
  containerId,
  problems,
  showStatus = false,
  showCategory = true,
) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = problems
    .map(
      (p) => `
    <a class="problem-card"
       href="${p.isPremium ? "problem-premium.html" : "problem.html"}"
       data-title="${p.title.toLowerCase()}"
       data-difficulty="${p.difficulty}"
       data-status="${p.status}"
       data-premium="${p.isPremium}">
      <span class="problem-index">${p.orderIndex}</span>
      <div class="problem-info">
        <div class="problem-title">${p.title}</div>
        <div class="problem-meta">
          <span class="badge badge-${p.difficulty}">${p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1)}</span>
          ${showCategory ? `<span class="badge badge-category">${p.category}</span>` : ""}
        </div>
      </div>
      <div class="problem-actions">
        ${showStatus ? `<span class="status-icon ${p.status === "solved" ? "status-solved" : p.status === "attempted" ? "status-attempted" : "status-unsolved"}">${p.status === "solved" ? "✓" : p.status === "attempted" ? "◑" : "–"}</span>` : ""}
        ${p.isPremium ? '<span class="lock-icon">🔒</span>' : ""}
        ${showStatus ? '<span class="bookmark-icon">🔖</span>' : ""}
      </div>
    </a>
  `,
    )
    .join("");
}

// ── Init All ──
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTabs();
  initLangSwitcher();
  initFilterChips();
  initSearch();
  initAvatarDropdown();
  initCopyButtons();
  initVisualizer();
  initSolveButton();
  initAuthForms();
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
});
