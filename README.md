# Universal Foundation Template

**Purpose:** Clean, empty template based on crane-insurance.com that can be customized for ANY website through intelligent content population.

---

## What This Is

**ONE universal foundation** with:
- ✅ All components (Hero, Services, FAQ, Contact, Footer, etc.)
- ✅ Complete design system (Tailwind CSS)
- ✅ Astro + React hybrid architecture
- ✅ Empty/placeholder content
- ✅ Config-driven (everything reads from `site-config.json`)

**NOT industry-specific templates** - this ONE template works for any business.

---

## How It Works

### 1. All Content in site-config.json

**Single source of truth:**
```json
{
  "site": { "name": "{{BUSINESS_NAME}}", ... },
  "hero": { "headline": "{{HERO_HEADLINE}}", ... },
  "services": [ ... ],
  "faq": [ ... ]
}
```

### 2. Components Read from Config

**Example: Hero.astro**
```astro
import siteConfig from '@/data/site-config.json'
const { hero } = siteConfig

<h1>{hero.headline}</h1>
<p>{hero.subheadline}</p>
<button>{hero.ctaText}</button>
```

### 3. Customization = Populate Config

**To create a website:**
1. Copy this template folder
2. Replace all `{{PLACEHOLDERS}}` in site-config.json
3. Download images
4. Build → Done!

**Time: 30-60 minutes (automated by foundation-customizer agent)**

---

## Structure

```
foundation-template/
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, Services, etc.)
│   │   ├── ui/                # Reusable UI (buttons, cards, etc.)
│   │   └── SEO/               # SEO components
│   ├── layouts/               # Page layouts
│   ├── pages/                 # Routes
│   └── data/
│       └── site-config.json   # MAIN CONFIG - all content here
├── public/
│   └── images/                # Images (populated during customization)
├── tailwind.config.mjs        # Design system
├── astro.config.mjs           # Astro configuration
└── package.json
```

---

## site-config.json Schema

**All fields are placeholders until customized:**

### Site Information
- `{{BUSINESS_NAME}}` - Company name
- `{{TAGLINE}}` - One-line tagline
- `{{DESCRIPTION}}` - Business description
- `{{DOMAIN}}` - Website URL
- `{{EMAIL}}`, `{{PHONE}}`, `{{ADDRESS}}` - Contact info

### Hero Section
- `{{HERO_HEADLINE}}` - Main headline
- `{{HERO_SUBHEADLINE}}` - Supporting text
- `{{HERO_CTA}}` - Call-to-action button text
- `{{TRUST_SIGNAL_1/2/3}}` - Trust badges

### SEO
- `{{SEO_TITLE}}` - Meta title
- `{{SEO_DESCRIPTION}}` - Meta description
- `{{KEYWORD_1/2/3}}` - Primary keywords

### Services (repeatable)
- `{{SERVICE_N_NAME}}` - Service name
- `{{SERVICE_N_DESCRIPTION}}` - Service description
- `{{SERVICE_N_FEATURE_1/2/3}}` - Key features

### FAQ (repeatable)
- `{{FAQ_N_QUESTION}}` - Question
- `{{FAQ_N_ANSWER}}` - Answer

---

## Components Included

### Sections (Astro - static)
- `Hero.astro` - Full-screen hero with CTA
- `Services.astro` - Service cards grid
- `FAQ.astro` - Accordion FAQ section
- `ContactForm.astro` - Contact form (Netlify ready)
- `Footer.astro` - Footer with links
- `About.astro` - About section
- `CallToAction.astro` - CTA sections
- `WhyChooseUs.astro` - Value propositions
- `Compliance.astro` - Trust/compliance display
- `BlogSection.astro` - Blog preview

### UI Components (React - interactive)
- `GlassButton.tsx` - Animated buttons
- `GlassNavbar.tsx` - Navigation
- `LogoScroller.tsx` - Logo carousel
- `TrustBadge.astro` - Trust indicators
- `Stats.tsx` - Statistics display
- `Callout.tsx` - Info boxes
- `GlassCard.tsx` - Card component

### SEO Components
- `SchemaMarkup.astro` - Structured data

---

## Design System

**Colors (Tailwind):**
- `construction-yellow` - Primary yellow
- `steel-black` - Primary text
- `dark-steel` - Backgrounds
- `aluminum` - Light text

**Typography:**
- Font: Inter (professional)
- Responsive scaling

**Animations:**
- Fade-ins
- Float effects
- Smooth transitions

---

## Quality Standards

Every website built from this template will have:
- ✅ Lighthouse Performance ≥ 90
- ✅ Lighthouse Accessibility ≥ 95
- ✅ Lighthouse SEO ≥ 95
- ✅ Mobile responsive
- ✅ Semantic HTML
- ✅ Schema.org markup
- ✅ Optimized images
- ✅ Fast load times

**crane-insurance.com quality locked in!**

---

## Usage

### Manual Customization

```bash
# 1. Copy template
cp -r foundation-template my-new-website
cd my-new-website

# 2. Edit site-config.json
# Replace all {{PLACEHOLDERS}} with actual content

# 3. Add images
# Download/create images for hero, services, etc.

# 4. Build
npm install
npm run build

# 5. Deploy
netlify deploy --prod
```

### Automated Customization (Recommended)

```bash
# Use foundation-customizer agent
/foundation-customize mynewdomain.com

# Agent automatically:
# - Copies template
# - Populates config from planning data
# - Downloads images
# - Builds and validates
# - Reports when ready

# Time: 60 minutes (hands-off)
```

---

## Customization Examples

### Insurance Site
- Primary color: Professional blue
- Services: Coverage types
- FAQ: Insurance questions
- Trust signals: A+ Rating, Licensed, Years

### Contractor Site
- Primary color: Construction yellow
- Services: Project types
- FAQ: Process questions
- Trust signals: Projects completed, Licensed

### Restaurant Site
- Primary color: Warm colors
- Services: Menu categories
- FAQ: Hours, reservations, dietary
- Trust signals: Years, Reviews, Awards

**Same template, different content!**

---

## Files You'll Customize

**Always customize:**
- `src/data/site-config.json` - Main content
- `public/images/*` - All images

**Sometimes customize:**
- `tailwind.config.mjs` - If custom colors needed
- `src/pages/*` - If custom pages needed

**Never change (quality lock):**
- Component structure
- Layout systems
- SEO infrastructure
- Accessibility features
- Performance optimizations

---

## Next Steps

1. **For developers:** Use this template manually
2. **For automation:** Use `/foundation-customize` command with planning data
3. **For quality:** All sites maintain crane-insurance.com standards

---

**This template is the foundation of the website factory system.**
