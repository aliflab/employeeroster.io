<p align="center">
  <img src="assets/brand/only-logo-transparent_300px.png" alt="Employee Roster" width="140">
</p>

<h1 align="center">Employee Roster</h1>

<p align="center">
  <strong>WordPress shift scheduling &amp; staff rostering — self-hosted, no SaaS fees, no per-user costs.</strong>
</p>

<p align="center">
  <img alt="WordPress 5.8+" src="https://img.shields.io/badge/WordPress-5.8%2B-3DBDA8">
  <img alt="PHP 7.4+" src="https://img.shields.io/badge/PHP-7.4%2B-1E2D3D">
  <img alt="License GPL-3.0" src="https://img.shields.io/badge/license-GPL--3.0-blue">
  <a href="https://wordpress.org/plugins/employee-roster/"><img alt="WordPress.org" src="https://img.shields.io/badge/WordPress.org-Download%20Free-21759B"></a>
</p>

---

Schedule shifts, track attendance, manage leave, and run payroll entirely inside WP Admin.

Employee Roster is a complete staff rostering system that runs on your own WordPress install. There
are no external APIs, no third-party accounts, and no monthly per-seat costs — every shift,
timesheet, and leave record stays in your own database.

- 🔒 **Self-hosted** — your data never leaves your server
- ⚡ **No external APIs** — zero SaaS dependency
- 👥 **Unlimited employees** on every plan, including the free version
- 🧩 **Frontend portal** — staff never need to see WP Admin if you don't want them to

