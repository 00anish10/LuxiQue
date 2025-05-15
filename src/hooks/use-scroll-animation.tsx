import { useEffect, useState, useRef } from "react";

export function useScrollAnimation() {
  const [elements, setElements] = useState<NodeListOf<HTMLElement> | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Select all elements with animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    setElements(animatedElements as NodeListOf<HTMLElement>);

    // Create intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add animation class when element comes into view
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute('data-animation') || 'fade-in';
          entry.target.classList.add(`animate-${animationType}`);
          
          // Stop observing after animation is applied
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.1, // 10% visibility
      rootMargin: '0px 0px -50px 0px' // trigger a bit before element comes into view
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Start observing when elements are found
  useEffect(() => {
    if (elements && observerRef.current) {
      elements.forEach(element => {
        observerRef.current?.observe(element);
      });
    }
  }, [elements]);

  return null;
}
