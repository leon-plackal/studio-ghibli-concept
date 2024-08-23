'use client'
import { useEffect } from 'react';

const useParallaxEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const elements = document.querySelectorAll('[data-parallax]');

      elements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const x = (clientX - window.innerWidth / 2) * speed;
        const y = (clientY - window.innerHeight / 2) * speed;

        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export default useParallaxEffect;
