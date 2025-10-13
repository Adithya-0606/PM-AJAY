# PM Ajay Internship Scheme Platform - Design Guidelines

## Design Approach: Material Design System (Government Adaptation)

**Rationale**: This utility-focused government platform requires robust data visualization, clear information hierarchy, and consistent usability. Material Design provides excellent patterns for dashboards, maps, and data-dense interfaces while maintaining professional credibility.

## Core Design Elements

### A. Color Palette

**Primary Colors (Government Professional)**
- Primary: 220 70% 45% (Deep Blue - trust, authority)
- Primary Light: 220 60% 60%
- Primary Dark: 220 80% 30%

**Semantic Colors**
- Success (Allocated/Approved): 142 70% 40% (Green)
- Warning (Pending): 38 90% 50% (Amber)
- Error (Rejected/Issues): 0 70% 50% (Red)
- Info (In Progress): 200 80% 45% (Cyan)

**Neutral Scale**
- Background Light: 0 0% 98%
- Background Dark: 220 15% 10%
- Surface Light: 0 0% 100%
- Surface Dark: 220 15% 15%
- Border: 220 10% 85% (light mode) / 220 10% 25% (dark mode)
- Text Primary: 220 20% 10% (light) / 0 0% 95% (dark)
- Text Secondary: 220 10% 45% (light) / 220 5% 70% (dark)

**Map Visualization Colors**
- High Allocation: 220 70% 45%
- Medium Allocation: 220 50% 60%
- Low Allocation: 220 30% 75%
- No Data: 0 0% 90%

### B. Typography

**Font Stack**
- Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Monospace (data/numbers): 'JetBrains Mono', 'Fira Code', monospace

**Type Scale**
- Display: text-4xl font-bold (36px) - Dashboard headers
- H1: text-3xl font-semibold (30px) - Page titles
- H2: text-2xl font-semibold (24px) - Section headers
- H3: text-xl font-medium (20px) - Card headers
- Body Large: text-base font-normal (16px) - Main content
- Body: text-sm font-normal (14px) - Secondary content
- Caption: text-xs font-medium (12px) - Labels, metadata
- Data Display: text-lg font-mono (18px) - Numbers, statistics

### C. Layout System

**Spacing Primitives**: Consistent use of 4, 8, 16, 24, 32 units (p-1, p-2, p-4, p-6, p-8)
- Component padding: p-4 to p-6
- Section spacing: py-8 to py-12
- Card gaps: gap-4 to gap-6
- Map margins: p-6

**Grid Structure**
- Dashboard: 12-column grid with sidebar
- Sidebar: Fixed 280px (w-70) for navigation
- Main content: Flexible with max-w-7xl container
- Map section: Full-width within content area
- Data cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

### D. Component Library

**Navigation**
- Top Bar: Government branding, user profile, notifications (h-16, fixed)
- Sidebar: Collapsible navigation with active state indicators, icons + labels
- Breadcrumbs: Location context below top bar

**Dashboard Components**
- Stat Cards: Elevated cards (shadow-md) showing key metrics with icons, large numbers, trend indicators
- Data Tables: Sortable, filterable with pagination, zebra striping, row hover states
- GIS Map Container: Full-height interactive map with custom controls, search, and region selector
- Region Info Panel: Slide-out panel triggered by map clicks, showing detailed allocation data

**Communication Interface**
- Message Thread: Chat-like interface with sender/receiver distinction, timestamps, read receipts
- Notification Center: Dropdown with categorized updates, unread badges
- Action Buttons: Floating action button for new messages/requests

**AI Summary Component**
- Summary Card: Distinct background (surface variant), AI icon indicator, collapsible details
- Key Points: Bullet format with icons for quick scanning
- Data Highlights: Inline stat chips within summary text

**Forms & Inputs**
- Input Fields: Outlined style with floating labels, helper text below
- Select Dropdowns: Material-style with search capability for long lists
- File Upload: Drag-drop zone with progress indicators
- Action Buttons: Primary (filled), Secondary (outlined), Text-only hierarchy

**Map Interactions**
- Region Boundaries: Stroke with state-based fills (hover, selected, default)
- Info Markers: Custom pins for special projects/locations
- Legend: Fixed position with color coding explanation
- Zoom Controls: Custom styled, positioned top-right
- Search Bar: Overlay at top-left for location/region search

**Data Visualization**
- Progress Bars: Linear indicators for fund utilization
- Donut Charts: Small multiples for allocation breakdowns
- Timeline: Horizontal project milestone tracker
- Comparison Tables: Side-by-side EA vs IA data

### E. Visual Hierarchy & Structure

**Dashboard Layout**
1. Top Bar: Logo, scheme name, global search, profile (sticky)
2. Stat Cards Row: 4 key metrics across top (Total Funds, Active Projects, EAs, IAs)
3. Main GIS Map: 60% width, full viewport height minus header, with interactive controls
4. Right Panel (40%): AI Summary at top, Recent Communications below, Quick Actions at bottom
5. Below Map: Data Tables and detailed reports in tabbed interface

**Map-First Approach**
- Map is the primary interface element, not a supplementary feature
- Region selection triggers all contextual data display
- Color-coded regions immediately convey allocation status
- Click interaction shows detailed popup with GIA breakdown

**Information Density**
- Use card-based layouts to chunk complex information
- Implement progressive disclosure: summary first, details on demand
- Data tables with inline expand/collapse for additional details
- Tooltip on hover for abbreviated information

## Images

**No Traditional Hero Image**: This is a functional dashboard, not a marketing site. Lead directly with the interactive map and dashboard controls.

**Icon System**: Material Icons for consistency across navigation, actions, and data visualization

**Map Tiles**: Use OpenStreetMap or MapBox for GIS base layer with custom overlays for administrative boundaries

**Avatar Images**: For user profiles in communication threads and top bar (circular, 32px-40px)

## Critical Design Principles

1. **Data Accessibility**: All numbers, charts, and maps must be screen-reader compatible with ARIA labels
2. **Action Clarity**: Every interactive element has clear affordance (hover states, active states)
3. **Responsive Map**: GIS map adjusts gracefully on tablets (stacked layout below 1024px)
4. **Loading States**: Skeleton screens for map loading, shimmer effects for data fetching
5. **Error Handling**: Inline error messages with icons, toast notifications for system alerts
6. **Trust Indicators**: Government seal/logo, secure connection badges, last updated timestamps