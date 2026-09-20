---
name: Maritime & Merchant Navy Training Ecosystem
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#43474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777d'
  outline-variant: '#c3c7cd'
  surface-tint: '#4c6075'
  primary: '#000f1d'
  on-primary: '#ffffff'
  primary-container: '#0f2537'
  on-primary-container: '#788da3'
  inverse-primary: '#b3c9e0'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#6ae1ff'
  on-secondary-container: '#006374'
  tertiary: '#260000'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f0100'
  on-tertiary-container: '#e65f4b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5fd'
  primary-fixed-dim: '#b3c9e0'
  on-primary-fixed: '#061d2f'
  on-primary-fixed-variant: '#34495c'
  secondary-fixed: '#adecff'
  secondary-fixed-dim: '#5dd6f3'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5d'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410100'
  on-tertiary-fixed-variant: '#8a1c10'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
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
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
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
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system establishes an authoritative, reliable, and technologically disciplined environment tailored for maritime academies, fleet operators, and naval training administrators. The aesthetic combines modern technical minimalism with the functional rigor of maritime bridge instrumentation and naval logbooks. 

Visual design is guided by structured precision: crisp divider lines evoke navigation charts and plotting grids, while deep abyssal tones establish structural authority. The emotional response must evoke uncompromising trust, certified compliance, clear operational awareness, and sea-ready readiness under high-density workflows.

## Colors
The palette grounds itself in deep oceanic abyssal blues, balancing naval discipline with high-contrast accessibility:

- **Primary (`#0F2537`)**: Deep Naval Slate. Dictates primary brand identity, navigation sidebars, high-level headers, and high-emphasis controls. Provides stable contrast against content layers.
- **Secondary (`#00A3BF`)**: Coastal Teal. Highlights active telemetry, maritime simulator tracking, interactive selections, progress meters, and primary focal highlights.
- **Tertiary (`#E05A47`)**: Maritime Signal Amber/Coral. Dedicated to critical life-safety compliance alerts, expiring mariner certifications, radar anomalies, and critical system faults.
- **Neutral Canvas (`#F8FAFC`)**: Crisp Pale Slate. Forms the ambient foundation, offering a glare-free canvas that keeps dense operational grids and multi-tier tables fatigue-free over prolonged bridge and administrative shifts.

All color pair choices meet WCAG AAA text contrast standards (7:1 ratio minimum for regular text against pure white containers and deep primary surfaces).

## Typography
The system uses Plus Jakarta Sans for high-level structure, headers, metric callouts, and institutional displays to convey modernity and executive prestige. Inter is applied across all body copy, forms, table matrices, and technical labels to ensure extreme legibility and optical stability under dense numerical tracking.

Tabular figures (`tnum`) and slashed zeroes must be enabled on all numerical records, engine telemetry, cadet STCW certification codes, and coordinate tracking interfaces to prevent layout shifts during live data feeds.

## Layout & Spacing
A fluid 12-column structural grid underpins the desktop viewport (min-width 1280px), transitioning to an 8-column layout on tablets (768px - 1279px) and a single-column stacked layout on mobile viewports (<768px). 

The admin layout follows a persistent vertical command rail (64px collapsed, 260px expanded) docked to the left, with an auxiliary real-time telemetry/fleet summary dock on the right when viewing vessel operations. Data-heavy views utilize micro-spacing principles: compact rows, tight internal cell padding (`space-xs` and `space-sm`), and consistent `space-md` gaps between structural cards to maximize screen real estate.

## Elevation & Depth
Elevation abandons heavy drop-shadows in favor of low-contrast technical outlines and tonal stacking reminiscent of marine chart overlays and clean nautical displays:

- **Level 0 (Base Canvas)**: Background rendered in `#F8FAFC`.
- **Level 1 (Surface Containers & Tables)**: Pure white `#FFFFFF` cards bounded by a crisp 1px perimeter border of `#E2E8F0`. No shadow is used at this level.
- **Level 2 (Dropdowns, Floating Overlays, Filter Sheets)**: Pure white `#FFFFFF` backed by an ultra-subtle tinted ambient shadow: `0 4px 16px -2px rgba(15, 37, 55, 0.08)`, framed by a 1px border of `#CBD5E1`.
- **Level 3 (Modal Dialogs, Emergency Halt Confirmation)**: Centered structural dialogs backed by a 50% opacity primary blue wash (`rgba(11, 25, 44, 0.5)` with 4px backdrop blur) and elevated via `0 12px 32px -4px rgba(15, 37, 55, 0.16)`.

## Shapes
A "Soft" corner system (`roundedness: 1` — base radius of `0.25rem` / 4px) gives components a sharp, crisp profile that complements nautical instruments and structural forms.

Component enclosures avoid high-radius roundness to prevent wasted border space in dense analytical matrices. Buttons, badges, and card boundaries use 4px (`rounded`), while larger modal windows and main content containers step up to 8px (`rounded-lg`). Micro status dots and radio selection markers remain pure circles (`rounded-full`).

## Components

### Buttons
- **Primary Button**: Background `#0F2537`, text `#FFFFFF`, 4px border radius. Hover states shift to `#1A3B56` with smooth 150ms transitions.
- **Accent Action**: Background `#00A3BF`, text `#FFFFFF`. Reserved for primary affirmative actions (e.g., "Dispatch Cadets", "Endorse STCW Certificate").
- **Outline / Ghost Button**: 1px border `#CBD5E1`, text `#0F2537`, background transparent; hover triggers background `#F1F5F9`.

### Dense Data Tables
- Header row styled in `#F1F5F9` with uppercase `label-sm` tracking (`#475569`).
- Row borders utilize hairline `1px solid #E2E8F0`. Hover state triggers `#F8FAFC`.
- Cells maintain strict vertical alignment with tabular numeral formatting on all nautical miles, simulator hours, and timestamps.

### Badges & Status Chips
- Height set to a compact 20px, featuring 2px corner radius and uppercase `label-sm` font.
- **Certified / Compliant**: `#E6FFFA` background, `#047857` text, `#A7F3D0` border.
- **In Training / At Sea**: `#E0F2FE` background, `#0369A1` text, `#BAE6FD` border.
- **Expiring / Non-Compliant**: `#FEF2F2` background, `#B91C1C` text, `#FECACA` border.

### Input Fields & Controls
- Form inputs feature a 36px standard height, 1px border `#CBD5E1`, and `#FFFFFF` background.
- Focus rings display a 2px offset ring in `#00A3BF`.
- Checkboxes and radio selectors use custom SVG check/bullet marks rendered in crisp `#00A3BF` on active state.

### Specialized Maritime Components
- **STCW Compliance Matrix Card**: Visual cards featuring split progress bars indicating maritime simulator completions, survival craft proficiencies, and sea-time accruals.
- **Watch Schedule Timeline**: Compact Gantt strip utilizing `#0F2537` and `#00A3BF` tracks displaying naval watch rotations across cadet cohorts.