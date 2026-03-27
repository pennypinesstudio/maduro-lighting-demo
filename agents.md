# AGENTS

## Reference Parser Agent

Input:
- brand_assets/design.html
- brand_assets/reference.png (if available)

Output ONLY:

REFERENCE_MAP:
  section_order:
    - hero
    - section
  components:
    - header
    - hero
  layout_notes:
    - ""
  typography:
    font_sizes:
      h1: ""
      h2: ""
      body: ""
      mono: ""
    font_families:
      display: ""
      body: ""
      mono: ""
  colors:
    primary: ""
    background: ""
    surface: ""
    border: ""
    accent: ""
    text_main: ""
    text_muted: ""
    text_dim: ""
  spacing:
    section_padding: ""
    container_max_width: ""
    container_padding: ""
  qa_checklist:
    - "background color matches"
    - "no white/light background on body"
    - "global CSS is imported"
    - "section order matches"
    - "typography fonts loaded"
    - "accent color applied correctly"
    - "no duplicate sections"

Rules:
- Extract exact values (hex colors, rem sizes, px spacing) — do not approximate
- Keep minimal if unclear
- Use reference.png as visual source of truth when present
- qa_checklist must include one entry per visually distinct section

---

## Build Agent

Input:
- REFERENCE_MAP
- brand_assets/design.html

Output:
- Full Next.js project

Required files (ALL must be present or build is incomplete):
- pages/_app.tsx  ← MANDATORY: must import styles/globals.css
- pages/index.tsx
- pages/_document.tsx
- components/*
- styles/globals.css
- package.json
- next.config.js
- tailwind.config.js
- postcss.config.js
- tsconfig.json
- README.md
- serve.mjs
- screenshot.mjs

Rules:
- Match layout and hierarchy exactly
- Do NOT redesign
- Convert HTML structure into clean components
- Replace brittle CSS with Tailwind utilities
- Keep responsive behavior
- globals.css MUST be imported in pages/_app.tsx — not index.tsx or _document.tsx
- After writing all files, verify pages/_app.tsx contains: import '../styles/globals.css'

---

## Visual QA Agent

Default state: FAIL. Pass must be earned, not assumed.

Steps:
1. Ensure dev server running at http://localhost:3000
2. Start if needed: node serve.mjs
3. Wait 15 seconds for server and fonts to fully load
4. Screenshot: node screenshot.mjs http://localhost:3000 qa
5. Read screenshots/qa.png
6. Read brand_assets/reference.png
7. Compare both images against every checklist item below
8. Any uncertainty on any item = that item fails
9. Any visible difference, however small = that item fails

Checklist (evaluate each item independently — uncertainty = fail):
- [ ] Body background: color matches reference exactly (not white, not gray, not off-black)
- [ ] Background grid: subtle grid lines visible on body at correct density and color
- [ ] Global CSS applied: custom fonts, colors, and spacing all visibly active
- [ ] Section order: all sections present, none missing, none duplicated
- [ ] Hero spacing: top padding, h1 margin-bottom, and paragraph margin-bottom match reference proportions
- [ ] Hero heading tracking: letter-spacing on h1 matches reference (Syncopate wide-spaced appearance)
- [ ] Hero gradient: h1 text fades from white to gray — not flat white, not invisible
- [ ] Navigation: fixed at top, logo + links + CTA button all aligned and sized correctly
- [ ] Border contrast: section dividers and card borders visible against dark background
- [ ] Card spacing: catalog grid cards have correct internal padding; gap between cards matches reference
- [ ] Image contrast: system showcase images render with luminosity blend and reduced opacity, not full-color
- [ ] Section rhythm: vertical whitespace between sections matches reference proportions
- [ ] Accent color: amber (#F2A900) appears on eyebrow labels, highlighted text, and icon borders
- [ ] CTA sizing: primary buttons match reference height, padding, and font size
- [ ] Footer spacing: footer CTA heading margin, grid column gaps, and bottom bar spacing match reference
- [ ] Footer columns: all four columns present with correct headings and link lists

Output ONLY:

VISUAL_DIFF:
  pass: true/false
  checklist:
    - item: "Body background color"
      pass: true/false
      note: ""
    - item: "Background grid visible"
      pass: true/false
      note: ""
    - item: "Global CSS applied"
      pass: true/false
      note: ""
    - item: "Section order and completeness"
      pass: true/false
      note: ""
    - item: "Hero spacing"
      pass: true/false
      note: ""
    - item: "Hero heading tracking"
      pass: true/false
      note: ""
    - item: "Hero gradient"
      pass: true/false
      note: ""
    - item: "Navigation layout"
      pass: true/false
      note: ""
    - item: "Border contrast"
      pass: true/false
      note: ""
    - item: "Card spacing"
      pass: true/false
      note: ""
    - item: "Image contrast and blend mode"
      pass: true/false
      note: ""
    - item: "Section rhythm"
      pass: true/false
      note: ""
    - item: "Accent color placement"
      pass: true/false
      note: ""
    - item: "CTA sizing"
      pass: true/false
      note: ""
    - item: "Footer spacing"
      pass: true/false
      note: ""
    - item: "Footer columns"
      pass: true/false
      note: ""
  issues:
    - element: ""
      expected: ""
      observed: ""
  fixes:
    - file: "path/to/file.tsx"
      line: 0
      change: "exact code change to apply"

Rules:
- pass: true ONLY when every checklist item passes — not overall impression
- If any checklist item is uncertain, mark it false
- If any visible difference exists, mark it false
- issues list must contain at least 3 entries when pass is false, unless fewer than 3 real differences exist
- Each issue must name the element, state the expected value, and state the observed value
- Each fix must include exact file path and line number
- No prose outside the VISUAL_DIFF block

---

## Repair Agent

Input:
- VISUAL_DIFF

Steps:
1. Read each fix from VISUAL_DIFF.fixes
2. Read the target file before editing
3. Apply ONLY the listed fix — do not refactor surrounding code
4. Preserve all other structure and layout
5. After all fixes applied, trigger Visual QA Agent again

Rules:
- One fix at a time — read, edit, verify, move to next
- Do NOT apply fixes not listed in VISUAL_DIFF
- If a fix would break another passing checklist item, skip it and note the conflict

---

## Iteration Rule

- Max 3 QA cycles
- Stop early if VISUAL_DIFF.pass = true (all checklist items pass)
- After cycle 1: if background is not dark, fix _app.tsx import before any other fixes
- If still failing after 3 rounds, output all remaining VISUAL_DIFF checklist failures clearly
