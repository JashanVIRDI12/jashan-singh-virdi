# Agency Landing Page - Customization Guide

## Overview

This is a high-converting agency landing page built with the proven structure:
1. **Hero** — Clear value proposition
2. **Proof** — Case studies with real results
3. **Services** — 3 tiered packages with pricing
4. **Free Audit CTA** — Low-friction lead magnet
5. **About** — Human story + social proof
6. **Footer** — Navigation & links

## File Location

`components/blocks/agency-landing.tsx`

## Sections & Customization

### 1. HERO SECTION

**What it does:** Makes the agency's value crystal clear in the first 8 seconds.

**Key elements to customize:**
- **Main headline** (line ~19)
- **Subheading** (line ~22)
- **CTA buttons** (lines ~26-31)

**Example customization:**

```tsx
// Line 19 - Main headline
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  We help SaaS companies cut CAC by 40% and double MRR.
</h1>

// Line 22 - Subheading
<p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
  Conversion optimization, paid ads strategy, and landing page design that actually convert.
</p>
```

### 2. PROOF SECTION (Case Studies)

**What it does:** Shows real results. Numbers beat words.

**Edit case studies:** Lines 42-61

```tsx
const caseStudies = [
  {
    brand: "Your Client Name",
    metric: "+47%",              // The big number
    result: "Conversion Increase", // What improved
    detail: "Describe what you did", // How you did it
    image: "https://unsplash.com/..." // Screenshot or demo image
  },
  // ... add more
];
```

**Best practices:**
- Use real client names if you have permission (anonymize if needed: "D2C Retailer")
- Show before/after metrics (traffic, conversions, revenue)
- Include what you actually did
- Use clear, relevant images

**Sample metrics to highlight:**
- +X% conversion rate increase
- +X% revenue growth
- X% cost per acquisition reduction
- X,XXX leads generated
- $X,XXX saved on ad spend

### 3. SERVICES SECTION (Pricing)

**What it does:** Makes it easy for buyers to pick a package. Removes friction.

**Edit packages:** Lines 68-122

**Three-tier model:**

```tsx
const packages = [
  {
    name: "Growth Foundation",    // Entry level
    price: "2,999",               // Monthly price
    period: "/month",
    description: "For new brands",
    features: [
      "Website design & optimization",
      "SEO strategy & implementation",
      "Monthly performance reports",
      "Email support"
    ],
    cta: "Start Growing"
  },
  {
    name: "Performance Pro",      // Middle (featured)
    price: "5,999",
    period: "/month",
    description: "Most popular",
    features: [
      "Everything in Foundation",
      "Paid ads management (Google & Meta)",
      "CRO & conversion testing",
      "Social media strategy",
      "Weekly strategy calls",
      "Priority support"
    ],
    cta: "Get Started",
    featured: true                // Highlights this package
  },
  {
    name: "Full Funnel Accelerator", // Top tier
    price: "9,999",
    period: "/month",
    description: "For ambitious brands",
    features: [
      "Everything in Pro",
      "Marketing automation setup",
      "Advanced analytics & tracking",
      "Landing page creation",
      "Dedicated account manager",
      "24/7 priority support"
    ],
    cta: "Schedule Call"
  }
];
```

**Pricing strategy tips:**
- Make the middle package featured (highlighted visually)
- Middle package captures 60-70% of sales
- Top tier for serious/large clients
- Bottom tier removes the "too expensive" objection
- Always show price (removes objection early)

**What to include in features:**
- Website Design
- SEO & organic growth
- Paid ads (Google & Meta)
- CRO (conversion rate optimization)
- Automation setup
- SMM (social media)
- Analytics & reporting
- Strategy calls frequency

### 4. AUDIT CTA SECTION

**What it does:** Converts browsers to leads with a low-friction offer.

**Edit content:** Lines 140-180

**The free audit is more effective than "Contact Us" because:**
- Clear deliverable (not vague)
- No sales call required (just "strategy call")
- Shows your process
- Qualifies leads early

**Customize:**

```tsx
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
  "Get a free website speed audit" // Change this
</h2>

<p className="text-xl text-gray-300 mb-8 max-w-2xl">
  "We'll analyze your site, find what's killing conversions, and show you 
   exactly how to fix it. No pitch. No obligation."
</p>
```

**What to include in the audit:**

```tsx
<div className="bg-slate-800/50 rounded-lg p-6">
  <h3 className="text-white font-semibold mb-3">You'll Get:</h3>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li className="flex gap-2"><span>✓</span> Site speed analysis</li>
    <li className="flex gap-2"><span>✓</span> SEO opportunity audit</li>
    <li className="flex gap-2"><span>✓</span> Conversion flow review</li>
    <li className="flex gap-2"><span>✓</span> Competitor benchmarking</li>
  </ul>
</div>
```

### 5. ABOUT SECTION

**What it does:** Builds trust with a human story (not a resume).

**Edit content:** Lines 185-218