**[Documentation](https://employeeroster.io/docs)** ·
**[Website](https://employeeroster.io/)** ·
**[Blog](https://employeeroster.io/blog/)** ·
**[Free download](https://wordpress.org/plugins/employee-roster/)**

---

## Screenshots

| | |
|---|---|
| <img src="assets/brand/screenshots/1_roster_calendar.png" alt="Weekly roster calendar"> <br> **Weekly roster** | <img src="assets/brand/screenshots/2_monthly_calendar.png" alt="Monthly calendar view"> <br> **Monthly calendar** |
| <img src="assets/brand/screenshots/3_shift_creation.png" alt="Shift creation modal"> <br> **Creating a shift** | <img src="assets/brand/screenshots/4_manager_dashboard.png" alt="Manager dashboard"> <br> **Manager dashboard** |
| <img src="assets/brand/screenshots/5_leave_request.png" alt="Leave request workflow"> <br> **Leave requests** | <img src="assets/brand/screenshots/6_punchinout.png" alt="Clock in and out"> <br> **Clock in / clock out** |

---

## Features

Items marked `Starter+` or `Professional+` require a paid licence; everything else is in the free
WordPress.org build. See [Plans](#plans--pricing) for the full matrix.

### Shift scheduling

- Create shifts with **direct assignment** or as **open slots** staff claim themselves
- Day, week, and month roster views
- **Open Shifts** — employees self-assign up to the slot limit, with optional manager approval `Starter+`
- **Copy Roster** — rebuild next week from an existing week in one action `Starter+`
- Edit and delete shifts, with automatic notification when timings change
- No cap on the number of active shifts on any plan

### Attendance & time tracking

- Clock in / clock out from WP Admin or the frontend portal `Starter+`
- Break deductions and shift linking
- One active session per user enforced
- Managers can edit or correct any attendance record `Starter+`
- Optional self-clock setting to control who may clock themselves in `Starter+`

### Leave & requests

- Annual and sick leave requests with a manager approval workflow `Starter+`
- **Leave balances** — entitlements auto-accrue per job type through the year, with manual adjustment `Starter+`
- **Shift swap requests** — employees nominate an optional target and reason; assignments update automatically on approval `Professional+`
- **Open shift requests** — approve or decline claims on open slots `Starter+`

### Timesheets & payroll

- Weekly timesheet summaries with hours worked
- Pay rate calculations and earnings `Starter+`
- **Weekend penalty rates** — Saturday (default 25%) and Sunday (default 50%) multipliers applied automatically `Starter+`
- Tax calculation with a configurable rate `Professional+`
- **Daily labour budget** with per-day targets `Professional+`
- Weekly hour limits per job type — full-time 38h, part-time 24h, casual unlimited (limits are configurable on every plan; over-limit warnings are `Starter+`)

### Staff availability

- Weekly recurring availability with day-level time ranges
- Availability hints (`Available` / `Unavailable` / `Not Set`) shown inline in the shift assignment modal

### Staff management

- Add and edit staff, with a full onboarding welcome email `Starter+` (the free build sends a simplified welcome without credentials)
- **Skill tags** — e.g. Barista, First Aid, Forklift Licence — shown on profiles, in the assignment modal, and as a roster filter `Professional+`
- **Deactivation** — hide from the roster, revoke frontend access, and cancel pending leave and swap requests; reactivating sends a fresh welcome email
- **Job sheet attachments** — PDF/JPG/PNG up to 2 MB per shift `Professional+`

### Dashboard, analytics & exports

- Analytics dashboard `Starter+`
- Employees can export their own timesheet to CSV (free, client-side)
- Staff directory and team timesheet CSV export `Starter+`
- **Print roster** — colour-coded, print-ready roster straight from the manager toolbar via the browser print dialog (print to PDF from there) `Professional+`

### Email notifications

Plain-text emails sent through `wp_mail()`, available on **every** version including free:

- Welcome email for new accounts
- Shift assignment email
- Shift timing change email
- Leave decision (approved / rejected) email

### Frontend employee portal

Five shortcode-driven pages created automatically on activation, so staff can work entirely outside
WP Admin. See [Shortcodes](#shortcodes).

### Roles & access

- Three custom roles — Roster Manager, Roster Supervisor, Roster Employee
- Per-administrator visibility control and admin inclusion settings
- Roster users see only the EmpRoster menu; other menus, dashboard widgets, and plugin notices are hidden, and they are redirected to the EmpRoster dashboard on login
- **Profile Mode** — blocks employee and supervisor WordPress logins entirely while keeping email notifications active `Starter+`

### Security

- **Employee login logs** — successful logins, logouts, and failed attempts, with IP address, device detection, filters by event type / date / staff, and configurable auto-delete retention `Professional+` (off by default)

---

## Requirements

| Component | Requirement |
|---|---|
| WordPress | 5.8 or later (tested up to 7.0) |
| PHP | 7.4 or later |
| MySQL / MariaDB | No plugin-specific minimum — whatever your WordPress version requires |
| External services | None. All data is stored in your own WordPress database. |

> The free and premium versions have identical requirements — upgrading to a paid plan does not
> require a newer version of WordPress or PHP.

---

## Installation

1. Upload the `emp-roster` folder to `/wp-content/plugins/`, or install the ZIP through
   **Plugins → Add New → Upload Plugin**.
2. Activate the plugin via **Plugins → Installed Plugins**.
3. On activation the plugin automatically:
   - Creates **8 custom database tables** — `shifts`, `assignments`, `leave`, `attendance`,
     `availability`, `swap_requests`, `leave_balances`, `login_logs`
   - Registers the roster roles `emr_manager`, `emr_supervisor`, and `emr_employee` on paid plans
     (the free WordPress.org build registers `emr_employee` only)
   - Seeds default settings, one department (**General Department**) and one location
     (**Main Location**)
   - Creates 5 WordPress pages pre-loaded with the frontend portal shortcodes
4. The **setup wizard** opens automatically the first time an administrator visits an EmpRoster
   screen — company details, locations, departments, employment types, leave, and key features.
   Re-run it any time from **EmpRoster → Settings → Setup Wizard**.
5. Add your staff at **EmpRoster → Staff → + Add Staff**, then create your first shift at
   **EmpRoster → Shifts → + New Shift**.

---

## Shortcodes

The five portal pages are created for you on activation; their addresses are listed under
**Settings → Frontend Pages**. The free build registers 3 shortcodes, premium registers 5.

| Page | Shortcode | Plan | Purpose |
|---|---|---|---|
| EmpRoster – Dashboard | `[empr_dashboard]` | Free | Upcoming shifts and hours at a glance |
| EmpRoster – My Shifts | `[empr_shifts]` | Free | Their roster for the week |
| EmpRoster – Availability | `[empr_availability]` | Free | Set the days and hours they can work |
| EmpRoster – Leave | `[empr_leave]` | `Starter+` | Submit leave and track requests |
| EmpRoster – Clock In/Out | `[empr_attendance]` | `Starter+` | Clock in and out, and view history |

### Public roster `Professional+`

Embed a read-only, print-friendly weekly roster on any public page — no login required. Enable it
first at **EmpRoster → Settings → Integrations & Public View → Weekly Roster Shortcode**, then:

```
[emp_roster_weekly]
[emp_roster_weekly week="2026-08-03"]
```

The `week` attribute takes any date inside the week you want to display; omit it to show the
current week.

---

## Roles & capabilities

| Role slug | Display name | Access |
|---|---|---|
| `emr_manager` | **Roster Manager** | Full roster management: create/edit/delete shifts, assign staff, manage staff accounts, approve leave and requests, edit attendance, manage settings, view payroll |
| `emr_supervisor` | **Roster Supervisor** | Read-only elevated role. Sees the whole roster, all staff, attendance and analytics, and can submit their own leave, swap and open-shift requests — but cannot create shifts, assign people, or approve anything |
| `emr_employee` | **Roster Employee** | View own shifts, clock in/out, submit leave, set availability, claim open shifts |

### Capabilities

| Capability | Granted to |
|---|---|
| `emr_view_own_shifts` | All roles |
| `emr_clock_in_out` | All roles |
| `emr_submit_leave` | All roles |
| `emr_manage_availability` | All roles |
| `emr_request_swap` | All roles |
| `emr_view_all_staff` | Manager, Supervisor, Admin |
| `emr_view_all_shifts` | Manager, Supervisor, Admin |
| `emr_view_reports` | Manager, Supervisor, Admin |
| `emr_manage_shifts` | Manager, Admin |
| `emr_approve_leave` | Manager, Admin |
| `emr_edit_attendance` | Manager, Admin |
| `emr_manage_settings` | Manager, Admin |

**Rules:**

- Capabilities are independent of plan gating — a capability grants access to a screen; the plan
  decides whether the feature behind it is present at all.
- Only a WordPress administrator can create, promote, demote or deactivate a Manager account, or
  reset a manager's password.
- Nobody can change their own role.

---

## Plans & pricing

Annual, per-site licences. One payment per year, no per-user fees, ever. Every paid plan includes a
**14-day free trial with no credit card required**.

| | **Free** | **Starter** | **Professional** | **Business** |
|---|---|---|---|---|
| Price | $0 | $99/yr | $199/yr | $599/yr |
| Sites | Unlimited | 1 | 1 | 5 |
| Shifts, departments, locations, employees | Unlimited | Unlimited | Unlimited | Unlimited |
| Day / week / month roster views | ✅ | ✅ | ✅ | ✅ |
| Staff availability & hints | ✅ | ✅ | ✅ | ✅ |
| Email notifications | ✅ | ✅ | ✅ | ✅ |
| Staff deactivation & reactivation | ✅ | ✅ | ✅ | ✅ |
| Manager & Supervisor roles | ❌ | Supervisor only | ✅ | ✅ |
| Open shifts & copy roster | ❌ | ✅ | ✅ | ✅ |
| Clock in / out & attendance management | ❌ | ✅ | ✅ | ✅ |
| Leave requests, approval & balances | ❌ | ✅ | ✅ | ✅ |
| Payroll & weekend penalty rates | ❌ | ✅ | ✅ | ✅ |
| Analytics dashboard | ❌ | ✅ | ✅ | ✅ |
| Staff & team CSV export | ❌ | ✅ | ✅ | ✅ |
| Profile Mode | ❌ | ✅ | ✅ | ✅ |
| Shift swap requests | ❌ | ❌ | ✅ | ✅ |
| Skill tags | ❌ | ❌ | ✅ | ✅ |
| Tax & daily labour budget | ❌ | ❌ | ✅ | ✅ |
| Supervisor pay-rate visibility | ❌ | ❌ | ✅ | ✅ |
| Job sheet attachments | ❌ | ❌ | ✅ | ✅ |
| Public roster shortcode | ❌ | ❌ | ✅ | ✅ |
| Employee login logs | ❌ | ❌ | ✅ | ✅ |
| Print roster | ❌ | ❌ | ✅ | ✅ |
| Support | Community forum | Email (72 hr) | Email (24 hr) | Priority (same day) |
| Updates | Security only | 1 year | 1 year | 1 year |

> **Business and Professional include the same features.** Business simply covers more sites per
> licence (5 instead of 1) — there is no Business-only functionality.

### Staff account limits

| Role | Free | Starter | Professional | Business |
|---|---|---|---|---|
| Roster Employee | Unlimited | Unlimited | Unlimited | Unlimited |
| Roster Supervisor | Role not registered | 2 | Unlimited | Unlimited |
| Roster Manager | Role not registered | Not assignable — use Admin Visibility instead | Unlimited | Unlimited |

Existing staff are retained on downgrade, and managers created while on Professional keep the role
if the site later drops to Starter.

**Buy:** [Starter](https://checkout.freemius.com/plugin/28057/plan/46315/) ·
[Professional](https://checkout.freemius.com/plugin/28057/plan/46316/) ·
[Business](https://checkout.freemius.com/plugin/28057/plan/46317/) ·
[Start a free Professional trial](https://checkout.freemius.com/plugin/28057/plan/46316/?trial=free)

---

## Developer notes

- **Tables** are created with the site's `$wpdb` prefix followed by `emr_` (8 tables, listed under
  [Installation](#installation)).
- **No outbound HTTP.** The plugin calls no external APIs; all data stays in the WordPress
  database. Email goes through `wp_mail()`, so it uses whatever mailer the site already has.
- **Local tier testing** — force a plan without a licence by defining the constant in
  `wp-config.php`:

  ```php
  define( '***REDACTED***', 'starter' ); // 'starter' | 'professional' | 'business'
  ```

  (`***REDACTED***` is kept as a legacy shim.)
- **Free vs premium builds are physically different ZIPs.** Premium code is absent from the
  WordPress.org build rather than gated at runtime, so "not in free" means genuinely not shipped.

---

## Support & links

- 📖 Documentation — <https://employeeroster.io/docs>
- ✉️ Support — <support@employeeroster.io>
- 🌐 Website — <https://employeeroster.io/>
- ✍️ Blog — <https://employeeroster.io/blog/>
- ⬇️ Free download — <https://wordpress.org/plugins/employee-roster/>
- 🔐 [Privacy Policy](https://employeeroster.io/privacy) · [Terms](https://employeeroster.io/terms)

---

## License

Released under the **GNU General Public License v3.0**. See [LICENSE](LICENSE) for the full text.

Employee Roster is an independent WordPress plugin.
