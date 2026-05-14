'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, MousePointer2, BarChart3, Search, Globe, Bot } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  className?: string;
  featured?: boolean;
  badge?: string;
};

function ServiceCard({ icon, title, description, cta, className, featured, badge }: ServiceCardProps) {
  return (
    <div className={cn(
      'relative overflow-hidden rounded-xl border flex flex-col',
      featured
        ? 'border-white/30 bg-white/10'
        : 'border-white/10 bg-white/[0.03]',
      className,
    )}>
      {badge && (
        <span className="absolute top-3 right-3 text-[9px] font-semibold tracking-widest uppercase text-white/50 border border-white/15 rounded-full px-2 py-0.5">
          {badge}
        </span>
      )}
      <div className="flex-1 p-5">
        <div className={cn(
          'w-8 h-8 rounded-lg flex items-center justify-center mb-3',
          featured ? 'bg-white/20' : 'bg-white/5'
        )}>
          {icon}
        </div>
        <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
        <p className="text-white/45 text-xs leading-relaxed">{description}</p>
      </div>
      <div className="px-5 pb-4">
        <a
          href={cta === 'See Our Work' ? '#work' : '#free-audit'}
          className={cn(
            'group inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-4 py-2 transition-all duration-200 active:scale-95',
            featured
              ? 'bg-white text-black hover:bg-white/90'
              : 'border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5'
          )}
        >
          {cta}
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 h-full">

      {/* Row 1: AI Automation (2 cols featured) + CRO (1 col) */}
      <ServiceCard
        icon={<Bot className="w-4 h-4 text-white" />}
        title="AI Automation"
        description="Instagram DM & WhatsApp automation that replies, qualifies, and books leads 24/7 — without you lifting a finger."
        cta="See How It Works"
        featured
        badge="New"
        className="col-span-2"
      />
      <ServiceCard
        icon={<MousePointer2 className="w-4 h-4 text-white/60" />}
        title="CRO"
        description="We find where visitors drop off and fix it. More leads from the same traffic."
        cta="Free CRO Audit"
      />

      {/* Row 2: SEO + Paid Ads + Website Design (1 col each) */}
      <ServiceCard
        icon={<Search className="w-4 h-4 text-white/60" />}
        title="SEO"
        description="Rank higher and get found when it matters most."
        cta="Free SEO Audit"
      />
      <ServiceCard
        icon={<BarChart3 className="w-4 h-4 text-white/60" />}
        title="Paid Ads"
        description="Google & Meta ads managed end-to-end."
        cta="Start Ads"
      />
      <ServiceCard
        icon={<Globe className="w-4 h-4 text-white/60" />}
        title="Website Design"
        description="Strategy, design, copy, and dev — built to convert."
        cta="See Our Work"
      />

    </div>
  );
}
