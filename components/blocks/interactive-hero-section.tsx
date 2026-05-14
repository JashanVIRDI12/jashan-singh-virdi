'use client';

import React from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function InteractiveHeroSection() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section className="relative w-full h-[92vh] overflow-hidden bg-black">

      {/* 3D Robot — shifted up so it fills the frame, not sitting in the lower third */}
      <div className="absolute inset-x-0 -top-[20%] sm:-top-[35%] md:-top-[52%] bottom-0 z-0 scale-[1.05] sm:scale-[1.1] md:scale-[1.15] origin-top">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Spline watermark cover */}
      <div className="absolute bottom-0 right-0 w-36 h-10 bg-black z-20" />

      {/* Top label */}
      <div className="absolute top-5 inset-x-0 z-10 flex justify-center pointer-events-none">
        <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase font-medium">
          Jashan Singh Virdi — CRO & Web Design Studio
        </p>
      </div>

      {/* Bottom — headline + CTA pinned to bottom with readable fade */}
      <div className="absolute bottom-[8%] inset-x-0 z-10 flex flex-col items-center px-4">
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/75 to-transparent -z-10" />

        <h1 className="text-white font-black text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] text-center max-w-2xl mb-5">
          We turn websites into<br />
          <em className="not-italic text-white/60">lead & sales</em> machines.
        </h1>

        <button className="group relative flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] active:scale-95 mb-7">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">Get Your Free Website Audit</span>
          <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-500 ease-in-out" />
        </button>

        <div className="flex flex-col items-center gap-1.5 pb-6 pointer-events-none">
          <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-medium">
            Scroll to view our services
          </p>
          <ChevronDown className="w-3.5 h-3.5 text-white/20 animate-bounce" />
        </div>
      </div>

    </section>
  );
}
