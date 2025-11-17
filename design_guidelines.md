# DVS Partners Website Design Guidelines

## Design Approach
**System**: Material Design principles with corporate B2B refinements, drawing inspiration from professional healthcare/pharma corporate sites like Pfizer, Moderna, and GSK for credibility and trust-building patterns.

**Key Principles**:
- Corporate professionalism with approachable clarity
- Information hierarchy for content-dense sections
- Trust-building through visual structure and spacing
- Clean, modern aesthetic befitting international healthcare partnerships

---

## Typography

**Font Selection**: 
- Primary: Inter or Roboto (700 for headings, 400/500 for body)
- Secondary: System fonts for data/numerical content

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- H2 (Section Headers): text-3xl md:text-4xl lg:text-5xl, font-bold
- H3 (Subsections): text-2xl md:text-3xl, font-semibold
- H4 (Card Titles): text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Small/Meta: text-sm, font-medium

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16, 20, 24**
- Section padding: py-16 md:py-24 lg:py-32
- Card/component spacing: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8

**Grid System**:
- Collaboration cards: grid-cols-1 md:grid-cols-2 gap-8
- Team members: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Features/stats: grid-cols-2 md:grid-cols-4 gap-6

---

## Component Library

**Navigation**:
- Fixed header with DVS logo (left), navigation links (center), CTA button (right)
- Height: h-20, backdrop blur effect on scroll
- Mobile: Hamburger menu with slide-out drawer

**Hero Section** (h-screen or min-h-[600px]):
- Full-width professional image (healthcare/partnership/handshake theme)
- Overlay with DVS logo prominent
- Centered content: headline + subheadline + dual CTAs
- CTAs with backdrop-blur-sm backgrounds

**About Section**:
- Two-column layout: left (overview text), right (key metrics/stats in cards)
- Metric cards: rounded-lg with icon, number, label

**Collaborations Showcase**:
- Two sections: Vaccines (4 cards), Biologicals & Pharma (4 cards)
- Partnership cards: border, rounded-lg, p-6, with company logo area, title, detailed description
- Hover: subtle elevation shadow
- Grid: 2-column on desktop, stack on mobile

**Business Model Section**:
- Clean prose layout, max-w-4xl centered
- Bullet points with custom markers
- Value proposition highlighted in bordered container

**Team Section**:
- 3-column grid (desktop), 2-column (tablet), single (mobile)
- Team cards: headshot placeholder, name, title, expandable bio
- Bio: Initially show 3-4 lines with "Read More" expansion

**Contact Section**:
- Two-column: form (left 60%), contact info/map placeholder (right 40%)
- Form fields: name, email, company, message
- Input styling: border, rounded, p-4, focus states

**Footer**:
- Three columns: Company info + logo, Quick Links, Contact details
- Newsletter signup integration
- Bottom bar: copyright, privacy links, social icons

---

## Images

**Hero Image**: Professional healthcare/business imagery - laboratory, handshake, or global partnership visualization. Full-width, high-quality stock photo suggesting innovation and collaboration. Height: 600-800px.

**Partnership Logos**: Placeholder areas in collaboration cards for partner company logos (100x60px typical size)

**Team Headshots**: Professional corporate headshots in consistent aspect ratio (1:1 or 3:4), grayscale or slight desaturation for uniformity

**Section Backgrounds**: Subtle texture or gradient overlays for visual separation between major sections

---

## Animations

Use sparingly:
- Fade-in on scroll for section headers
- Subtle scale on card hover (scale-105)
- Smooth height transition for expandable team bios
- Navigation backdrop blur on scroll

---

## Accessibility

- Semantic HTML throughout (header, nav, main, section, footer)
- ARIA labels for navigation, forms, expandable content
- Focus indicators on all interactive elements (ring-2 ring-offset-2)
- Form validation with clear error states
- Minimum touch targets: 44x44px for mobile

---

## Layout Specifications

**Section Order**:
1. Hero (full-screen with image)
2. About (two-column, py-24)
3. Collaborations - Vaccines (grid, py-20)
4. Collaborations - Biologicals/Pharma (grid, py-20)
5. Business Model (centered prose, py-24)
6. Leadership Team (grid, py-24)
7. Contact (two-column, py-20)
8. Footer

**Content Density**: Each collaboration card contains 100-150 words, team bios 200-300 words with expand functionality. Generous whitespace between sections maintains readability despite comprehensive content.