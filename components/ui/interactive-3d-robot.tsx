'use client';

import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  return (
    <Suspense fallback={<div className={`w-full h-full ${className ?? ''}`} />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
