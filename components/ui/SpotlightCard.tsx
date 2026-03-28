'use client';
import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function SpotlightCard({ children, style, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      style={{
        ...style,
        position: 'relative',
        transition: 'box-shadow 0.5s ease',
        boxShadow: hovered
          ? '0 0 0 1px rgba(242, 169, 0, 0.45), 0 8px 40px rgba(242, 169, 0, 0.08)'
          : '0 0 0 1px transparent',
      }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Amber spotlight overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(242, 169, 0, 0.18) 0%, rgba(242, 169, 0, 0.04) 50%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      {/* Content above spotlight */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
