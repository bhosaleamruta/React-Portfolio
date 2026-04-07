import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
          }
        });
      },
      { threshold }
    );

    const items = el.querySelectorAll('.rv');
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 70}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
