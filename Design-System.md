# SA LATEEF ONIJO CHAMBERS - UI Design System

## 🎨 Design Foundations

### Color System

**Primary Colors:**
- `--color-primary-900`: #1e3a5f (Deep Navy - Headers, primary text)
- `--color-primary-700`: #2d4a6f (Navy - Secondary headers)
- `--color-primary-500`: #3b5998 (Royal Blue - Links, accents)
- `--color-primary-100`: #e8eef5 (Light Navy - Backgrounds)

**Secondary Colors (Gold Accent):**
- `--color-secondary-900`: #b8860b (Dark Goldenrod - CTAs, highlights)
- `--color-secondary-500`: #daa520 (Goldenrod - Hover states)
- `--color-secondary-100`: #faf0e6 (Linen - Subtle backgrounds)

**Neutral Palette:**
- `--color-neutral-900`: #1a1a1a (Primary text)
- `--color-neutral-700`: #4a4a4a (Secondary text)
- `--color-neutral-500`: #6b7280 (Muted text)
- `--color-neutral-300`: #d1d5db (Borders)
- `--color-neutral-100`: #f8f9fa (Light backgrounds)
- `--color-white`: #ffffff (Pure white)

**Semantic Colors:**
- `--color-success`: #059669 (Success states)
- `--color-warning`: #d97706 (Warning states)
- `--color-error`: #dc2626 (Error states)
- `--color-info`: #2563eb (Info states)

### Typography System

**Primary Font:** 'Playfair Display', Georgia, serif (Headlines, elegant feel)
**Secondary Font:** 'Inter', system-ui, sans-serif (Body text, UI elements)

**Font Scale:**
- `--font-size-hero`: 4rem (64px) - Hero headline
- `--font-size-h1`: 3rem (48px) - Page titles
- `--font-size-h2`: 2.25rem (36px) - Section headers
- `--font-size-h3`: 1.5rem (24px) - Subsection headers
- `--font-size-h4`: 1.25rem (20px) - Card titles
- `--font-size-lg`: 1.125rem (18px) - Lead paragraphs
- `--font-size-base`: 1rem (16px) - Body text
- `--font-size-sm`: 0.875rem (14px) - Small text, captions
- `--font-size-xs`: 0.75rem (12px) - Labels, metadata

**Font Weights:**
- 400 (Regular) - Body text
- 500 (Medium) - Emphasis
- 600 (Semibold) - Subheaders
- 700 (Bold) - Headers

**Line Heights:**
- 1.2 - Headlines
- 1.5 - Body text
- 1.75 - Large paragraphs

### Spacing System

**Base Unit:** 4px

**Scale:**
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)
- `--space-20`: 5rem (80px)
- `--space-24`: 6rem (96px)

### Shadow Tokens

- `--shadow-sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- `--shadow-md`: 0 4px 6px -1px rgb(0 0 0 / 0.1)
- `--shadow-lg`: 0 10px 15px -3px rgb(0 0 0 / 0.1)
- `--shadow-xl`: 0 20px 25px -5px rgb(0 0 0 / 0.1)

### Border Radius

- `--radius-sm`: 0.25rem (4px)
- `--radius-md`: 0.375rem (6px)
- `--radius-lg`: 0.5rem (8px)
- `--radius-xl`: 0.75rem (12px)

---

## 🧱 Component Library

### Buttons

**Primary Button:**
- Background: #b8860b (Dark Goldenrod)
- Text: #ffffff (White)
- Padding: 1rem 2rem (16px 32px)
- Border-radius: 0.375rem (6px)
- Font-weight: 600
- Hover: Background #daa520, translateY(-2px), shadow-md

**Secondary Button:**
- Background: transparent
- Border: 2px solid #1e3a5f
- Text: #1e3a5f
- Padding: 1rem 2rem
- Border-radius: 0.375rem
- Hover: Background #1e3a5f, text white

**Ghost Button:**
- Background: transparent
- Text: #1e3a5f
- Hover: Background #e8eef5

### Cards

**Service Card:**
- Background: white
- Border: 1px solid #e5e7eb
- Border-radius: 0.5rem
- Padding: 2rem
- Shadow: shadow-sm
- Hover: shadow-lg, translateY(-4px)

**Team Card:**
- Background: white
- Border-radius: 0.5rem
- Overflow: hidden
- Shadow: shadow-md
- Hover: shadow-xl

### Form Inputs

**Text Input:**
- Border: 1px solid #d1d5db
- Border-radius: 0.375rem
- Padding: 0.75rem 1rem
- Focus: border-color #3b5998, ring 3px #3b599820

---

## 📱 Responsive Design

### Breakpoint Strategy

**Mobile:** 320px - 639px (base design)
**Tablet:** 640px - 1023px (layout adjustments)
**Desktop:** 1024px - 1279px (full feature set)
**Large Desktop:** 1280px+ (optimized for large screens)

### Container Widths

- Mobile: 100% with 1rem padding
- Tablet: 100% with 1.5rem padding
- Desktop: max-width 1024px with 2rem padding
- Large Desktop: max-width 1280px with 2rem padding

---

## ♿ Accessibility Standards

### WCAG AA Compliance

**Color Contrast:**
- 4.5:1 ratio for normal text
- 3:1 ratio for large text
- All primary text meets AA standards

**Keyboard Navigation:**
- Full functionality without mouse
- Visible focus indicators (2px solid #3b5998)
- Logical tab order

**Screen Reader Support:**
- Semantic HTML structure
- ARIA labels for interactive elements
- Alt text for all images

---

## 🎯 Section Specifications

### Hero Section
- Full viewport height (min-height: 100vh)
- Background: Professional law office image with overlay
- Overlay: linear-gradient(135deg, rgba(30,58,95,0.9) 0%, rgba(30,58,95,0.7) 100%)
- Headline: Playfair Display, 4rem, white
- Subheadline: Inter, 1.25rem, rgba(255,255,255,0.9)
- CTA Buttons: Primary (gold) + Secondary (white outline)

### Navigation
- Fixed position, z-index 50
- Background: white with shadow-sm on scroll
- Height: 80px
- Logo: Left aligned
- Links: Center, Inter 500, #1e3a5f
- CTA: Right aligned, gold button

### Practice Areas
- Background: #f8f9fa
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Cards with icon, title, description
- Icon color: #b8860b

### About Section
- Two-column layout (text + image)
- Background: white
- Stats counter with gold accents

### Team Section
- Background: #f8f9fa
- Grid: 4 columns desktop, 2 tablet, 1 mobile
- Cards with photo, name, title, specialty

### Testimonials
- Background: white
- Carousel/slider with client quotes
- Quote icon: #b8860b

### Contact Section
- Two-column layout (form + info)
- Background: #1e3a5f (navy)
- Text: white
- Form inputs: white background

### Footer
- Background: #1a1a1a (dark)
- Text: rgba(255,255,255,0.8)
- Links: rgba(255,255,255,0.6), hover white
- Gold accent for highlights
