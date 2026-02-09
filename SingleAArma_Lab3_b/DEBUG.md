# Vlad's Debug Log 

**Date:** 2026-02-07
**Time Started:** 09:23pm
**Time Ended:** 


## Catch-Up Block — 2026-02-08 (local time: __:__)
**Context:** Catching DEBUG log up to current state after pain/sleep disruption. Summarizing prior actions from terminal + GitHub GUI review.
**Goal:** Record what happened, then resume active debugging cycles.

### Summary of what happened (bullets)
- [ ] Verified repo/branch state via GUI (commits + diffs).
- [ ] Confirmed file locations; corrected wrong-directory confusion by cd’ing into repo root.
- [ ] Moved/created README in correct folder; restored top-level README.
- [ ] Added/updated `DEBUG.md` template; committed + pushed.
- [ ] Verified last 3 commits using `git log --oneline --decorate -3`.
- [ ] Identified primary offenders: `index.html` + `script.js` (largest error count); Python has remaining issues; shell likely last.

### Evidence / Commands
- `pwd`:
- `ls -al`:
- `git status`:
- `git log --oneline --decorate -3`:
- Notes from GitHub “Files changed” view: (+ added / − removed confirmed)


### Pre-Repo Setup Friction (before clean Git state)
**What happened:** Initial confusion occurred before the repo was recognized as a Git repository.

- Started in a directory that was *not* the repo root → `fatal: not a git repository`
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
- **Project / Lab Name:** 
- **Repo:** 
- **Branch:** 
- **Environment:** (Browser, Live Server, Node, Python, etc.)
- **OS:** 

---

## Goal of This Debug Session
(What is supposed to work? What is the expected output?)

---

## Debug Cycles (Numbered)

### Cycle 1
- **Symptom:** 
- **First Error Observed:** 
- **Root Cause Hypothesis:** 
- **Fix Applied:** 
- **Result / Verification:** 

---

### Cycle 2
- **Symptom:** 
- **First Error Observed:** 
- **Root Cause Hypothesis:** 
- **Fix Applied:** 
- **Result / Verification:** 

---

### Cycle 3
- **Symptom:** 
- **First Error Observed:** 
- **Root Cause Hypothesis:** 
- **Fix Applied:** 
- **Result / Verification:** 

---

### Cycle 4
- **Symptom:** 
- **First Error Observed:** 
- **Root Cause Hypothesis:** 
- **Fix Applied:** 
- **Result / Verification:** 

---

## Tools Used
- [ ] Console
- [ ] Elements
- [ ] Sources / Breakpoints
- [ ] Terminal
- [ ] Linter / Problems Panel

---

## Errors Collected (Copy/Paste)
```

```

---

## Fixes Applied Summary
1. 
2. 
3. 

---

## Lessons Learned
- What caused this?
- How to avoid it next time?

---

## Follow-Ups / TODO
- [ ] Refactor
- [ ] Add tests
- [ ] Cleanup /


### Cycle X
- **Symptom:**  
- **First Error Observed:**  
- **Root Cause Hypothesis:**  
- **Fix Applied:**  
- **Result / Verification:**  

---


### Cycle X
- **Symptom:**  
- **First Error Observed:**  
- **Root Cause Hypothesis:**  
- **Fix Applied:**  
- **Result / Verification:**  

---



