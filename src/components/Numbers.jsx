import React, { useEffect, useRef, useState } from 'react';
import './Numbers.css';

const stats = [
  { value: 2,  suffix: '+', label: 'Years Experience' },
  { value: 25, suffix: '%', label: 'UX Improvement' },
  { value: 5,  suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Sites Maintained' },
];

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}

function StatItem({ value, suffix, label }) {
  const { ref, count } = useCountUp(value);
  return (
    <div className="num-item" ref={ref}>
      <div className="num-val grad-text">{count}{suffix}</div>
      <div className="num-lbl">{label}</div>
    </div>
  );
}

export default function Numbers() {
  return (
    <section id="numbers" className="numbers-section">
      <div className="numbers-grid">
        {stats.map(s => <StatItem key={s.label} {...s} />)}
      </div>
    </section>
  );
}
