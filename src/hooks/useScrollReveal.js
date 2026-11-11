import { useEffect, useRef } from 'react';

export default function useScrollReveal(selector) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;

    const elements = selector ? root.querySelectorAll(selector) : [root];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = 'true';
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.15 });

    root.dataset.reveal = 'ready';
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      delete root.dataset.reveal;
      elements.forEach((element) => delete element.dataset.visible);
    };
  }, [selector]);

  return rootRef;
}
