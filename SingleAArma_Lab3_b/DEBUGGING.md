# Vlad's Debug Log

**Start Date:** 2026-02-07  
**Time Started:** 09:23pm  
**End Date:** 2026-02-10  
**Time Ended:** 06:11pm

---

## Catch-Up Block — 2026-02-08 (local time: 09:00pm)

**Context:** Catching DEBUG log up to current state after pain/sleep disruption. Summarizing prior actions from terminal + GitHub GUI review.  
**Goal:** Record what happened, then resume active debugging cycles.

### Summary of what happened

- [x] Verified repo/branch state via GUI (commits + diffs).
- [x] Confirmed file locations; corrected wrong-directory confusion by cd’ing into repo root.
- [x] Moved/created README in correct folder; restored top-level README.
- [x] Added/updated `DEBUG.md` template; committed + pushed.
- [x] Verified last 3 commits using `git log --oneline --decorate -3`.
- [x] Identified primary offenders: `index.html` + `script.js` (largest error count); Python has remaining issues; shell likely last.

### Evidence / Commands

- `pwd`:
- `ls -al`:
- `git status`:
- `git log --oneline --decorate -3`:
- Notes from GitHub “Files changed” view: (+ added / − removed confirmed)

---

### Pre-Repo Setup Friction (before clean Git state)

**What happened:** Initial confusion occurred before the repo was recognized as a Git repository.

- Started in a directory that was _not_ the repo root → `fatal: not a git repository`
- Resolved by navigating into the correct project folder:
  - `cd SingleA_Armageddon_VersionB/SingleAArma_Lab3_b`
- Confirmed correct branch and remote tracking after entering repo:
  - `On branch lab3_fixes`
  - `up to date with origin/lab3_fixes`

**Lesson:** Always verify location first:

- `pwd`
- `ls`
- `git status`

---

## Context

- **Project / Lab Name:** Lab 3 Debugging
- **Repo:** SingleA_Armageddon_VersionB
- **Branch:** vlad_lab3_fixes
- **Environment:** Browser + Terminal + Python
- **OS:** macOS (zsh)

---

## Goal of This Debug Session

Identify syntax + logic errors across four files, apply fixes, and verify clean execution:

- `index.html`
- `script.js`
- `python_app.py`
- `script.sh`

---

## Debug Cycles

### Cycle 1 — index.html

- **Symptom:** Page logic failed / incorrect age handling.
- **First Error Observed:** Invalid NaN check and broken conditional structure.
- **Root Cause Hypothesis:** Input validation was not correctly detecting invalid numbers.
- **Fix Applied:**
  - Corrected input validation using proper NaN detection
  - Cleaned conditionals and removed invalid filler code
- **Result / Verification:** Page runs without console errors and displays correct output.

---

### Cycle 2 — script.js

- **Symptom:** JavaScript parser errors and broken loops.
- **First Error Observed:** Missing braces/parentheses and incorrect comparisons.
- **Root Cause Hypothesis:** Parser failed due to unclosed blocks and assignment used instead of equality.
- **Fix Applied:**
  - Closed all blocks correctly
  - Replaced comparisons with strict equality (`===`)
  - Corrected loop logic
- **Result / Verification:** Script executes cleanly and produces expected output.

---

### Cycle 3 — python_app.py

- **Symptom:** Runtime crash during statistics calculation.
- **First Error Observed:** Invalid expression and improper exception handling.
- **Root Cause Hypothesis:** Math/syntax issue caused runtime failure and exceptions were not safely handled.
- **Fix Applied:**
  - Identified incorrect average/stat calculation logic
  - Added safer exception handling to prevent crashes
- **Result / Verification:** Script runs, but output confirms unresolved average/stat calculation bugs remain.

**Terminal Evidence:**

```bash
python3 python_app.py
...
Wrong average due to logic error: 42.44
Error computing stats: unsupported operand type(s) for -: 'list' and 'int'

```

---

### Cycle 4 — script.sh

- **Symptom:** Bash script required strict quoting and conditional fixes.
- **First Error Observed:** Shellcheck warnings + unsafe conditionals.
- **Root Cause Hypothesis:** Missing quotes and improper test structure.
- **Fix Applied:**
  - Added quoting where required
  - Corrected conditional formatting
- **Result / Verification:** Script passes shellcheck and executes successfully.

```bash
shellcheck script.sh
bash script.sh
```

---

### Bash Evidence (Cycle 4)

```text
Pre-fix shellcheck errors:
SC1049: Did you forget 'then'?
SC1050: Expected 'then'
SC1072: Unexpected token `else'

Post-fix:
shellcheck script.sh
(no output = clean)

./script.sh 5 3 8 1 9 2
Sum of numbers: 28
Average: 4
Max: 9
Min: 1
Product of numbers: 2160

```

---

## Tools Used

- [x] Console
- [x] Terminal
- [x] Linter / Problems Panel

---

## Errors Collected

```text
VS Code Problems (Pre-Fix)

')' expected. (script.js ln 60)
Declaration expected. (script.js ln 62)
')' expected. (script.js ln 97)
';' expected. (script.js ln 97)
Declaration expected. (script.js ln 99)
'}' expected. (script.js ln 142)

Missing ')' + ';' (ln 73)
Declaration expected (ln 75)
Declaration expected (ln 149)
Missing '}' (ln 154)

```

---

## Fixes Applied Summary

1. Fixed HTML input validation + conditionals.
2. Repaired JavaScript loop + strict equality issues.
3. Corrected Python calculation + exception handling.
4. Cleaned Bash quoting + conditional structure.

---

## Lessons Learned

- Syntax errors cascade quickly across files.
- Debugging is fastest when done one file at a time.
- Bash requires quoting and strict conditional structure.
- Always verify fixes with terminal output evidence.

---

## Stage → Commit → Push

```bash
git add index.html script.js python_app.py script.sh DEBUGGING.md
git commit -m "Fix Lab 3 syntax and logic errors and document debugging"
git push
git log --oneline -3
```
