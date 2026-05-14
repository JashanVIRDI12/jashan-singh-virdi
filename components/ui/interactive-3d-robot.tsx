'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setShouldLoad(true);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={<div className={`w-full h-full ${className ?? ''}`} />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
