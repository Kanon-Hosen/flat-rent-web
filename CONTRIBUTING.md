# 🤝 Contributing Guide

Welcome, team! This guide will help us collaborate efficiently on this project using Git & GitHub.

---

## 📦 Branch Naming Convention

Use the format:  
`<role>/<type>/<short-description>`

### ➤ Role

- `frontend` → UI, React, CSS
- `backend` → APIs, Database

### ➤ Type

- `feature` → New feature
- `bugfix` → Fixing a bug
- `refactor` → Improving code structure
- `docs` → Documentation changes
- `test` → Writing or updating tests
- `chore` → Minor tasks like updating dependencies

### ✅ Examples

- `frontend/feature/navbar-design`
- `frontend/feature/hero-section`
- `backend/bugfix/token-expiry`
- `backend/refactor/db-schema`

---

## 🔁 Git Workflow

### 1. Always work in a separate branch:

```bash
git checkout -b frontend/feature/hero-section

2. After completing your task:
git add .
git commit -m "Create hero section layout"
git push origin frontend/feature/hero-section

3. Create a Pull Request (PR) to dev branch
📋 Pull Request Format
PR Title:
[Frontend] Add Hero Section
[Backend] Fix login token bug

PR Description:
✅ What was done:
- Built responsive Hero Section using Tailwind CSS

🛠️ How to test:
- Run `npm run dev`
- Open browser on `/` route and check UI

🔗 Related issue: #issue-id (if any)
✅ After PR Merge
Delete your feature branch:


git branch -d frontend/feature/hero-section
git push origin --delete frontend/feature/hero-section
```
