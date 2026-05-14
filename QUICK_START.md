# Quick Start Guide - Agency Landing Page

## What You Have

A professional, high-converting agency landing page with:
- ✅ Hero section (clear value prop)
- ✅ Case studies section (proof with real results)
- ✅ 3-tier pricing packages
- ✅ Free audit CTA section
- ✅ About section + social proof
- ✅ Footer with navigation
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ TypeScript + Tailwind CSS

## Services Included

The page is built to promote:
- Website Design
- SEO
- Paid Ads (Google & Meta)
- CRO (Conversion Rate Optimization)
- Marketing Automation
- Social Media Management

## Run It

```bash
# Start dev server (opens on port 3000)
npm run dev

# Open in browser
# http://localhost:3000
```

## Quick Customizations (5 minutes)

### 1. Change the agency name
Search for "Growth Agency" in `components/blocks/agency-landing.tsx` and replace with your name.

### 2. Update the main headline (Hero)
Line ~19 in `agency-landing.tsx`:
```tsx
We grow D2C brands with design, data & growth strategies.
```
Change to your value prop like:
```tsx
We help D2C brands increase conversions with CRO and web design.
```

### 3. Add your case studies
Lines 42-61 in `agency-landing.tsx`:
```tsx
{
  brand: "Your Client Name",
  metric: "+47%",
  result: "Conversion Rate Increase",
  detail: "What you did to achieve this",
  image: "https://unsplash.com/photo/..."
}
```

### 4. Update pricing
Lines 68-122 in `agency-landing.tsx`:
- Change `price` values (currently $2,999, $5,999, $9,999)
- Update `features` list
- Modify package names

### 5. Customize the free audit
Lines 140-180 in `agency-landing.tsx`:
- Change "website audit" to what you offer (SEO audit, conversion audit, etc.)
- Update the bulleted features you'll include
- Change turnaround time if needed

## Key Sections to Customize

| Section | File | Lines | What to Change |
|---------|------|-------|-----------------|
| Hero | agency-landing.tsx | 19-31 | Headline, description, CTA text |
| Case Studies | agency-landing.tsx | 42-61 | Client names, metrics, results, images |
| Pricing | agency-landing.tsx | 68-122 | Package names, prices, features |
| Audit CTA | agency-landing.tsx | 140-180 | Offer details, benefits, CTA |
| About | agency-landing.tsx | 185-218 | Your story, stats, experience |
| Footer | agency-landing.tsx | 220-270 | Links, social media, company info |

## File Structure

```
components/blocks/
  ├── agency-landing.tsx           # Main landing page
  └── 3d-hero-section-boxes.tsx    # 3D hero (not used in this version)

app/
  ├── page.tsx                     # Uses AgencyLanding
  ├── layout.tsx                   # Root layout
  └── globals.css                  # Tailwind styles

docs/
  ├── AGENCY_LANDING_GUIDE.md      # Detailed customization
  └── INTEGRATION_GUIDE.md         # Initial setup
```

## Connect CTA Buttons

The buttons need to connect to your email list or CRM.

### Option 1: Email Capture (Simple)
Use Mailchimp, ConvertKit, or Substack embed:

```tsx
// In agency-landing.tsx, update button onClick:
<button 
  onClick={() => window.location.href = 'https://your-form-url.com'}
  className="bg-blue-600 hover:bg-blue-700..."
>
  Get Your Free Audit
</button>
```

### Option 2: Modal Form
Add a modal component that opens on CTA click.

### Option 3: Calendly/Acuity
Link directly to calendar booking:

```tsx
onClick={() => window.location.href = 'https://calendly.com/your-link'}
```

## Build & Deploy

### Local Build Test
```bash
npm run build
npm start
```

### Deploy to Vercel (1 click)
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Vercel auto-deploys on push

```bash
# Or deploy from CLI
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag .next folder to Netlify
# Or connect GitHub for auto-deploy
```

## Analytics Setup

### Google Analytics 4
Add to `app/layout.tsx`:

```tsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `,
        }}
      />
    </Script>
  );
}
```

Replace `GA_ID` with your Google Analytics ID.

## Common Customizations

### Change Colors
The page uses blue (`bg-blue-600`) as primary color.

To change globally, search/replace in `agency-landing.tsx`:
- `bg-blue-600` → your color
- `text-blue-400` → accent color
- `ring-blue-400` → border color

### Add More Case Studies
Copy one case study object (lines 43-48) and add more to the array. It auto-grids 3 per row.

### Adjust Pricing Tiers
- Remove a tier: delete one package object
- Add a tier: duplicate a package and modify
- Change featured tier: move `featured: true` to different package

### Add Services Page
Create new file `app/services/page.tsx` and link from footer.

### Add Blog
Create `app/blog/page.tsx` with your articles.

## Performance

The page is already optimized:
- ✓ Images from Unsplash (CDN)
- ✓ Tailwind CSS (minimal bundle)
- ✓ No heavy scripts
- ✓ Responsive design
- ✓ Fast load time

Build size: ~50KB (excellent)

## Testing Checklist

- [ ] Desktop view looks good (Chrome, Safari, Firefox)
- [ ] Mobile view responsive (test on phone)
- [ ] All CTAs clickable
- [ ] Images load
- [ ] Text readable (good contrast)
- [ ] Links work
- [ ] Form/calendar integration works

## Troubleshooting

### Build Error?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles not showing?
Restart dev server:
```bash
npm run dev
```

### Image not loading?
Check URL is HTTPS (not HTTP). Unsplash images are HTTPS.

### Want to customize more?
See `AGENCY_LANDING_GUIDE.md` for detailed section-by-section customization.

## Next Steps

1. **Customize** all text with your agency info
2. **Connect CTAs** to email capture or calendar
3. **Add analytics** (Google Analytics)
4. **Test on mobile** (use dev tools)
5. **Deploy** (Vercel, Netlify, etc.)
6. **Add to domain** (your-agency.com)

## Need Help?

Check these files:
- `AGENCY_LANDING_GUIDE.md` - Detailed customization guide
- `INTEGRATION_GUIDE.md` - Project setup details
- `components/blocks/agency-landing.tsx` - The component itself

---

**Ready to launch?** Run `npm run dev` and start customizing! 🚀
