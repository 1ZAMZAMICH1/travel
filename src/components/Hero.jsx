import React, { useState, useEffect } from 'react';
import './Hero.css';

import sky from '../assets/sky.png';
import mountains from '../assets/mountains.png';
import textMask from '../assets/text-mask.png'; // ИСПОЛЬЗУЕМ НОВЫЙ ФАЙЛ
import tulips from '../assets/tulips.png';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`hero-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Слой 1: Небо */}
      <div
        className="hero-layer sky"
        style={{
          backgroundImage: `url(${sky})`,
          transform: `translateY(${offsetY * 0.1}px)`
        }}
      />
      {/* Слой 2: Горы */}
      <div
        className="hero-layer mountains"
        style={{
          backgroundImage: `url(${mountains})`,
          transform: `translateY(${offsetY * 0.3}px)`
        }}
      />
      {/* Слой 3: Иллюзия дыры (копия неба, видимая только сквозь МАСКУ) */}
      <div
        className="hero-layer text-cutout"
        style={{
          backgroundImage: `url(${sky})`,
          maskImage: `url(${textMask})`,
          WebkitMaskImage: `url(${textMask})`,
          transform: `translateY(${offsetY * 0.3}px)`
        }}
      />
      {/* Слой 4: Тюльпаны */}
      <div
        className="hero-layer tulips"
        style={{
          backgroundImage: `url(${tulips})`,
          transform: `translateY(${offsetY * 0.8}px)`
        }}
      />
    </section>
  );
};

export default Hero;