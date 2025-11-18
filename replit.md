# DVS Partners - Corporate Website

## Overview
Professional corporate website for DVS Partners, a healthcare business development company specializing in Vaccines, Biologicals, and Pharmaceuticals. The website showcases their expertise, two core partnership models, strategic collaborations, leadership team, and advisory board.

## Current State
- **Status**: Production-Ready - All components built with comprehensive business model elaboration
- **Core Business**: Emphasizing Market Expansion and Portfolio Development partnership models
- **Technology Stack**: React, TypeScript, Tailwind CSS, shadcn/ui, Express.js
- **Contact Form**: Fully functional with React Query mutations, validation, and polished UX

## Project Architecture

### Frontend Structure
- **Single-page application** with smooth scroll navigation
- **Sections**:
  1. Hero - Full-screen introduction with company value proposition
  2. About Us (Who We Are) - Pharmaceutical specialized strategy company overview, pandemic vaccine expertise (COVID-19, influenza, 40+ governments), and company statement "We say what we think, we do what we say"
  3. What We Do - Comprehensive elaboration of two core partnership models (Market Expansion & Portfolio Development) across all product categories
  4. Collaborations - Showcase of 8 strategic partnerships (Vaccines and Biologicals/Pharma)
  5. Team - Combined section with Leadership Team (4 partners) and integrated Advisory Board (visually separated but part of same section)
  6. Contact - Professional contact form with React Query mutations and polished UX
  7. Footer - Quick links and company information

### Design System
- **Primary Color**: Navy blue (hsl(210, 85%, 35%)) - matching DVS logo
- **Typography**: Inter font family for professional, corporate aesthetic
- **Components**: Built with shadcn/ui for consistency and accessibility
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Animations**: Subtle fade-in effects and hover states for polish

### Key Features
- Smooth scroll navigation between sections
- Mobile-responsive hamburger menu with streamlined navigation
- Pharmaceutical specialized strategy company positioning clearly communicated
- Pandemic vaccine expertise prominently featured (COVID-19, influenza, 40+ governments)
- Company identity statement "We say what we think, we do what we say" prominently displayed
- Integrated Team section combining Leadership Team and Advisory Board with visual separation
- Expandable team and advisor bios (Read More/Less)
- Professional team photos with subtle white overlay effect
- Contact form with React Query mutations, loading states, and inline status messages
- Comprehensive "What We Do" section elaborating on core business models
- Professional corporate aesthetic matching DVS Pharma logo

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

### Leadership Team (4 Partners)
1. Doronn Victor Sitruk - Co-Founder, Commercial Strategy & Market Access
2. Damien Dessis - Co-Founder, Business Development & Licensing
3. Dr. Dirk Poelaert - Partner, Chief Medical Officer
4. Guy Dotan - Partner, Licensing, Biosimilars

### Advisory Board (1 Senior Advisor)
1. Dr. Laurent Massuyeau - Senior Business Advisor, Biosimilars & Biologics Commercialization

## Core Business Models

### Market Expansion Partnerships
- Market assessment and strategy development
- Partner identification through global network
- Deal structuring and execution
- Accelerated market access and reduced commercial risk

### Portfolio Development Partnerships
- Portfolio gap analysis and opportunity identification
- Asset and partner scouting
- Transaction management and financial valuation
- Strategic portfolio enhancement and maximized asset value

### Product Categories
All partnership models applied consistently across:
- Vaccines (pandemic preparedness, immunizations, travel vaccines)
- Biologicals (biosimilars, monoclonal antibodies, specialty biologics)
- Pharmaceuticals (specialty pharma, chronic disease management)

### Geographic Reach
International operations across: Europe, North America, MENA, Latin America, Asia Pacific, China, Canada

## Recent Changes (November 2025)
- Updated to DVS Pharma official logo (image_1763489958984.png)
- Positioned company as "pharmaceutical specialized strategy company" in About section
- Integrated pandemic vaccine expertise into narrative (COVID-19, influenza, 40+ governments partnership)
- Added company statement "We say what we think, we do what we say" to About section
- Created comprehensive "What We Do" section with detailed elaboration of two core partnership models
- Restructured Team section to integrate Leadership Team (4 partners) and Advisory Board with visual separation
- Dr. Laurent Massuyeau positioned as Senior Business Advisor in integrated Advisory Board subsection
- Added professional team photos with white overlay effect for all members
- Streamlined navigation (removed separate Advisory Board link, integrated into Team section)
- Implemented production-ready contact form with React Query mutations, loading states, and error handling
- Removed generic Business Model section (replaced by comprehensive What We Do)

## User Preferences
- Comprehensive content display with detailed elaboration on core business
- Clear positioning as pharmaceutical specialized strategy company
- Pandemic vaccine expertise (COVID-19, influenza, 40+ governments) prominently featured
- Emphasis on two partnership models: Market Expansion and Portfolio Development
- Professional, corporate B2B healthcare aesthetic
- Navy blue color scheme matching DVS Pharma logo
- Company identity: "We say what we think, we do what we say"
- Clean, trustworthy design befitting international partnerships
- Integrated Team section with Leadership Team and Advisory Board (visually separated but not isolated)

## Technical Notes
- Logo asset: `attached_assets/image_1763489958984.png` (DVS Pharma official logo)
- Team photos: Damien, Doronn, Guy, Dirk, Laurent with white overlay effect
- Using @assets alias for all image imports
- Contact form using React Query mutations with proper state management
- All components use proper data-testid attributes for testing
- In-memory storage for contact form submissions