**One paragraph should cover:**
- How long you've been doing this
- What you've done (results, not list of skills)
- What makes you different
- Who you work with best

**Template:**

```tsx
<p className="text-xl text-gray-300 leading-relaxed">
  We're a team of growth specialists obsessed with one thing: turning traffic 
  into revenue. For [X] years, we've worked with [type of brand] doing 
  $[range]—and we know exactly what it takes. We don't do generic advice. 
  We run tests, dig into your numbers, and build custom strategies that hit 
  your specific goals.
</p>
```

**Stats to showcase (customize with your numbers):**

```tsx
<div className="grid md:grid-cols-3 gap-8">
  <div>
    <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
    <p className="text-gray-400">Brands we've worked with</p>
  </div>
  <div>
    <div className="text-4xl font-bold text-blue-400 mb-2">$45M+</div>
    <p className="text-gray-400">Revenue we've generated</p>
  </div>
  <div>
    <div className="text-4xl font-bold text-blue-400 mb-2">4.9/5</div>
    <p className="text-gray-400">Average client rating</p>
  </div>
</div>
```

### 6. FOOTER

**What it does:** Navigation + credibility

**Edit footer:** Lines 220-270

- Link to your blog
- Service pages
- Case study page
- Contact info
- Social links

## Services Offered (in your copy)

The page includes these 6 key services:

1. **Website Design** - Beautiful, conversion-focused sites
2. **SEO** - Organic traffic growth
3. **Paid Ads** - Google & Meta advertising
4. **CRO** - Conversion rate optimization & testing
5. **Automation** - Marketing automation setup
6. **SMM** - Social media management & growth

Reference these throughout:
- In the hero ("design, data & growth strategies")
- In the services list
- In case studies (what you did)
- In pricing features

## Design Elements

### Colors
- **Primary**: `bg-blue-600` / `bg-blue-700` (CTAs)
- **Background**: Black to slate-900 (professional)
- **Text**: White, gray-300, gray-400 (hierarchy)
- **Accent**: `text-blue-400` (highlights)

### Typography
- **Headlines**: Bold, large (5xl-7xl)
- **Body**: Regular weight, gray text
- **Pricing**: 5xl bold
- **Features**: Small text, checkmarks

### Spacing
- Sections have `py-20 md:py-32` (generous padding)
- Text max-width is `max-w-3xl` (readable)
- Gap between items: `gap-8`

## Testing & Optimization

### A/B Test These:
1. **Main headline** - "We help D2C brands..." vs "Your growth partner..."
2. **CTA text** - "Get Free Audit" vs "Schedule Audit" vs "See How"
3. **Pricing** - Try $2,999 vs $3,499 for entry level
4. **Case study numbers** - Which results convert best?
5. **Middle package** - Test featuring different tier

### Conversion Tracking
Add these tracking:
- Form submissions (free audit)
- CTA clicks (all buttons)
- Page views & scroll depth
- Time on page
- Exit intent

## Implementation Checklist

- [ ] Update hero headline for your agency
- [ ] Replace case studies with real client results
- [ ] Adjust pricing to match your model
- [ ] Update "Free Audit" offer (customize to your service)
- [ ] Rewrite About section
- [ ] Update footer links
- [ ] Add analytics/tracking code
- [ ] Connect CTA buttons to forms/email capture
- [ ] Test on mobile
- [ ] Add schema markup (JSON-LD)
- [ ] Write meta tags

## Integration with Forms

Connect CTAs to your email capture:

```tsx
// Add to button onClick
const handleAuditClick = async () => {
  // Open modal or redirect to form
  // Send to Zapier, ConvertKit, Mailchimp, etc.
};
```

## Performance Tips

- Images use Unsplash (already optimized)
- Gradients & blur effects are GPU-accelerated
- No animations by default (add if needed)
- Lazy load images below fold
- Consider adding trust badges (Trustpilot, G2, etc.)

## SEO Optimization

- **Title tag**: "Growth Agency for D2C Brands | Website Design, SEO, Ads"
- **Meta description**: "We help D2C brands increase conversions. Website design, SEO, paid ads, CRO, automation & SMM."
- **H1**: Already set (hero headline)
- **Schema**: Add LocalBusiness or Organization schema

Add to `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Growth Agency for D2C Brands - Design, SEO, Ads",
  description: "We help D2C brands increase conversions 40%+ in 90 days. Website design, SEO, paid ads, CRO, automation & SMM.",
};
```

## Next Steps

1. **Run the dev server:** `npm run dev`
2. **Customize all sections** with your real data
3. **Connect CTAs** to your email/CRM
4. **Deploy** to Vercel, Netlify, or your host
5. **Set up analytics** (Google Analytics, Hotjar)
6. **Monitor** form submissions & conversion rates

## Quick Wins

- Add Trustpilot reviews/badges
- Add "As featured in" logos
- Add video testimonials (YouTube embedded)
- Add FAQ section
- Add pricing comparison table
- Add calendar booking (Calendly, Acuity)
