import type { Problem } from "@/types";

export const MOCK_PROBLEMS: Problem[] = [
  // ─── Arrays (5) ──────────────────────────────────────────────────────────────
  {
    id: "11111111-0001-0001-0001-000000000001",
    slug: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "Only one valid answer exists.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function twoSum(nums, target) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Use a hash map to store each number and its index. For each number, check if target - number exists in the map.",
    is_premium: false,
    created_at: "2024-01-01T00:00:00.000Z",
  },
  {
    id: "11111111-0001-0001-0001-000000000002",
    slug: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "Arrays",
    description:
      "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    starter_code: [
      {
        language: "javascript",
        code: "function maxProfit(prices) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Track the minimum price seen so far and the maximum profit at each step.",
    is_premium: false,
    created_at: "2024-01-02T00:00:00.000Z",
  },
  {
    id: "11111111-0001-0001-0001-000000000003",
    slug: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    topic: "Arrays",
    description:
      "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    starter_code: [
      {
        language: "javascript",
        code: "function containsDuplicate(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation: "Use a Set to track seen values.",
    is_premium: false,
    created_at: "2024-01-03T00:00:00.000Z",
  },
  {
    id: "11111111-0001-0001-0001-000000000004",
    slug: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "Arrays",
    description:
      "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
    ],
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
    starter_code: [
      {
        language: "javascript",
        code: "function productExceptSelf(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Build a left-product array and a right-product array, then multiply them.",
    is_premium: false,
    created_at: "2024-01-04T00:00:00.000Z",
  },
  {
    id: "11111111-0001-0001-0001-000000000005",
    slug: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    topic: "Arrays",
    description:
      "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starter_code: [
      {
        language: "javascript",
        code: "function maxSubArray(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Use Kadane's algorithm: track current sum and max sum.",
    is_premium: false,
    created_at: "2024-01-05T00:00:00.000Z",
  },

  // ─── Strings (5) ─────────────────────────────────────────────────────────────
  {
    id: "22222222-0002-0002-0002-000000000001",
    slug: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    topic: "Strings",
    description:
      "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    constraints: [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function isAnagram(s, t) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sort both strings and compare, or use a frequency count map.",
    is_premium: false,
    created_at: "2024-01-06T00:00:00.000Z",
  },
  {
    id: "22222222-0002-0002-0002-000000000002",
    slug: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    topic: "Strings",
    description:
      "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
    ],
    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function isPalindrome(s) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Strip non-alphanumeric chars, lowercase, then use two pointers from each end.",
    is_premium: false,
    created_at: "2024-01-07T00:00:00.000Z",
  },
  {
    id: "22222222-0002-0002-0002-000000000003",
    slug: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "Strings",
    description:
      "Given a string `s`, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function lengthOfLongestSubstring(s) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sliding window with a set to track characters in the current window.",
    is_premium: false,
    created_at: "2024-01-08T00:00:00.000Z",
  },
  {
    id: "22222222-0002-0002-0002-000000000004",
    slug: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    topic: "Strings",
    description:
      "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.",
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
    ],
    constraints: [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100",
      "strs[i] consists of lowercase English letters.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function groupAnagrams(strs) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sort each string to create a key, then group by that key using a map.",
    is_premium: false,
    created_at: "2024-01-09T00:00:00.000Z",
  },
  {
    id: "22222222-0002-0002-0002-000000000005",
    slug: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    topic: "Strings",
    description:
      "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string.",
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation:
          "The minimum window substring BANC includes A, B, and C from string t.",
      },
    ],
    constraints: [
      "m == s.length",
      "n == t.length",
      "1 <= m, n <= 10^5",
      "s and t consist of uppercase and lowercase English letters.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function minWindow(s, t) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sliding window with two frequency maps. Expand right until all chars covered, then contract left.",
    is_premium: true,
    created_at: "2024-01-10T00:00:00.000Z",
  },

  // ─── Linked Lists (5) ────────────────────────────────────────────────────────
  {
    id: "33333333-0003-0003-0003-000000000001",
    slug: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    topic: "Linked Lists",
    description:
      "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }],
    constraints: [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function reverseList(head) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Iteratively update prev and curr pointers, or use recursion.",
    is_premium: false,
    created_at: "2024-01-11T00:00:00.000Z",
  },
  {
    id: "33333333-0003-0003-0003-000000000002",
    slug: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topic: "Linked Lists",
    description:
      "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function mergeTwoLists(list1, list2) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Use a dummy head node and compare values, advancing whichever pointer is smaller.",
    is_premium: false,
    created_at: "2024-01-12T00:00:00.000Z",
  },
  {
    id: "33333333-0003-0003-0003-000000000003",
    slug: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    topic: "Linked Lists",
    description:
      "Given `head`, the head of a linked list, determine if the linked list has a cycle in it. Return `true` if there is a cycle in the linked list, otherwise return `false`.",
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation:
          "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).",
      },
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function hasCycle(head) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Floyd's cycle detection: use slow and fast pointers. If they meet, there's a cycle.",
    is_premium: false,
    created_at: "2024-01-13T00:00:00.000Z",
  },
  {
    id: "33333333-0003-0003-0003-000000000004",
    slug: "reorder-list",
    title: "Reorder List",
    difficulty: "Medium",
    topic: "Linked Lists",
    description:
      "You are given the head of a singly linked-list: L0 → L1 → … → Ln - 1 → Ln. Reorder it to: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
    examples: [{ input: "head = [1,2,3,4]", output: "[1,4,2,3]" }],
    constraints: [
      "The number of nodes in the list is in the range [1, 5 * 10^4].",
      "1 <= Node.val <= 1000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function reorderList(head) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Find the middle, reverse the second half, then merge the two halves.",
    is_premium: false,
    created_at: "2024-01-14T00:00:00.000Z",
  },
  {
    id: "33333333-0003-0003-0003-000000000005",
    slug: "lru-cache",
    title: "LRU Cache",
    difficulty: "Hard",
    topic: "Linked Lists",
    description:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class: `LRUCache(int capacity)` — initialize with positive size capacity; `int get(int key)` — return the value if exists, else -1; `void put(int key, int value)` — update or insert. If capacity is exceeded, evict the LRU key.",
    examples: [
      {
        input:
          '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]',
        output: "[null,null,null,1,null,-1,null,-1,3,4]",
      },
    ],
    constraints: [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls will be made to get and put.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "class LRUCache {\n  constructor(capacity) {\n    // your code here\n  }\n  get(key) {\n    // your code here\n  }\n  put(key, value) {\n    // your code here\n  }\n}",
      },
    ],
    solution_explanation:
      "Use a doubly linked list + hash map. O(1) get and put by maintaining head (MRU) and tail (LRU) pointers.",
    is_premium: true,
    created_at: "2024-01-15T00:00:00.000Z",
  },

  // ─── Trees (5) ───────────────────────────────────────────────────────────────
  {
    id: "44444444-0004-0004-0004-000000000001",
    slug: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    topic: "Trees",
    description:
      "Given the `root` of a binary tree, invert the tree, and return its root.",
    examples: [{ input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function invertTree(root) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Recursively swap the left and right children of every node.",
    is_premium: false,
    created_at: "2024-01-16T00:00:00.000Z",
  },
  {
    id: "44444444-0004-0004-0004-000000000002",
    slug: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "Trees",
    description:
      "Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "3" }],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-100 <= Node.val <= 100",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function maxDepth(root) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Recursively compute 1 + max(depth(left), depth(right)).",
    is_premium: false,
    created_at: "2024-01-17T00:00:00.000Z",
  },
  {
    id: "44444444-0004-0004-0004-000000000003",
    slug: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "Trees",
    description:
      "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as: The left subtree of a node contains only nodes with keys less than the node's key; The right subtree of a node contains only nodes with keys greater than the node's key; Both the left and right subtrees must also be binary search trees.",
    examples: [
      { input: "root = [2,1,3]", output: "true" },
      { input: "root = [5,1,4,null,null,3,6]", output: "false" },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-2^31 <= Node.val <= 2^31 - 1",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function isValidBST(root) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Pass min/max bounds down the recursion. Each node must satisfy min < node.val < max.",
    is_premium: false,
    created_at: "2024-01-18T00:00:00.000Z",
  },
  {
    id: "44444444-0004-0004-0004-000000000004",
    slug: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    topic: "Trees",
    description:
      "Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function levelOrder(root) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "BFS using a queue. Process all nodes at the current level before moving to the next.",
    is_premium: false,
    created_at: "2024-01-19T00:00:00.000Z",
  },
  {
    id: "44444444-0004-0004-0004-000000000005",
    slug: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    topic: "Trees",
    description:
      "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored or transmitted and reconstructed later. Design an algorithm to serialize and deserialize a binary tree.",
    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: "[1,2,3,null,null,4,5]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-1000 <= Node.val <= 1000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function serialize(root) {\n  // your code here\n}\nfunction deserialize(data) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "BFS serialize to comma-separated string with 'null' for missing nodes. Deserialize by rebuilding level-by-level.",
    is_premium: true,
    created_at: "2024-01-20T00:00:00.000Z",
  },

  // ─── Graphs (5) ──────────────────────────────────────────────────────────────
  {
    id: "55555555-0005-0005-0005-000000000001",
    slug: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "Graphs",
    description:
      "Given an m x n 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.",
    examples: [
      {
        input:
          'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is '0' or '1'.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function numIslands(grid) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "DFS/BFS from each unvisited '1', marking all connected land as visited.",
    is_premium: false,
    created_at: "2024-01-21T00:00:00.000Z",
  },
  {
    id: "55555555-0005-0005-0005-000000000002",
    slug: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    topic: "Graphs",
    description:
      "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
      },
    ],
    constraints: [
      "The number of nodes in the graph is in the range [0, 100].",
      "1 <= Node.val <= 100",
      "Node.val is unique for each node.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function cloneGraph(node) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "BFS with a hash map from original node to cloned node to handle cycles.",
    is_premium: false,
    created_at: "2024-01-22T00:00:00.000Z",
  },
  {
    id: "55555555-0005-0005-0005-000000000003",
    slug: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    topic: "Graphs",
    description:
      "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites`. Return `true` if you can finish all courses, otherwise return `false`.",
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "true" },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],
    constraints: [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function canFinish(numCourses, prerequisites) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Detect cycle in a directed graph using DFS with 3-state coloring (unvisited/visiting/visited).",
    is_premium: false,
    created_at: "2024-01-23T00:00:00.000Z",
  },
  {
    id: "55555555-0005-0005-0005-000000000004",
    slug: "pacific-atlantic-water-flow",
    title: "Pacific Atlantic Water Flow",
    difficulty: "Medium",
    topic: "Graphs",
    description:
      "There is an m x n rectangular island with heights. Rain water can flow to adjacent cells. Find all cells from which water can flow to both the Pacific and Atlantic oceans.",
    examples: [
      {
        input:
          "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        output: "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
      },
    ],
    constraints: [
      "m == heights.length",
      "n == heights[r].length",
      "1 <= m, n <= 200",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function pacificAtlantic(heights) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "BFS/DFS from both ocean borders inward (reverse flow direction). Intersect the two reachable sets.",
    is_premium: true,
    created_at: "2024-01-24T00:00:00.000Z",
  },
  {
    id: "55555555-0005-0005-0005-000000000005",
    slug: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    topic: "Graphs",
    description:
      "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence where each adjacent pair of words differs by a single letter. Return the number of words in the shortest transformation sequence, or 0 if no such sequence exists.",
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation: '"hit" -> "hot" -> "dot" -> "dog" -> "cog"',
      },
    ],
    constraints: [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function ladderLength(beginWord, endWord, wordList) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "BFS treating words as graph nodes. Each step changes one letter. Use a set for O(1) lookup.",
    is_premium: true,
    created_at: "2024-01-25T00:00:00.000Z",
  },

  // ─── Dynamic Programming (5) ─────────────────────────────────────────────────
  {
    id: "66666666-0006-0006-0006-000000000001",
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "Dynamic Programming",
    description:
      "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [{ input: "n = 3", output: "3", explanation: "1+1+1, 1+2, 2+1" }],
    constraints: ["1 <= n <= 45"],
    starter_code: [
      {
        language: "javascript",
        code: "function climbStairs(n) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "dp[i] = dp[i-1] + dp[i-2]. Same as Fibonacci sequence.",
    is_premium: false,
    created_at: "2024-01-26T00:00:00.000Z",
  },
  {
    id: "66666666-0006-0006-0006-000000000002",
    slug: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description:
      "You are a professional robber planning to rob houses along a street. Adjacent houses have security systems connected. Given an integer array `nums` representing the amount of money of each house, return the maximum amount you can rob without alerting the police.",
    examples: [
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
        explanation: "Rob houses 0, 2, 4: 2+9+1 = 12.",
      },
    ],
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 400"],
    starter_code: [
      {
        language: "javascript",
        code: "function rob(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Can space-optimize to two variables.",
    is_premium: false,
    created_at: "2024-01-27T00:00:00.000Z",
  },
  {
    id: "66666666-0006-0006-0006-000000000003",
    slug: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description:
      "You are given an integer array `coins` representing coins of different denominations and an integer `amount`. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up by any combination of the coins, return `-1`.",
    examples: [
      { input: "coins = [1,5,11], amount = 11", output: "1" },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function coinChange(coins, amount) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Bottom-up DP: dp[i] = min coins to make amount i. For each coin, dp[i] = min(dp[i], dp[i-coin]+1).",
    is_premium: false,
    created_at: "2024-01-28T00:00:00.000Z",
  },
  {
    id: "66666666-0006-0006-0006-000000000004",
    slug: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    topic: "Dynamic Programming",
    description:
      "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
        explanation: "[2,3,7,101]",
      },
    ],
    constraints: ["1 <= nums.length <= 2500", "-10^4 <= nums[i] <= 10^4"],
    starter_code: [
      {
        language: "javascript",
        code: "function lengthOfLIS(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "O(n²) DP: dp[i] = longest subsequence ending at i. O(n log n) with patience sorting and binary search.",
    is_premium: false,
    created_at: "2024-01-29T00:00:00.000Z",
  },
  {
    id: "66666666-0006-0006-0006-000000000005",
    slug: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    topic: "Dynamic Programming",
    description:
      "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. Operations: Insert, Delete, Replace a character.",
    examples: [{ input: 'word1 = "horse", word2 = "ros"', output: "3" }],
    constraints: [
      "0 <= word1.length, word2.length <= 500",
      "word1 and word2 consist of lowercase English letters.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function minDistance(word1, word2) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "2D DP table: dp[i][j] = edit distance between word1[0..i] and word2[0..j].",
    is_premium: true,
    created_at: "2024-01-30T00:00:00.000Z",
  },

  // ─── Sorting (5) ─────────────────────────────────────────────────────────────
  {
    id: "77777777-0007-0007-0007-000000000001",
    slug: "sort-colors",
    title: "Sort Colors",
    difficulty: "Medium",
    topic: "Sorting",
    description:
      "Given an array `nums` with `n` objects colored red, white, or blue (0, 1, 2), sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. Do not use the library's sort function.",
    examples: [{ input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" }],
    constraints: [
      "n == nums.length",
      "1 <= n <= 300",
      "nums[i] is either 0, 1, or 2.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function sortColors(nums) {\n  // your code here (in-place)\n}",
      },
    ],
    solution_explanation:
      "Dutch National Flag algorithm: three pointers (low, mid, high) in a single pass.",
    is_premium: false,
    created_at: "2024-02-01T00:00:00.000Z",
  },
  {
    id: "77777777-0007-0007-0007-000000000002",
    slug: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    topic: "Sorting",
    description:
      "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals and return an array of the non-overlapping intervals.",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function merge(intervals) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sort by start time, then greedily merge if current start <= previous end.",
    is_premium: false,
    created_at: "2024-02-02T00:00:00.000Z",
  },
  {
    id: "77777777-0007-0007-0007-000000000003",
    slug: "kth-largest-element-in-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    topic: "Sorting",
    description:
      "Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array. Note: it is the kth largest in sorted order, not the kth distinct element.",
    examples: [{ input: "nums = [3,2,1,5,6,4], k = 2", output: "5" }],
    constraints: ["1 <= k <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    starter_code: [
      {
        language: "javascript",
        code: "function findKthLargest(nums, k) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Quickselect for O(n) average, or min-heap of size k for O(n log k).",
    is_premium: false,
    created_at: "2024-02-03T00:00:00.000Z",
  },
  {
    id: "77777777-0007-0007-0007-000000000004",
    slug: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    difficulty: "Medium",
    topic: "Sorting",
    description:
      "Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of conference rooms required.",
    examples: [{ input: "intervals = [[0,30],[5,10],[15,20]]", output: "2" }],
    constraints: [
      "1 <= intervals.length <= 10^4",
      "0 <= starti < endi <= 10^6",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function minMeetingRooms(intervals) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sort by start. Use a min-heap of end times. If earliest end <= current start, reuse that room.",
    is_premium: true,
    created_at: "2024-02-04T00:00:00.000Z",
  },
  {
    id: "77777777-0007-0007-0007-000000000005",
    slug: "largest-number",
    title: "Largest Number",
    difficulty: "Medium",
    topic: "Sorting",
    description:
      "Given a list of non-negative integers `nums`, arrange them such that they form the largest number and return it as a string.",
    examples: [{ input: "nums = [3,30,34,5,9]", output: '"9534330"' }],
    constraints: ["1 <= nums.length <= 100", "0 <= nums[i] <= 10^9"],
    starter_code: [
      {
        language: "javascript",
        code: "function largestNumber(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Custom sort comparator: compare (a+b) vs (b+a) as strings.",
    is_premium: false,
    created_at: "2024-02-05T00:00:00.000Z",
  },

  // ─── Binary Search (5) ───────────────────────────────────────────────────────
  {
    id: "88888888-0008-0008-0008-000000000001",
    slug: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    topic: "Binary Search",
    description:
      "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, return its index. Otherwise, return `-1`.",
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }],
    constraints: [
      "1 <= nums.length <= 10^4",
      "-10^4 < nums[i], target < 10^4",
      "All integers in nums are unique.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function search(nums, target) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Classic binary search: maintain left and right bounds, check midpoint each iteration.",
    is_premium: false,
    created_at: "2024-02-06T00:00:00.000Z",
  },
  {
    id: "88888888-0008-0008-0008-000000000002",
    slug: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    description:
      "Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.",
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }],
    constraints: [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i] <= 10^4",
      "All values of nums are unique.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function search(nums, target) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Modified binary search: determine which half is sorted, then decide which half the target lies in.",
    is_premium: false,
    created_at: "2024-02-07T00:00:00.000Z",
  },
  {
    id: "88888888-0008-0008-0008-000000000003",
    slug: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    topic: "Binary Search",
    description:
      "Given the sorted rotated array `nums` of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }],
    constraints: [
      "n == nums.length",
      "1 <= n <= 5000",
      "-5000 <= nums[i] <= 5000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function findMin(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Binary search: if mid > right, the minimum is in the right half; otherwise in the left half.",
    is_premium: false,
    created_at: "2024-02-08T00:00:00.000Z",
  },
  {
    id: "88888888-0008-0008-0008-000000000004",
    slug: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    difficulty: "Medium",
    topic: "Binary Search",
    description:
      "You are given an m x n integer matrix `matrix` with each row sorted in ascending order, and the first integer of each row is greater than the last integer of the previous row. Given an integer `target`, return `true` if `target` is in matrix or `false` otherwise. Algorithm must run in O(log(m * n)) time.",
    examples: [
      {
        input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        output: "true",
      },
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 <= m, n <= 100",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function searchMatrix(matrix, target) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Treat the 2D matrix as a 1D sorted array. Binary search with index conversion: row = mid/n, col = mid%n.",
    is_premium: false,
    created_at: "2024-02-09T00:00:00.000Z",
  },
  {
    id: "88888888-0008-0008-0008-000000000005",
    slug: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topic: "Binary Search",
    description:
      "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" }],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000",
      "0 <= n <= 1000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function findMedianSortedArrays(nums1, nums2) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Binary search on the smaller array's partition point. Ensure correct left/right halves across both arrays.",
    is_premium: true,
    created_at: "2024-02-10T00:00:00.000Z",
  },

  // ─── Stack (5) ───────────────────────────────────────────────────────────────
  {
    id: "99999999-0009-0009-0009-000000000001",
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    topic: "Stack",
    description:
      "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function isValid(s) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Use a stack. Push opening brackets, pop and check match for closing brackets.",
    is_premium: false,
    created_at: "2024-02-11T00:00:00.000Z",
  },
  {
    id: "99999999-0009-0009-0009-000000000002",
    slug: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    topic: "Stack",
    description:
      "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    examples: [
      {
        input:
          '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
        output: "[null,null,null,null,-3,null,0,-2]",
      },
    ],
    constraints: [
      "-2^31 <= val <= 2^31 - 1",
      "Methods pop, top and getMin operations will always be called on non-empty stacks.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "class MinStack {\n  constructor() {}\n  push(val) {}\n  pop() {}\n  top() {}\n  getMin() {}\n}",
      },
    ],
    solution_explanation:
      "Maintain a secondary min stack that tracks the minimum at each state.",
    is_premium: false,
    created_at: "2024-02-12T00:00:00.000Z",
  },
  {
    id: "99999999-0009-0009-0009-000000000003",
    slug: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    topic: "Stack",
    description:
      "Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature.",
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
      },
    ],
    constraints: [
      "1 <= temperatures.length <= 10^5",
      "30 <= temperatures[i] <= 100",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function dailyTemperatures(temperatures) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Monotonic decreasing stack of indices. When a warmer day is found, pop and record the difference.",
    is_premium: false,
    created_at: "2024-02-13T00:00:00.000Z",
  },
  {
    id: "99999999-0009-0009-0009-000000000004",
    slug: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    topic: "Stack",
    description:
      "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    examples: [{ input: "heights = [2,1,5,6,2,3]", output: "10" }],
    constraints: ["1 <= heights.length <= 10^5", "0 <= heights[i] <= 10^4"],
    starter_code: [
      {
        language: "javascript",
        code: "function largestRectangleArea(heights) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Monotonic increasing stack. When a shorter bar is found, pop and calculate area using the popped height.",
    is_premium: true,
    created_at: "2024-02-14T00:00:00.000Z",
  },
  {
    id: "99999999-0009-0009-0009-000000000005",
    slug: "evaluate-reverse-polish-notation",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    topic: "Stack",
    description:
      "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /.",
    examples: [
      {
        input: 'tokens = ["2","1","+","3","*"]',
        output: "9",
        explanation: "((2 + 1) * 3) = 9",
      },
    ],
    constraints: [
      "1 <= tokens.length <= 10^4",
      'tokens[i] is either an operator: "+", "-", "*", or "/", or an integer.',
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function evalRPN(tokens) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Push numbers onto stack. On operator, pop two operands, apply operation, push result.",
    is_premium: false,
    created_at: "2024-02-15T00:00:00.000Z",
  },

  // ─── Queue (5) ───────────────────────────────────────────────────────────────
  {
    id: "aaaaaaaa-000a-000a-000a-00000000000a",
    slug: "implement-queue-using-stacks",
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    topic: "Queue",
    description:
      "Implement a first in first out (FIFO) queue using only two stacks.",
    examples: [
      {
        input:
          '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]',
        output: "[null,null,null,1,1,false]",
      },
    ],
    constraints: [
      "1 <= x <= 9",
      "At most 100 calls will be made to push, pop, peek, and empty.",
      "All the calls to pop and peek are valid.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "class MyQueue {\n  constructor() {}\n  push(x) {}\n  pop() {}\n  peek() {}\n  empty() {}\n}",
      },
    ],
    solution_explanation:
      "Use two stacks (inbox/outbox). Transfer all elements when outbox is empty and a pop/peek is requested.",
    is_premium: false,
    created_at: "2024-02-16T00:00:00.000Z",
  },
  {
    id: "aaaaaaaa-000a-000a-000a-00000000000b",
    slug: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    topic: "Queue",
    description:
      "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the max sliding window.",
    examples: [
      { input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]" },
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "1 <= k <= nums.length",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function maxSlidingWindow(nums, k) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Monotonic deque: maintain indices of potentially useful elements. Front is always the window's max.",
    is_premium: true,
    created_at: "2024-02-17T00:00:00.000Z",
  },
  {
    id: "aaaaaaaa-000a-000a-000a-00000000000c",
    slug: "design-hit-counter",
    title: "Design Hit Counter",
    difficulty: "Medium",
    topic: "Queue",
    description:
      "Design a hit counter which counts the number of hits received in the past 5 minutes (300 seconds). Each function accepts a `timestamp` parameter (in seconds) and you may assume that calls are being made to the system in chronological order.",
    examples: [
      {
        input:
          '["HitCounter","hit","hit","hit","getHits","hit","getHits","getHits"]\n[[],[1],[2],[3],[4],[300],[300],[301]]',
        output: "[null,null,null,null,3,null,4,3]",
      },
    ],
    constraints: [
      "1 <= timestamp <= 2 * 10^9",
      "All the calls are being made to the system in chronological order.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "class HitCounter {\n  constructor() {}\n  hit(timestamp) {}\n  getHits(timestamp) {}\n}",
      },
    ],
    solution_explanation:
      "Queue-based approach: enqueue timestamp on hit, dequeue timestamps older than current - 300 on getHits.",
    is_premium: false,
    created_at: "2024-02-18T00:00:00.000Z",
  },
  {
    id: "aaaaaaaa-000a-000a-000a-00000000000d",
    slug: "task-scheduler",
    title: "Task Scheduler",
    difficulty: "Medium",
    topic: "Queue",
    description:
      "Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. Return the least number of units of times that the CPU will take to finish all the given tasks with a cooldown interval `n` between two same tasks.",
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: "8" },
    ],
    constraints: [
      "1 <= task.length <= 10^4",
      "tasks[i] is upper-case English letter.",
      "0 <= n <= 100",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function leastInterval(tasks, n) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Count task frequencies. Formula: max(tasks.length, (maxFreq - 1) * (n + 1) + countOfMaxFreq).",
    is_premium: false,
    created_at: "2024-02-19T00:00:00.000Z",
  },
  {
    id: "aaaaaaaa-000a-000a-000a-00000000000e",
    slug: "design-circular-queue",
    title: "Design Circular Queue",
    difficulty: "Medium",
    topic: "Queue",
    description:
      "Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO principle and the last position is connected back to the first position to make a circle.",
    examples: [
      {
        input:
          '["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]',
        output: "[null,true,true,true,false,3,true,true,true,4]",
      },
    ],
    constraints: [
      "1 <= k <= 1000",
      "0 <= value <= 1000",
      "At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, isFull.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "class MyCircularQueue {\n  constructor(k) {}\n  enQueue(value) {}\n  deQueue() {}\n  Front() {}\n  Rear() {}\n  isEmpty() {}\n  isFull() {}\n}",
      },
    ],
    solution_explanation:
      "Fixed-size array with head and tail pointers and a size counter. Use modular arithmetic for wrapping.",
    is_premium: false,
    created_at: "2024-02-20T00:00:00.000Z",
  },

  // ─── Hash Map (5) ────────────────────────────────────────────────────────────
  {
    id: "bbbbbbbb-000b-000b-000b-00000000000b",
    slug: "first-unique-character-in-string",
    title: "First Unique Character in a String",
    difficulty: "Easy",
    topic: "Hash Map",
    description:
      "Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.",
    examples: [
      { input: 's = "leetcode"', output: "0" },
      { input: 's = "aabb"', output: "-1" },
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s consists of only lowercase English letters.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function firstUniqChar(s) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Count character frequencies in one pass, then find the first with frequency 1.",
    is_premium: false,
    created_at: "2024-02-21T00:00:00.000Z",
  },
  {
    id: "bbbbbbbb-000b-000b-000b-00000000000c",
    slug: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    topic: "Hash Map",
    description:
      "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" }],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "k is in the range [1, the number of unique elements in the array].",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function topKFrequent(nums, k) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Frequency map + bucket sort by frequency. O(n) time with bucket sort approach.",
    is_premium: false,
    created_at: "2024-02-22T00:00:00.000Z",
  },
  {
    id: "bbbbbbbb-000b-000b-000b-00000000000d",
    slug: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    topic: "Hash Map",
    description:
      "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
        explanation: "The longest consecutive sequence is [1,2,3,4].",
      },
    ],
    constraints: ["0 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    starter_code: [
      {
        language: "javascript",
        code: "function longestConsecutive(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Store all numbers in a set. For each number that has no left neighbor (n-1 not in set), count consecutive chain.",
    is_premium: false,
    created_at: "2024-02-23T00:00:00.000Z",
  },
  {
    id: "bbbbbbbb-000b-000b-000b-00000000000e",
    slug: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    topic: "Hash Map",
    description:
      "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",
    examples: [{ input: "nums = [1,1,1], k = 2", output: "2" }],
    constraints: [
      "1 <= nums.length <= 2 * 10^4",
      "-1000 <= nums[i] <= 1000",
      "-10^7 <= k <= 10^7",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function subarraySum(nums, k) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Prefix sum + hash map: count how many times (prefixSum - k) has appeared.",
    is_premium: false,
    created_at: "2024-02-24T00:00:00.000Z",
  },
  {
    id: "bbbbbbbb-000b-000b-000b-00000000000f",
    slug: "design-hashmap",
    title: "Design HashMap",
    difficulty: "Easy",
    topic: "Hash Map",
    description:
      "Design a HashMap without using any built-in hash table libraries. Implement the `MyHashMap` class: put, get, and remove.",
    examples: [
      {
        input:
          '["MyHashMap","put","put","get","get","put","get","remove","get"]\n[[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]',
        output: "[null,null,null,1,-1,null,1,null,-1]",
      },
    ],
    constraints: [
      "0 <= key, value <= 10^6",
      "At most 10^4 calls will be made to put, get, and remove.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "class MyHashMap {\n  constructor() {}\n  put(key, value) {}\n  get(key) {}\n  remove(key) {}\n}",
      },
    ],
    solution_explanation:
      "Array of buckets with chaining (linked lists or arrays per bucket).",
    is_premium: false,
    created_at: "2024-02-25T00:00:00.000Z",
  },

  // ─── Two Pointers (5) ────────────────────────────────────────────────────────
  {
    id: "cccccccc-000c-000c-000c-00000000000c",
    slug: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    topic: "Two Pointers",
    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
    ],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    starter_code: [
      {
        language: "javascript",
        code: "function threeSum(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sort the array. Fix one element, then use two pointers to find pairs summing to its negative.",
    is_premium: false,
    created_at: "2024-02-26T00:00:00.000Z",
  },
  {
    id: "cccccccc-000c-000c-000c-00000000000d",
    slug: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "Two Pointers",
    description:
      "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container that holds the most water.",
    examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }],
    constraints: [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function maxArea(height) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Two pointers from both ends. Move the pointer with the shorter height inward.",
    is_premium: false,
    created_at: "2024-02-27T00:00:00.000Z",
  },
  {
    id: "cccccccc-000c-000c-000c-00000000000e",
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topic: "Two Pointers",
    description:
      "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }],
    constraints: [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function trap(height) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Two pointers + track maxLeft and maxRight. Water at each position = min(maxLeft, maxRight) - height[i].",
    is_premium: false,
    created_at: "2024-02-28T00:00:00.000Z",
  },
  {
    id: "cccccccc-000c-000c-000c-00000000000f",
    slug: "two-sum-ii-input-array-is-sorted",
    title: "Two Sum II - Input Array Is Sorted",
    difficulty: "Medium",
    topic: "Two Pointers",
    description:
      "Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
    examples: [{ input: "numbers = [2,7,11,15], target = 9", output: "[1,2]" }],
    constraints: [
      "2 <= numbers.length <= 3 * 10^4",
      "-1000 <= numbers[i] <= 1000",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function twoSum(numbers, target) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Two pointers at start and end. If sum < target, move left pointer right; if sum > target, move right pointer left.",
    is_premium: false,
    created_at: "2024-03-01T00:00:00.000Z",
  },
  {
    id: "cccccccc-000c-000c-000c-000000000010",
    slug: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    topic: "Two Pointers",
    description:
      "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.",
    examples: [{ input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" }],
    constraints: ["1 <= nums.length <= 3 * 10^4", "-100 <= nums[i] <= 100"],
    starter_code: [
      {
        language: "javascript",
        code: "function removeDuplicates(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Slow/fast pointer: slow tracks position to write, fast iterates. Write when nums[fast] != nums[slow].",
    is_premium: false,
    created_at: "2024-03-02T00:00:00.000Z",
  },

  // ─── Sliding Window (5) ──────────────────────────────────────────────────────
  {
    id: "dddddddd-000d-000d-000d-00000000000d",
    slug: "maximum-average-subarray",
    title: "Maximum Average Subarray I",
    difficulty: "Easy",
    topic: "Sliding Window",
    description:
      "You are given an integer array `nums` consisting of `n` elements, and an integer `k`. Find a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value.",
    examples: [
      { input: "nums = [1,12,-5,-6,50,3], k = 4", output: "12.75000" },
    ],
    constraints: [
      "n == nums.length",
      "1 <= k <= n <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function findMaxAverage(nums, k) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Fixed-size sliding window: maintain running sum, subtract element leaving and add element entering.",
    is_premium: false,
    created_at: "2024-03-03T00:00:00.000Z",
  },
  {
    id: "dddddddd-000d-000d-000d-00000000000e",
    slug: "permutation-in-string",
    title: "Permutation in String",
    difficulty: "Medium",
    topic: "Sliding Window",
    description:
      "Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise. In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.",
    examples: [{ input: 's1 = "ab", s2 = "eidbaooo"', output: "true" }],
    constraints: [
      "1 <= s1.length, s2.length <= 10^4",
      "s1 and s2 consist of lowercase English letters.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function checkInclusion(s1, s2) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Fixed sliding window of size s1.length. Compare character frequency maps.",
    is_premium: false,
    created_at: "2024-03-04T00:00:00.000Z",
  },
  {
    id: "dddddddd-000d-000d-000d-00000000000f",
    slug: "fruit-into-baskets",
    title: "Fruit Into Baskets",
    difficulty: "Medium",
    topic: "Sliding Window",
    description:
      "You are visiting a farm that has a single row of fruit trees arranged left to right. The trees are represented by an integer array `fruits` where `fruits[i]` is the type of fruit the ith tree produces. You want to collect as much fruit as possible with two baskets. Return the maximum number of fruits you can pick.",
    examples: [
      { input: "fruits = [1,2,1]", output: "3" },
      { input: "fruits = [0,1,2,2]", output: "3" },
    ],
    constraints: [
      "1 <= fruits.length <= 10^5",
      "0 <= fruits[i] < fruits.length",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function totalFruit(fruits) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sliding window with a map tracking at most 2 fruit types. Shrink window when 3rd type appears.",
    is_premium: false,
    created_at: "2024-03-05T00:00:00.000Z",
  },
  {
    id: "dddddddd-000d-000d-000d-000000000010",
    slug: "longest-repeating-character-replacement",
    title: "Longest Repeating Character Replacement",
    difficulty: "Medium",
    topic: "Sliding Window",
    description:
      "You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
    examples: [{ input: 's = "ABAB", k = 2', output: "4" }],
    constraints: [
      "1 <= s.length <= 10^5",
      "s consists of only uppercase English letters.",
      "0 <= k <= s.length",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function characterReplacement(s, k) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sliding window: (window size - maxFreq) <= k. Track max frequency of any char in window.",
    is_premium: false,
    created_at: "2024-03-06T00:00:00.000Z",
  },
  {
    id: "dddddddd-000d-000d-000d-000000000011",
    slug: "substring-with-concatenation-of-all-words",
    title: "Substring with Concatenation of All Words",
    difficulty: "Hard",
    topic: "Sliding Window",
    description:
      "You are given a string `s` and an array of strings `words`. All the strings of `words` are of the same length. Return all starting indices of substring(s) in `s` that is a concatenation of each word in `words` exactly once, in any order.",
    examples: [
      {
        input: 's = "barfoothefoobarman", words = ["foo","bar"]',
        output: "[0,9]",
      },
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "1 <= words.length <= 5000",
      "1 <= words[i].length <= 30",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function findSubstring(s, words) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Sliding window of size words.length * word.length. Use frequency maps to check validity.",
    is_premium: true,
    created_at: "2024-03-07T00:00:00.000Z",
  },

  // ─── Recursion (5) ───────────────────────────────────────────────────────────
  {
    id: "eeeeeeee-000e-000e-000e-00000000000e",
    slug: "power-of-two",
    title: "Power of Two",
    difficulty: "Easy",
    topic: "Recursion",
    description:
      "Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.",
    examples: [
      { input: "n = 16", output: "true" },
      { input: "n = 3", output: "false" },
    ],
    constraints: ["-2^31 <= n <= 2^31 - 1"],
    starter_code: [
      {
        language: "javascript",
        code: "function isPowerOfTwo(n) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Base cases: n <= 0 → false, n === 1 → true. Recursive: n % 2 === 0 && isPowerOfTwo(n/2).",
    is_premium: false,
    created_at: "2024-03-08T00:00:00.000Z",
  },
  {
    id: "eeeeeeee-000e-000e-000e-00000000000f",
    slug: "flatten-nested-list-iterator",
    title: "Flatten Nested List Iterator",
    difficulty: "Medium",
    topic: "Recursion",
    description:
      "You are given a nested list of integers `nestedList`. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.",
    examples: [
      { input: "nestedList = [[1,1],2,[1,1]]", output: "[1,1,2,1,1]" },
    ],
    constraints: [
      "1 <= nestedList.length <= 500",
      "The values of the integers in the nested list is in the range [-10^6, 10^6].",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "class NestedIterator {\n  constructor(nestedList) {}\n  next() {}\n  hasNext() {}\n}",
      },
    ],
    solution_explanation:
      "Recursively flatten the entire list into a flat array in the constructor, then iterate.",
    is_premium: false,
    created_at: "2024-03-09T00:00:00.000Z",
  },
  {
    id: "eeeeeeee-000e-000e-000e-000000000010",
    slug: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    topic: "Recursion",
    description:
      "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      },
    ],
    constraints: [
      "1 <= nums.length <= 6",
      "-10 <= nums[i] <= 10",
      "All the integers of nums are unique.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function permute(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Recursively swap elements and collect results. Or build permutations by choosing unused elements.",
    is_premium: false,
    created_at: "2024-03-10T00:00:00.000Z",
  },
  {
    id: "eeeeeeee-000e-000e-000e-000000000011",
    slug: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "Medium",
    topic: "Recursion",
    description:
      "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    examples: [
      {
        input: "n = 3",
        output: '["((()))","(()())","(())()","()(())","()()()"]',
      },
    ],
    constraints: ["1 <= n <= 8"],
    starter_code: [
      {
        language: "javascript",
        code: "function generateParenthesis(n) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Recursive: add '(' if open < n, add ')' if close < open. Collect when length === 2n.",
    is_premium: false,
    created_at: "2024-03-11T00:00:00.000Z",
  },
  {
    id: "eeeeeeee-000e-000e-000e-000000000012",
    slug: "tower-of-hanoi",
    title: "Tower of Hanoi",
    difficulty: "Hard",
    topic: "Recursion",
    description:
      "Implement the Tower of Hanoi algorithm. Given `n` disks and three pegs (source, target, auxiliary), move all disks from source to target. Return the list of moves as arrays [fromPeg, toPeg]. A larger disk must never be placed on top of a smaller disk.",
    examples: [{ input: "n = 2", output: "[[1,3],[1,2],[3,2]]" }],
    constraints: ["1 <= n <= 10"],
    starter_code: [
      {
        language: "javascript",
        code: "function hanoi(n, source, target, auxiliary) {\n  // your code here\n  // return array of [from, to] moves\n}",
      },
    ],
    solution_explanation:
      "Move n-1 disks to auxiliary, move disk n to target, move n-1 disks from auxiliary to target.",
    is_premium: true,
    created_at: "2024-03-12T00:00:00.000Z",
  },

  // ─── Backtracking (5) ────────────────────────────────────────────────────────
  {
    id: "ffffffff-000f-000f-000f-00000000000f",
    slug: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    topic: "Backtracking",
    description:
      "Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      },
    ],
    constraints: [
      "1 <= nums.length <= 10",
      "-10 <= nums[i] <= 10",
      "All the numbers of nums are unique.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function subsets(nums) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Backtrack: at each index, either include or exclude the element. Collect results at every node.",
    is_premium: false,
    created_at: "2024-03-13T00:00:00.000Z",
  },
  {
    id: "ffffffff-000f-000f-000f-000000000010",
    slug: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    topic: "Backtracking",
    description:
      "Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. The same number may be chosen from candidates an unlimited number of times.",
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
    ],
    constraints: [
      "1 <= candidates.length <= 30",
      "2 <= candidates[i] <= 40",
      "1 <= target <= 40",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function combinationSum(candidates, target) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Backtrack with a running sum. At each step, try each candidate >= current index. Prune if sum > target.",
    is_premium: false,
    created_at: "2024-03-14T00:00:00.000Z",
  },
  {
    id: "ffffffff-000f-000f-000f-000000000011",
    slug: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    topic: "Backtracking",
    description:
      "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
    examples: [
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
    ],
    constraints: [
      "m == board.length",
      "n = board[i].length",
      "1 <= m, n <= 6",
      "1 <= word.length <= 15",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function exist(board, word) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "DFS backtracking from each cell. Mark visited, recurse in 4 directions, unmark on backtrack.",
    is_premium: false,
    created_at: "2024-03-15T00:00:00.000Z",
  },
  {
    id: "ffffffff-000f-000f-000f-000000000012",
    slug: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    topic: "Backtracking",
    description:
      "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return all distinct solutions to the n-queens puzzle.",
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      },
    ],
    constraints: ["1 <= n <= 9"],
    starter_code: [
      {
        language: "javascript",
        code: "function solveNQueens(n) {\n  // your code here\n}",
      },
    ],
    solution_explanation:
      "Backtrack row by row. Use sets to track occupied columns, diagonals (r-c), and anti-diagonals (r+c).",
    is_premium: true,
    created_at: "2024-03-16T00:00:00.000Z",
  },
  {
    id: "ffffffff-000f-000f-000f-000000000013",
    slug: "sudoku-solver",
    title: "Sudoku Solver",
    difficulty: "Hard",
    topic: "Backtracking",
    description:
      "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: Each of the digits 1-9 must occur exactly once in each row, column, and 3×3 sub-box.",
    examples: [
      {
        input:
          'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: "Solved board in-place",
      },
    ],
    constraints: [
      "board.length == 9",
      "board[i].length == 9",
      "board[i][j] is a digit 1-9 or '.'.",
      "It is guaranteed that the input board has only one solution.",
    ],
    starter_code: [
      {
        language: "javascript",
        code: "function solveSudoku(board) {\n  // your code here (modify board in-place)\n}",
      },
    ],
    solution_explanation:
      "Find an empty cell, try digits 1-9, check validity, recurse. Backtrack if no valid digit found.",
    is_premium: true,
    created_at: "2024-03-17T00:00:00.000Z",
  },
];
