# Antigravity Design Handoff

## Developer Notes

This document provides a definitive guide to implementing the Antigravity Label UI. This references a comprehensive design update adhering firmly to the brand style constraints outlined:

- Keep the Antigravity editorial identity; modern, bold, minimal, and editorial.
- Mustard `#D4A017` is reserved exclusively for primary CTAs, logo signage, and micro accents.
- Hunter Green `#0F3D2E` is intended for subtle overlays, secondary accents, and section backgrounds.

### Important Developer Next Steps (Prioritized Task List)
1. **Remove Unused CSS/Components**: Clean up generic stock template residuals or unneeded Shadcn variants. 
2. **Wire Up Player Embeds**: Implement the web radio and release player embeds ensuring they use lazy loading on secure iframes. 
3. **Implement Serverless Contact Endpoint**: Finalize the Next.js/Vite serverless function handling the contact form submissions.

## Design Tokens

### Token to Tailwind Mapping

#### Colors
- Black (`#000000`) -> `bg-brand-black`, `text-brand-black`, `border-brand-black` (CSS Variable: `--color-brand-black`)
- White (`#FFFFFF`) -> `bg-brand-white`, `text-brand-white`, `border-brand-white` (CSS Variable: `--color-brand-white`)
- Mustard Yellow (`#D4A017`) -> `bg-brand-mustard`, `text-brand-mustard`, `border-brand-mustard` (CSS Variable: `--color-brand-mustard`)
- Hunter Green (`#0F3D2E`) -> `bg-brand-green`, `text-brand-green`, `border-brand-green` (CSS Variable: `--color-brand-green`)

#### Typography
- H1: `text-h1` (`48px` / `56px`) - *Montserrat*
- H2: `text-h2` (`36px` / `44px`) - *Montserrat*
- H3: `text-h3` (`28px` / `36px`) - *Montserrat*
- Body: `text-body` (`16px` / `24px`) - *Inter*
- Small: `text-small` (`14px` / `20px`) - *Inter*

#### Spacing System (4px base)
- gap.xs: `gap-1` / `p-1` (`4px`)
- gap.sm: `gap-2` / `p-2` (`8px`)
- gap.base: `gap-4` / `p-4` (`16px`)
- gap.lg: `gap-6` / `p-6` (`24px`)
- gap.xl: `gap-10` / `p-10` (`40px`)
- Container Max Width: `1440px`

#### Radius & Elevation
- radius.sm: `rounded-sm` (`4px`)
- radius.md: `rounded-md` (`8px`)
- radius.lg: `rounded-lg` (`16px`)
- Subtle shadow (cards): `shadow-card` (`0 6px 18px rgba(0,0,0,0.25)`)

## Interactive States & Microinteractions

- **Focus Ring**: `focus-visible:ring-3` -> 3px solid visible outline using mustard or white depending on contrast.
- **Hover Transitions**: `transition-all duration-160 ease-out`
- **Modal Open/Close**: 240ms ease `duration-240 ease-out`
- **Button Press Scale**: `active:scale-[0.98]` applied for 120ms
- **Filmic treatment (images)**: `after:bg-brand-green/10` and grain effect layer on `.hero-image-container`.

## Assets & Images
Export large images in WEBP format (`quality 80`) with JPG fallbacks (`quality 70`) using 2x retina constraints.
- **Crop Rules**: Hero (2000×1200), Release Covers (2000×2000), Merch (1500×1500).
- **Naming Convention & Alt Text**: 
    - `hero_artist_context.webp`
    - `release_artist_title.webp`
    - `merch_product_color.webp`
- **Treatment**: All hero images must have a subtle grain and `8-12%` Hunter Green overlay, alongside lazy load placeholders.

## Next.js Implementation Notes
- Use `Next/Image` for full asset optimization.
- Use Static Site Generation (SSG) for Releases and Events pages since they are pre-rendered mostly.
- Use Serverless functions for handling the `/api/contact` endpoint forms.
- Embed players via secure `iframe` with `loading="lazy"`.

## SEO and Metadata
- Generate JSON-LD snippets for Events and Releases.
- Include proper meta `<title>` and `<meta name="description">` blocks per-page.

## Acceptance Checklist
- [ ] Lighthouse performance >= 80
- [ ] Accessibility score >= 90
- [ ] Mobile layout has no horizontal scroll
- [ ] Images optimized (WebP) and lazy loaded
- [ ] All interactive elements (Custom Nav, Sliders, Modals) keyboard accessible
- [ ] No missing `alt` text on any images
- [ ] Color contrast >= 4.5:1 (body) and 3:1 (large headings)
- [ ] Semantic ARIA roles injected for components
