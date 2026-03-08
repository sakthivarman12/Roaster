# 📅 Staff Roster — Setup Guide

## Stack
- **React 18 + Vite** — runs 100% in the browser
- **Supabase** — handles database, auth, and RLS security
- **GitHub Pages** — free hosting

---

## Step 1 — Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
```

---

## Step 2 — Create Supabase project

1. Go to **[supabase.com](https://supabase.com)** → New project
2. In the SQL editor, paste the contents of `supabase/schema.sql` and click **Run**
3. Copy your **Project URL** and **anon public key** from:  
   `Settings → API`

---

## Step 3 — Configure environment

```bash
cp .env.example .env
```

Edit `.env`:
```
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

> ⚠️ Never commit `.env` — it's in `.gitignore`

---

## Step 4 — Run locally

```bash
npm run dev
# Open http://localhost:5173
```

---

## Step 5 — Deploy to GitHub Pages

### One-time setup

1. Push the project to a GitHub repo
2. In your repo: **Settings → Pages → Source: GitHub Actions**
3. Create `.github/workflows/deploy.yml` (see below)

### Add env secrets to GitHub

Go to **Settings → Secrets and variables → Actions → New repository secret**:
- `VITE_SUPABASE_URL` → your Supabase URL
- `VITE_SUPABASE_ANON_KEY` → your anon key

### GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

After pushing this file, every push to `main` auto-deploys!  
Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## First-use flow

1. Sign up with your email on the site
2. In Supabase: **Table Editor → profiles → find your row → set role to `admin`**
3. Go to **Staff** page → assign departments to all team members
4. Go to **Rosters** → create a new roster for next month
5. Click **"Open for Availability"** → staff can log in and submit unavailable dates
6. Once ready, click **"Auto-Generate"** then **"Publish & Notify"**

---

## Mobile

The app is a PWA-ready responsive web app:
- Works on any phone browser (Chrome, Safari)
- Staff get a bottom tab navigation
- Admins see a full sidebar on desktop

To install as a home screen app on iPhone: **Safari → Share → Add to Home Screen**

