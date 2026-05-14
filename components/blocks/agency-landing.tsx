"use client";

import React from 'react';
import { ArrowRight, CheckCircle, Globe } from 'lucide-react';
import { InteractiveHeroSection } from './interactive-hero-section';
import { NavbarModernBlock } from './navbar-modern';
import { PricingScrollSection } from './pricing-scroll-section';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

function AgencyHero() {
  return <InteractiveHeroSection />;
}

function ProofSection() {
  return (
    <section id="case-studies" className="py-16 md:py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-medium mb-3">Case Study</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-[-0.03em]">
              Real Work.<br />Real Results.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Healthcare', 'Fitness', 'Ecommerce', 'Local Services'].map((tag) => (
              <span key={tag} className="text-[10px] text-white/30 border border-white/10 rounded-full px-3 py-1 tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Case study — full width horizontal split */}
        <div className="grid md:grid-cols-5 gap-3 mb-3">

          {/* Story — 3 cols */}
          <div className="md:col-span-3 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-white/35 border border-white/10 rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 inline-block" />
                Charter Company — Fitness Coaching
              </span>
              <p className="text-white/65 text-base leading-relaxed mb-4">
                Charter Company was stuck at <span className="text-white font-semibold">2–3 leads per month</span>. Inconsistent. Unpredictable. Not enough to grow.
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                We rebuilt their site from scratch, hired a paid ads and SEO specialist, and turned their website into a lead system.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {['Website Rebuild', 'Paid Ads', 'SEO', 'Lead System'].map((t) => (
                <span key={t} className="text-[10px] text-white/30 border border-white/10 rounded-full px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>

          {/* Result — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {/* Big stat */}
            <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <div className="text-[4rem] sm:text-[5.5rem] font-black text-white leading-none tracking-tighter">30x</div>
              <div className="text-white/40 text-xs font-medium mt-2 tracking-wide uppercase">More Monthly Leads</div>
            </div>
            {/* Before / after */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 flex items-center justify-between">
              <div className="text-center">
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Before</div>
                <div className="text-white font-bold text-lg">2–3<span className="text-white/40 text-xs font-normal ml-1">/mo</span></div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20" />
              <div className="text-center">
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">After</div>
                <div className="text-white font-bold text-lg">3+<span className="text-white/40 text-xs font-normal ml-1">/day</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Other work — 3-col tags row */}
        <div className="grid md:grid-cols-3 gap-3">
          <div className="md:col-span-2 bg-white/[0.02] border border-white/8 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <p className="text-white/50 text-sm leading-relaxed">
              We've built <span className="text-white font-medium">10+ live websites</span> across healthcare{' '}
              <span className="text-white/70">(CHW — Chase Healthcare & Wellness)</span>, local services, fitness, and ecommerce.
              Every site does one thing: convert.
            </p>
          </div>
          <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-6 sm:p-7 flex flex-col justify-center gap-3">
            {[
              { n: '10+', l: 'Live websites' },
              { n: '30x', l: 'Leads (Charter Company)' },
              { n: '3+', l: 'Industries served' },
            ].map((s) => (
              <div key={s.n} className="flex items-baseline gap-2">
                <span className="text-white font-black text-xl tracking-tight">{s.n}</span>
                <span className="text-white/35 text-xs">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ServicesSection() {
  return <PricingScrollSection />;
}

function AuditCTA() {
  return (
    <section id="free-audit" className="relative py-16 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      {/* Purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(139,92,246,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_60%,rgba(109,40,217,0.1),transparent)]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-3">

          {/* Left — headline */}
          <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-white/30 tracking-[0.35em] uppercase font-medium mb-5">Free Audit</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-[1.08] tracking-[-0.03em] mb-5">
                Is Your Website<br />Losing You Leads?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Most business websites look fine but convert terribly. We'll show you exactly where visitors are dropping off and what to fix — no fluff, no pitch.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[10px] text-white/25 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 inline-block" />
              Takes 24 hours. No commitment.
            </div>
          </div>

          {/* Right — CTA + checklist */}
          <div className="flex flex-col gap-3">
            {/* What you get */}
            <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-2xl p-6 sm:p-7">
              <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-medium mb-5">What you get</p>
              <ul className="space-y-3">
                {[
                  'Where visitors are dropping off',
                  "What's killing your conversions",
                  'Quick wins you can act on today',
                  'Full written breakdown — no fluff',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/55 text-sm">
                    <CheckCircle className="w-4 h-4 text-white/25 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA button card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col items-start gap-4">
              <p className="text-white/40 text-xs leading-relaxed">
                Send us your URL. We'll handle the rest and get back to you within 24 hours.
              </p>
              <button className="group relative w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3.5 rounded-xl text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)] active:scale-[0.98]">
                <span className="transition-transform duration-300 group-hover:-translate-x-0.5">Get My Free Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-black/8 to-transparent transition-transform duration-500" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { value: '10+', label: 'Websites built & live' },
    { value: '30x', label: 'Leads increase' },
    { value: '100%', label: 'Clear scope, real results' },
  ];

  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(139,92,246,0.07),transparent)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-5xl">

        <div className="grid md:grid-cols-3 gap-3">

          {/* Main about card — spans 2 cols */}
          <div className="md:col-span-2 bg-white/[0.03] border border-white/8 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-white/30 tracking-[0.35em] uppercase font-medium mb-5">About</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-[1.08] tracking-[-0.03em] mb-6">
                I'm Jashan Singh Virdi.
              </h2>
              <p className="text-white/55 text-sm md:text-base leading-relaxed">
                A focused, hands-on operator obsessed with one thing — making websites actually work. I've built 10+ websites for real businesses, run full growth campaigns, and delivered results like taking a brand from 2 leads a month to 3 leads a day.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mt-4">
                No bloated retainers. No vague deliverables. Clear scope, real execution, results you can measure.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/8 flex items-center gap-3">
              <button className="group flex items-center gap-2 border border-white/15 text-white/60 hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/8 hover:border-white/25 active:scale-95">
                Work with us
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Stats column */}
          <div className="flex flex-col gap-3">
            {stats.map((s, i) => (
              <div key={i} className="flex-1 bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-black text-white tracking-[-0.04em] leading-none mb-2">{s.value}</div>
                <p className="text-white/35 text-xs leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function SplineSection() {
  return (
    <section id="contact" className="relative w-full md:h-screen bg-black border-t border-white/5">
      {/* Spotlight isolated so it doesn't clip the robot */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Spotlight className="top-0 left-0 md:left-20 -top-20" fill="white" />
      </div>

      <div className="flex flex-col md:flex-row md:h-full">
        {/* Contact form — full width on mobile, 42% desktop */}
        <div className="w-full md:w-[42%] relative z-10 flex flex-col justify-center px-5 sm:px-8 md:px-16 py-16 md:py-0">
          <p className="text-[10px] text-white/30 tracking-[0.35em] uppercase font-medium mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.08] tracking-[-0.03em] mb-8">
            Let's Build<br />Something Real.
          </h2>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">Website URL</label>
              <input
                type="url"
                placeholder="https://yoursite.com"
                className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">What do you need?</label>
              <textarea
                rows={4}
                placeholder="Tell us about your business and goals..."
                className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3.5 rounded-xl text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)] active:scale-[0.98] mt-1"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-0.5">Send Message</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-black/8 to-transparent transition-transform duration-500" />
            </button>

            <p className="text-white/20 text-[10px] text-center">We reply within 24 hours. No pitch, just clarity.</p>
          </form>
        </div>

        {/* Spline robot — full width on mobile, 58% desktop */}
        <div className="relative w-full h-[70vh] md:h-auto md:flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-white/30 text-sm font-semibold tracking-wider">JASHAN SINGH VIRDI</p>
        <p className="text-white/20 text-xs sm:text-sm">© 2025 Jashan Singh Virdi. All rights reserved.</p>
        <div className="flex gap-6 text-white/30 text-sm">
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function WorkSection() {
  const sites = [
    {
      url: "https://chw.co.in",
      domain: "chw.co.in",
      name: "CHW",
      label: "Healthcare & Wellness",
    },
    {
      url: "https://activecoach.ca",
      domain: "activecoach.ca",
      name: "Charter Bus",
      label: "Charter Bus Services",
    },
    {
      url: "https://deegeegraphics.com",
      domain: "deegeegraphics.com",
      name: "DeeGee Graphics",
      label: "Design Studio",
    },
    {
      url: "https://harriertransport.ca",
      domain: "harriertransport.ca",
      name: "Harrier Transport",
      label: "Transport & Logistics",
    },
    {
      url: "https://growguides.me",
      domain: "growguides.me",
      name: "GrowGuides",
      label: "Growth & Education",
    },
  ];

  return (
    <section id="work" className="py-16 md:py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <p className="text-[10px] text-white/30 tracking-[0.35em] uppercase font-medium mb-3">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-[-0.03em]">
              Our Work
            </h2>
          </div>
          <p className="text-white/30 text-sm">{sites.length} live websites</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sites.map((site, i) => (
            <a
              key={site.domain}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              {/* Preview thumbnail via screenshot API */}
              <div className="relative h-40 overflow-hidden bg-white/5">
                <img
                  src={`https://api.microlink.io/?url=${site.url}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={site.name}
                  className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Index number */}
                <span className="absolute top-3 left-3 text-[10px] text-white/30 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card content */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm mb-0.5">{site.name}</div>
                  <div className="text-white/35 text-xs">{site.label}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/25 text-xs font-mono hidden md:block">{site.domain}</span>
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-white/40 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* 6th — and many more */}
          <div className="relative bg-white/[0.02] border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center min-h-[180px]">
            <div className="flex gap-1.5 mb-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/15" />
              ))}
            </div>
            <p className="text-white/40 font-semibold text-sm mb-1">And many more</p>
            <p className="text-white/20 text-xs">10+ websites built & live</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export function AgencyLanding() {
  return (
    <div className="bg-black">
      <NavbarModernBlock />
      <AgencyHero />
      <ProofSection />
      <ServicesSection />
      <WorkSection />
      <AuditCTA />
      <AboutSection />
      <SplineSection />
      <Footer />
    </div>
  );
}
