# Harmonia Syndic - Project Structure & File Overview

## Project Configuration Files

### `package.json`
- Dependencies: React 19, Next.js 14, React DOM 19
- Dev Dependencies: TypeScript, Tailwind CSS, PostCSS, Autoprefixer, ESLint
- Scripts: dev, build, start, lint

### `next.config.js`
- React Strict Mode enabled
- Standard Next.js 14 configuration

### `tailwind.config.ts`
- Custom color palette configured (primary, secondary, accent, light)
- Extends default Tailwind theme
- Configured for src/ directory structure

### `tsconfig.json`
- Target: ES2020
- Module: ESNext
- Path aliases configured (@/* → ./src/*)
- Strict mode enabled

### `postcss.config.js`
- Tailwind CSS and Autoprefixer configured

## App Structure

### Root Layout (`src/app/layout.tsx`)
- Metadata with SEO optimization
  - Title: "Harmonia Syndic | Votre syndic de copropriété de confiance"
  - Optimized description for French property management services
  - Open Graph metadata for social sharing
- Inter font from Google Fonts
- Language set to French (lang="fr")
- Wraps all pages with Header → main → Footer

### Global Styles (`src/app/globals.css`)
- Tailwind directives (@tailwind base, components, utilities)
- Brand color variables (CSS custom properties)
- Component utilities (.btn-primary, .btn-outline, .btn-secondary)
- Card and form input styling
- Responsive layout utilities

### Homepage (`src/app/page.tsx`)
Complete landing page with 7 sections:

1. **Hero Section**
   - Gradient background (primary to secondary)
   - Main headline: "Votre copropriété mérite le meilleur syndic"
   - Subheadline with value proposition
   - Two CTA buttons: "Demander un devis gratuit" + "Estimer vos charges"

2. **Stats Bar Component**
   - 500+ copropriétés gérées
   - 15 000+ copropriétaires satisfaits
   - 25 ans d'expérience
   - 98% taux de satisfaction

3. **Services Section**
   - 4 FeatureCard components with emoji icons
   - Gestion administrative (📋)
   - Gestion financière (💰)
   - Gestion technique (🔧)
   - Conseil et accompagnement (🤝)

4. **Why Choose Us Section**
   - Transparence totale 🔓
   - Réactivité garantie ⚡
   - Réduction des charges 📉
   - Cards with top accent border

5. **Testimonials Section**
   - 3 TestimonialCard components
   - 5-star ratings
   - French copropriétaire testimonials
   - Realistic scenarios and results

6. **CTA Section**
   - "Prêt à changer de syndic ?"
   - "Obtenez votre devis personnalisé en 2 minutes"
   - Primary CTA button

7. **Guides Section**
   - 3 GuideCard components
   - "Comment changer de syndic ?"
   - "Comprendre vos charges de copropriété"
   - "Les droits des copropriétaires"
   - Link to "Voir tous nos guides →"

## Components

### Header (`src/components/Header.tsx`)
- Client component with mobile menu toggle
- Logo with HS badge
- Navigation links: Services, Pourquoi nous, Guides, Contact
- Desktop and mobile responsive menus
- "Devis gratuit" CTA button
- Hamburger menu for mobile (animated)

### Footer (`src/components/Footer.tsx`)
- Four-column grid layout (desktop)
- Company info column
- Services links column
- Resources links column
- Contact information column
- Copyright and privacy/terms links
- Dynamic year calculation

### StatsBar (`src/components/StatsBar.tsx`)
- Gradient background (primary to secondary)
- 4 statistics displayed in a grid
- Responsive layout
- Large typography for impact

### FeatureCard (`src/components/FeatureCard.tsx`)
- Props: icon (React node), title, description
- Centered layout with icon background
- Light blue background box for icons
- Styled with card class

### TestimonialCard (`src/components/TestimonialCard.tsx`)
- Props: quote, author, role, rating (1-5)
- Star rating display using ★ symbol
- Yellow/accent color for filled stars
- Gray for empty stars
- Author and role information

### CTASection (`src/components/CTASection.tsx`)
- Full-width call-to-action section
- Gradient background
- Centered content
- Large button with accent color

### GuideCard (`src/components/GuideCard.tsx`)
- Props: title, description, slug, icon
- Link wrapper to guide pages
- Icon and text layout
- Hover effect with left accent border
- "Lire la suite →" link

## Styling Features

### Color Palette
- Primary: #1B4F72 (deep blue)
- Secondary: #2E86C1 (medium blue)
- Accent: #F39C12 (orange/gold)
- Light: #EBF5FB (light blue background)

### Button Classes
- `.btn-primary` - Accent background, white text
- `.btn-outline` - Transparent with border, animated hover
- `.btn-secondary` - Secondary color background

### Layout Classes
- `.container-custom` - Max width 7xl with responsive padding
- `.section-padding` - Vertical padding for sections
- `.card` - White background with shadow and hover effect

## Typography & Styling
- All text content in French
- Responsive typography (larger on desktop)
- Consistent spacing and padding
- Hover animations and transitions
- Accessible color contrasts

## Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile menu with hamburger toggle
- Responsive grids (1 column → 2 → 3 → 4 columns)
- Flexible navigation layout

## SEO Features
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags for French market
- Open Graph tags for social sharing
- Language attribute (lang="fr")
- Keywords optimization

## No External Icon Library
- All icons are emoji characters (📋, 💰, 🔧, 🤝, 🔓, ⚡, 📉, 📖, 💵, ⚖️)
- No lucide-react or similar imports
- SVG hamburger menu inline in Header

## Ready for Development
- All components are fully functional
- No placeholder comments
- Production-ready code structure
- TypeScript strict mode enabled
- Tailwind CSS configured for optimal production builds
