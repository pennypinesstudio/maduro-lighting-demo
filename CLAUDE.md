# CLAUDE.md

## Mode: Deployment Visual Fidelity

Activate this mode when brand_assets/ contains:
- design.html and/or
- reference.png

## Inputs
- brand_assets/design.html
- brand_assets/reference.png (preferred)

## Execution

Follow the agent definitions in agents.md exactly.

Run in this order:
1. Reference Parser Agent
2. Build Agent
3. Pre-flight Check (must pass before QA)
4. Visual QA Agent
5. Repair Agent
6. Repeat QA/Repair loop (max 3 cycles)
7. Stop when VISUAL_DIFF.pass = true

## Pre-flight Check

Before running Visual QA, verify ALL of the following or STOP and fix:
- `pages/_app.tsx` exists and imports `styles/globals.css`
- `npm run dev` starts without errors (exit code 0 after 15s)
- `curl http://localhost:3000` returns HTTP 200
- No console errors on page load

## Rules

- Do NOT redesign
- Do NOT invent sections or features
- Do NOT use Vite
- Build a full Next.js project (React + Tailwind)
- Do NOT use Tailwind CDN
- Match reference visually with high fidelity
- Only apply fixes returned by Visual QA Agent
- No extra prose from agents (structured output only)
- Visual QA MUST read both screenshots before outputting VISUAL_DIFF
- VISUAL_DIFF.pass = true requires ALL checklist items to pass, not just overall impression
- Each fix must reference the exact file path and line number

## Source of Truth

- reference.png = visual truth
- design.html = structural reference
- If conflict: follow reference.png

## Output

- Production-ready Next.js project
- Clean component structure
- Ready for GitHub and Vercel

## Completion Handoff

After the final QA cycle:

- Always report whether VISUAL_DIFF.pass is true or false
- Always provide the local preview URL
- Always instruct the user to open and review the result

Required final output:

FINAL_STATUS:
  qa_passed: true/false
  preview_url: http://localhost:3000
  next_action: "Open the preview and review the result. If you see any mismatch, request another QA cycle."

User-facing message must begin with:

"Hey, Cuteness — Visual QA complete. Open http://localhost:3000 to review the result."

Rules:
- Do not omit the greeting
- Do not rephrase the greeting
- Do not place it anywhere other than the beginning of the message

---

## Agent Definitions

See: agents.md
