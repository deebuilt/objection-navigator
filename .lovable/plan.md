

## Objection Helper — Implementation Plan

### Overview
A mobile-first, PWA-ready single-page app that helps service business owners quickly find natural responses to common client objections. No backend, no AI — just curated content with fast access.

### 1. Setup & Dependencies
- Install Ant Design (`antd`, `@ant-design/icons`)
- Install `vite-plugin-pwa`
- Remove Tailwind CSS (config, PostCSS, index.css directives, tailwind classes throughout)
- Remove shadcn/ui components (entire `src/components/ui/` folder)
- Switch routing to `HashRouter`

### 2. Data Layer
- Create `src/data/objections.ts` with a curated library of 12+ objections, each with:
  - ID, label, keywords, supported contexts
  - 2–4 responses per objection per context (cold call, text, email, in person, follow-up)
  - Each response has: text, tone label (Direct / Soft / Reframe / Curious / Value-focused)
- All responses written in natural, practical language for service business owners — no sales guru fluff

### 3. Theme & Styling
- Custom Ant Design theme with a warm, refined palette (not default blue SaaS)
- Light and dark mode via Ant Design's `ConfigProvider` + `theme.algorithm`
- Theme toggle in header, preference saved to localStorage
- All styling via Ant Design components + CSS modules or inline styles (no Tailwind)
- Editorial feel: strong typography, generous spacing, card-based layout

### 4. App Structure (Single Page + Privacy Route)

**Header/Hero**
- App title "Objection Helper" with subtitle
- Subtle icon/graphic accent for visual identity
- Theme toggle button

**Search Bar**
- Keyword input at top, filters objections in real-time

**Objection Picker**
- Scrollable card/list layout of objection categories
- Tapping an objection selects it and scrolls to responses

**Context Selector**
- Segmented control or pill buttons: Cold call, Text, Email, In person, Follow-up
- Selection affects response wording

**Response Output**
- 2–4 response cards per objection+context combo
- Each card shows: response text, tone label badge, Copy button, Save/favorite button
- Smooth transitions when switching objections or contexts
- Copy uses clipboard API with toast feedback

**Favorites Section**
- Slide-up drawer or collapsible section showing saved responses
- Stored in localStorage, no account needed

### 5. Privacy Page
- Simple page at `#/privacy` stating no data collection, local-only storage, no accounts

### 6. PWA Setup
- `vite-plugin-pwa` configured per spec (autoUpdate, devOptions disabled, navigateFallbackDenylist)
- Manifest with app name, icons, standalone display, theme colors
- Generate placeholder PWA icons (192×192, 512×512) in `/public`
- Service worker registration guard in `main.tsx` (iframe + preview host detection)
- Proper meta tags in `index.html`

### 7. Mobile-First Design
- Designed for 375px viewport, scales up gracefully
- 44px minimum touch targets
- No horizontal scrolling
- Responsive card layouts

