# DVS Partners - Corporate Website

## Overview
Professional corporate website for DVS Partners, a healthcare business development company specializing in Vaccines, Biologicals, and Pharmaceuticals. The website showcases their expertise, strategic partnerships, business model, and leadership team.

## Current State
- **Status**: Phase 1 Complete (Frontend) - Schema and all React components built
- **Next Phase**: Backend implementation (contact form endpoint)
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Express.js

## Project Architecture

### Frontend Structure
- **Single-page application** with smooth scroll navigation
- **Sections**:
  1. Hero - Full-screen introduction with company value proposition
  2. About Us - Company overview and key highlights
  3. Collaborations - Comprehensive showcase of Vaccines and Biologicals/Pharma partnerships
  4. Business Model - Simple, clear explanation of DVS's approach
  5. Leadership Team - Detailed bios for 5 partners/advisors with expandable content
  6. Contact - Professional contact form with validation
  7. Footer - Quick links and company information

### Design System
- **Primary Color**: Navy blue (hsl(210, 85%, 35%)) - matching DVS logo
- **Typography**: Inter font family for professional, corporate aesthetic
- **Components**: Built with shadcn/ui for consistency and accessibility
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Animations**: Subtle fade-in effects and hover states for polish

### Key Features
- Smooth scroll navigation between sections
- Mobile-responsive hamburger menu
- Expandable team member bios (Read More/Less)
- Form validation with Zod schemas
- Professional corporate aesthetic matching DVS brand identity

## Data Model

### Contact Form Schema
```typescript
{
  name: string (min 2 chars)
  email: string (valid email)
  company: string (min 2 chars)
  message: string (min 10 chars)
}
```

## Content Structure

### Vaccines Partnerships (4)
1. VIC Saudi Arabia - Technology transfer and MENA commercial agent
2. Brazil Biotech - Influenza vaccine international expansion
3. MENA Distribution Network - Regional vaccine commercialization
4. European Vaccine Company - COVID-19 pandemic response (30+ countries)

### Biologicals & Pharmaceuticals Partnerships (4)
1. MedServe DRC - Joint venture for pharmaceutical supply
2. Argentine Pharma - Respiratory, dermatology, biologicals portfolio expansion
3. MEDIS Belgium - B2B pharmaceutical and biological products
4. Belgian Healthcare Group - Public sector pharmaceutical supply in DRC

### Leadership Team (5)
1. Doronn Victor Sitruk - Co-Founder, Commercial Strategy & Market Access
2. Damien Dessis - Co-Founder, Business Development & Licensing
3. Dr. Dirk Poelaert - Partner, Chief Medical Officer
4. Dr. Laurent Massuyeau - Advisor, Biosimilars
5. Guy Dotan - Partner, Licensing, Biosimilars

## Recent Changes
- Created comprehensive schema for contact form
- Built all frontend components with exceptional attention to visual quality
- Implemented responsive navigation with smooth scroll
- Added expandable team bios for better UX
- Configured design tokens matching DVS brand colors
- Set up proper SEO meta tags

## User Preferences
- Comprehensive content display (not streamlined)
- Professional, corporate B2B healthcare aesthetic
- Navy blue and light blue color scheme from logo
- Clean, trustworthy design befitting international partnerships

## Technical Notes
- Logo asset: `attached_assets/Screenshot 2025-11-17 at 18.25.22_1763400324343.png`
- Using @assets alias for image imports
- Contact form currently has placeholder submit (will be connected to backend)
- All components use proper data-testid attributes for testing
