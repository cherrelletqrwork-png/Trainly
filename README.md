# Trainly

> The trusted home for freelance fitness and wellness professionals in Singapore.

**Live demo:** **https://cherrelletqrwork-png.github.io/Trainly/**

Trainly connects users with verified freelance personal trainers, gym coaches, PE teachers, physiotherapists, sports coaches, yoga instructors, pilates instructors, nutritionists, and rehab specialists — for sessions at home, the gym, outdoors, or online.

Think Grab/Uber, but for independent fitness and wellness pros.

---

## What's in the demo

A fully working, single-page web demo (no backend, no signup required).

### Public site
- Hero search with category, area, and goal filters
- Marketplace of 12 sample coaches with budget / session-type / vibe / availability filters and sorting
- AI match quiz that ranks coaches by goal, style, location, and budget
- Coach detail modal — bio, certifications, packages, sample reviews
- Pre-booking chat modal with quick-reply chips and simulated coach responses
- "How it works" 4-step explainer
- Pricing — single session, 4-session pack, monthly membership
- Stories, trust & safety, provider pitch, FAQ, newsletter
- Animated stat counters and scroll-reveal sections

### Auth + dashboards
- Role-based login (User vs. Service Provider) — no real password needed for the demo
- **User dashboard** — bookings, messages, weekly streak chart, editable profile
- **Provider dashboard** — incoming requests, calendar, weekly earnings chart, profile
- **Provider onboarding wizard** — 4-step verification flow that drops into the dashboard

### Trust & safety surface
- ID + certification verification badges
- Escrow-protected payment messaging
- In-app chat, location sharing, two-way reviews

---

## Target audience

- Busy working adults
- Beginners intimidated by gyms
- Students preparing for fitness tests (NAPFA)
- Elderly people needing rehab or mobility support
- Parents searching for sports/fitness coaches for their children
- People recovering from injuries
- Anyone wanting convenient home-based wellness

---

## Revenue model

- **15% commission** on first-time bookings, **8%** on repeat bookings with the same coach
- **Optional paid boosts** for providers to rank higher in search
- **Monthly memberships** (8-session bundles with recurring billing)
- **Featured placement** for studio partners and brands
- No subscription fees for providers — they pay only when they earn

---

## Roadmap

- [ ] Real auth (Auth0 / Supabase / Firebase)
- [ ] Backend + database (Supabase / Postgres)
- [ ] Stripe Connect for marketplace payouts + escrow
- [ ] Native in-app chat (Stream Chat or Twilio)
- [ ] Calendar sync (Google / Apple)
- [ ] Mobile apps (React Native or Flutter)
- [ ] Regional expansion: Malaysia → Indonesia → Thailand → Vietnam

---

## Tech notes

This demo is a **static site** — pure HTML, CSS, and vanilla JavaScript. It runs on GitHub Pages with no backend, no build step, and no dependencies. Every interaction is simulated in the browser, which makes it instant to share and fast to iterate on.

To run it locally:

    git clone https://github.com/cherrelletqrwork-png/Trainly.git
    cd Trainly
    python3 -m http.server 8000
    # then open http://localhost:8000

To deploy an update: edit, `git commit`, `git push`. GitHub Pages rebuilds in ~1–2 minutes.

---

## Brand

- **Mark:** rounded teal square, white "T" — Trainly teal `#00bfa5`
- **Voice:** confident, warm, beginner-safe, lightly playful
- **Aesthetic:** modern services app — soft mint and teal on white, dark navy for trust moments
- **Type:** Inter (400–900)

---

*Singapore-built · 2026*
