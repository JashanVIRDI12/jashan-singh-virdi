"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BentoPricing } from "@/components/ui/bento-pricing";

export function PricingScrollSection() {
  return (
    <div id="services" className="relative bg-black overflow-hidden border-t border-white/5">
      {/* Minimal purple gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,92,246,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(109,40,217,0.08),transparent)]" />

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="mb-4">
              <p className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-medium mb-4">
                Services
              </p>
              <h2 className="text-white font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em]">
                What We Do
              </h2>
              <p className="text-white/40 text-sm md:text-base mt-3 max-w-md mx-auto leading-relaxed">
                Everything your website needs to convert visitors into customers.
              </p>
            </div>
          }
        >
          <BentoPricing />
        </ContainerScroll>
      </div>
    </div>
  );
}
