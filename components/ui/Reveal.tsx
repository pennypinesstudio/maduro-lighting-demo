'use client';
import { useRef, useEffect, useState, CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

// Easing: snappy ease-out — feels engineered, not theatrical
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const DURATION = '0.5s';
const DISTANCE = '10px';

export default function Reveal({ children, delay = 0, style, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // `ready` gates the hidden state so SSR renders visible (no hydration mismatch)
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setReady(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motionStyle: CSSProperties =
    !ready
      ? {}
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : `translateY(${DISTANCE})`,
          transition: `opacity ${DURATION} ${EASING} ${delay}ms, transform ${DURATION} ${EASING} ${delay}ms`,
        };

  return (
    <div ref={ref} className={className} style={{ ...style, ...motionStyle }}>
      {children}
    </div>
  );
}
