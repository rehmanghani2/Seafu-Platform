---
name: Maritime Operations Control
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#4d5f7b'
  on-secondary: '#ffffff'
  secondary-container: '#cbdefe'
  on-secondary-container: '#4f627d'
  tertiary: '#004870'
  on-tertiary: '#ffffff'
  tertiary-container: '#006194'
  on-tertiary-container: '#b2d9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#b5c8e7'
  on-secondary-fixed: '#071c34'
  on-secondary-fixed-variant: '#354862'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies deep maritime authority combined with high-density enterprise operations. It is tailored for maritime academies, training centers, and maritime administrative bodies managing mission-critical workflows: STCW certifications, batch allocations, CDC/INDoS record verifications, seat capacities, and regulatory compliance.

The visual style blends **Corporate Modern** with **Technical High-Density SaaS**:
- **Tone:** Authoritative, disciplined, accurate, and unyielding. It evokes navigational command bridges, precision nautical instrumentation, and stringent international maritime regulations (IMO, DG Shipping, USCG).
- **Aesthetic Principles:**
  - Crisp, structural boundary lines inspired by nautical cartography and radar graticules.
  - High information density without visual clutter, prioritizing data legibility and operational speed.
  - Calm oceanic foundations punctuated by unmistakable regulatory signals (Emergency Amber, Compliant Emerald, Navigational Cyan).

## Colors

The palette is engineered around high maritime contrast, balancing deep abyss blues with utilitarian slate canvases and crisp functional states.

### Core Roles
- **Primary (`#1D4ED8`):** Deep oceanic blue for primary actions, selected navigation items, active tab highlights, and focused interactive states.
- **Secondary / Depth (`#091E36`):** Command bridge deep navy used for sidebar navigation, header bars, authoritative metric cards, and heavy modal framing.
- **Tertiary / Accent (`#0284C7`):** Radar cyan for real-time live telemetry, indicator pings, telemetry filters, and sub-metric focus.
- **Neutral Base (`#0F172A`):** Deep charcoal navy for dominant typography, ensuring razor-sharp legibility over light slate backdrops.

### Operational Surfaces
- **Canvas Base:** `#F8FAFC` (Slate 50) prevents ocular fatigue during protracted deckhand watch and registrar shifts.
- **Card & Data Containers:** `#FFFFFF` with deliberate `#E2E8F0` hairline borders.
- **Sub-surfaces & Table Row Alternations:** `#F1F5F9` (Slate 100).

### Regulatory & Status Tokens
- **Regulatory Emerald (`#059669`):** Mandatory compliance states, STCW Approved statuses, DG Shipping validated seals.
- **Nautical Amber (`#D97706`):** Seat limits, expiring cadet documents, pending vessel endorsements, flagged inspections.
- **Critical Red (`#DC2626`):** Disqualified credentials, batch capacity overflows, license revocation, invalid medical fitness entries.

## Typography

The typographic hierarchy pairs **Plus Jakarta Sans** for clear structural headings with **Inter** for dense transactional interfaces and data tables.

### Rules of Usage
- **Tabular Figures (`tnum`):** All tabular data, INDoS numbers, CDC registry codes, batch capacities, dates, and financial metrics must use OpenType tabular numerals (`font-feature-settings: "tnum" 1, "cv05" 1`) to ensure vertical column alignment across rows.
- **Code Tabular:** Dedicated to maritime identifiers (e.g., `INDoS: 16EL9402`, `IMO: 9241061`, `CDC: MUM-109282`). Rendered with slight tracking and medium weights to eliminate character ambiguity (distinguishing `0` vs `O`, `1` vs `I`).
- **Caps Hierarchy:** Section labels, table headers, and credential status badges use uppercase tracking (`letter-spacing: 0.04em` to `0.06em`) in `label-sm` to maintain legibility under compact density.

## Layout & Spacing

This system implements a dense 12-column fluid grid system paired with strict 4px/8px incremental rhythm:

### Layout Rhythm
- **Fixed Sidebar + Fluid Workspace:** Desktop layouts utilize a fixed 260px command sidebar navigation with collapsible rail state (64px) for high-density radar/charting workflows.
- **Work Area Grids:** Divided into 12 columns with compact 16px (`gutter`) gaps on operational screens and 24px (`gutter-desktop`) gaps on executive reporting dashboards.
- **Canvas Margins:** Fixed at 32px (`margin-desktop`) padding on monitors over 1440px, scaling down to 24px (`margin-tablet`) at tablet viewports, and 16px (`margin`) on mobile screens.

### Responsive Breakpoints
- **Mobile (< 768px):** Stack data grids into card list format. Bottom navigation bar replaces the command sidebar. Off-canvas drawer covers 100% viewport width.
- **Tablet (768px – 1024px):** Command sidebar collapses to icons-only rail (64px). Metrics display in a 2x2 grid. Data tables enforce horizontal pinning for cadet ID and primary status columns.
- **Desktop (1025px+):** Full 12-column span, multi-pane split screens (Batch List on left 5 columns, Selected Candidate & CDC Dossier on right 7 columns).

