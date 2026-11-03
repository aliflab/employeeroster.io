# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: owners and managers of shift-based small businesses** that already run a WordPress site (cafés, retail, clinics, care, cleaning and similar). Their job: build next week's roster, know who is working, handle leave and timesheets, and stop juggling spreadsheets, group chats and a separate SaaS rostering tool.
- **Secondary: WordPress agencies and developers** who install and configure the plugin for those businesses. They care about clean installation, plan gating, roles/capabilities, and documentation they can hand to clients.
- Employees and supervisors use the plugin (frontend portal, clock in/out, requests) but are not the buyers the marketing site addresses.

## Product Purpose

Employee Roster is a WordPress plugin for shift scheduling and staff rostering. It lets a business run its roster, attendance, leave, timesheets and payroll calculations from its own WordPress install. Success for the site is a visitor installing the free version from WordPress.org or buying a paid plan, and existing users finding answers in the docs without contacting support.

## Positioning

**Lead claim: all-in-one, inside WordPress.** Roster, attendance, leave, timesheets and payroll in one plugin in the WP Admin the business already uses, with no extra tools to sign up for.

Supporting claims (true, but secondary to the lead):
- No per-user SaaS fees: flat annual licence, unlimited employees on every plan including free.
- Self-hosted: data stays in the site's own database, no external APIs or third-party accounts.
- Frontend portal so staff need not see WP Admin.

## Operating Context

- Distributed as a **free build on WordPress.org** (premium code physically absent, not gated) and paid tiers sold through **Freemius**: Starter ($99/yr), Professional ($199/yr), Business ($599/yr, 5 sites; same features as Professional).
- Requires WordPress 5.8+ and PHP 7.4+. GPL-3.0.
- Site surfaces: marketing landing page with pricing (`index.html`), single-page docs (`docs.html`), blog (`blog/`), privacy and terms pages.
- Visitors arrive comparing against SaaS rostering tools (Deputy, When I Work, etc.) and other WordPress roster plugins.

## Capabilities and Constraints

- **Plan gating source of truth:** `employeeroster-shared/plans.md`. Every plan claim on the site must match it; "free" means the feature is genuinely absent from the WordPress.org build.
- Plugin terminology used across site and product: Roster, Shifts, Open Shifts, Copy Roster, Shift Confirmation, Attendance (clock in/out), Leave, Requests, Timesheets, Penalty Rates, Skill Tags, Profile Mode, Supervisor / Manager / Employee roles, "EmpRoster" admin menu.
- No shift limit on any plan; unlimited employees on every plan.
- Static site, no build step, deployed via GitHub Pages from `main` (`CNAME` → employeeroster.io).

## Brand Commitments

- Name: **Employee Roster** (admin menu label "EmpRoster"). Logo assets in `assets/brand/` and `assets/logo/`.
- Voice: plain, direct, honest ("Simple, honest pricing", "Everything your team needs, nothing they don't"). No hype; plan limits stated plainly.

## Evidence on Hand

- Real product screenshots: `assets/brand/screenshots/` (weekly roster, monthly calendar, shift creation, manager dashboard, leave requests, clock in/out) and docs images in `assets/docs/`.
- **WordPress.org reviews and active-install counts may be used**, but only as currently shown on https://wordpress.org/plugins/employee-roster/ — check the live figures before quoting; never estimate or round up.
- No testimonials, customer logos, case studies, press or benchmarks exist. Future work must not invent them.

## Product Principles

1. **One place for the whole shift workflow.** Show how roster, attendance, leave and pay connect inside WordPress, rather than listing isolated features.
2. **Honest about plans.** Every tier claim traces to `plans.md`; the free version is presented as a real, permanent tool, not a trial.
3. **Speak to the owner first.** Lead with the manager's outcomes; give agencies the technical depth in docs.
4. **Show the real product.** Use actual screenshots and real WordPress.org figures; no fabricated proof.
