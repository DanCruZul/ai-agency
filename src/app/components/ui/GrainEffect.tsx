import { memo } from "react";

export const GrainEffect = memo(() => {
  return (
    <svg
      className="fixed inset-0 z-[-1] opacity-[0.2] pointer-events-none"
      width="100%"
      height="100%"
    >
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#grainy)"></rect>
    </svg>
  );
});

// Add displayName to the GrainEffect component
GrainEffect.displayName = "GrainEffect";