## Elevation & Depth

This system avoids floating, whimsical drop shadows in favor of **low-contrast outlines** complemented by **tonal layering** and **precise hairline borders**, maintaining the rigor of physical nautical navigation panels.

### Surface Tiers
- **Surface Level 0 (Underlay):** `#091E36` used for maritime shell sidebars and global top banners.
- **Surface Level 1 (Base Viewport):** `#F8FAFC` providing consistent slate neutrality.
- **Surface Level 2 (Cards, Data Panels, Modules):** Pure `#FFFFFF` enclosed by a 1px solid border of `#E2E8F0`.
- **Surface Level 3 (Floating Menus, Flyout Drawers, Context Panels):** Pure `#FFFFFF` bordered with `#CBD5E1` and anchored by an ambient technical shadow: `0 8px 24px -4px rgba(9, 30, 54, 0.08), 0 2px 6px -1px rgba(9, 30, 54, 0.04)`.

### Border Integrity
Separators, row dividers, and input borders strictly follow `1px solid #E2E8F0`. When an element gains focus or becomes active, avoid expanding border dimensions; transition the border color directly to `#1D4ED8` with a 2px offset ring of `rgba(29, 78, 216, 0.15)`.

## Shapes

The design system adopts a **Soft (1)** shape language. The subtle radius reinforces precision engineering and data density, balancing structural rectilinearity with modern ergonomics.

### Corner Radius Standards
- **Base Components (Inputs, Buttons, Badges, Table Cells):** `0.25rem` (4px). Keeps interface compact and avoids wasted whitespace at corners.
- **Medium Panels (Cards, Alert Modules, Metric Tiles):** `0.5rem` (8px). Delivers clear visual grouping without appearing bubbly.
- **Overlays (Modals, Slide-out Drawers):** `0.75rem` (12px) on desktop viewports.
- **Status Pills & Telemetry Dots:** Fully circular/pill-shaped (`9999px`) exclusively for state badges, avatars, and verification indicators.

## Components

### Buttons
- **Primary:** Solid `#1D4ED8` background, `#FFFFFF` text, `4px` radius. Hover: `#1E40AF`. Active: `#172554`. Height: 36px (dense) or 40px (standard). Padding: 12px horizontal.
- **Secondary:** Deep Navy outline or subtle surface (`#F1F5F9` background with `#091E36` text). Border: 1px `#CBD5E1`.
- **Destructive:** Bordered or solid `#DC2626` for seat cancellations, batch aborts, or compliance rejections.

### High-Density Data Tables
- **Header:** Height 36px, background `#F8FAFC`, bottom border 1px `#CBD5E1`. Text in `label-sm` uppercase `#64748B`.
- **Row:** Height 44px (default) or 36px (compact). Bottom border 1px `#E2E8F0`. Hover state `#F1F5F9`.
- **Pinned Columns:** Candidate Name and Maritime ID (CDC/INDoS) stay frozen during horizontal scroll with a subtle vertical boundary shadow on the separator edge.

### Status Badges & Credential Tags
Pill format (`9999px` radius) with 2px vertical by 8px horizontal padding, utilizing `label-sm`:
- **STCW Approved / DG Shipping Validated:** `#ECFDF5` background, `#047857` text, 1px solid `#A7F3D0`. Includes a 6px solid emerald dot.
- **Batch Active:** `#EFF6FF` background, `#1D4ED8` text, 1px solid `#BFDBFE`.
- **Waitlisted / Seat Nearing Capacity:** `#FFFBEB` background, `#B45309` text, 1px solid `#FDE68A`.
- **Expired / Medical Hold:** `#FEF2F2` background, `#B91C1C` text, 1px solid `#FECACA`.

### Capacity Progress Meters
- Used for batch seat enrollments (e.g., 24/30 Cadets Enrolled).
- Track: 6px height, 9999px radius, background `#E2E8F0`.
- Indicator: Dynamic color transition. Below 75%: `#1D4ED8`; 75%-95%: `#0284C7`; 100%: `#059669`; Over-subscribed: `#DC2626`.

### Metrics Cards with Sparklines
- Enclosed white panel with 8px radius and `#E2E8F0` border.
- Layout: Top row displays micro-label and contextual time frame; middle row features large `headline-md` tabular figure; bottom row pairs percentage change indicator with an integrated 32px height sparkline rendered in primary blue or radar cyan.

### Modal Drawer Panels (Cadet & Vessel Verification Dossier)
- Anchored to the right viewport border, occupying 560px width.
- Header: `#091E36` dark maritime navy surface with white text, providing visual separation for official record verification.
- Content: Two-column key-value grid for biometric data, sea-time log hours, and scanned document previews.