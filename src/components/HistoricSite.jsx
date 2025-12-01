import React, { useState, useEffect, useRef } from 'react';
import './HistoricSite.css';

import SvgMist from './SvgMist';
import parchmentBg from '../assets/parchment-bg.png';
import mountains from '../assets/mountains.png';

// Импортируем твои 6 слоев
import pravNiz1 from '../assets/prav-niz1.png';
import pravNiz2 from '../assets/prav-niz2.png';
import levNiz1 from '../assets/lev-niz1.png';
import levNiz2 from '../assets/lev-niz2.png';
import verh1 from '../assets/verh1.png';
import verh2 from '../assets/verh2.png';

const HistoricSite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={componentRef}
      className={`site-container ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="site-bg" style={{ backgroundImage: `url(${parchmentBg})` }} />
      <div className="mist-container"><SvgMist /></div>

      {/* СЛОИ ЗАДНЕГО ПЛАНА */}
      <div className="back-clouds-container">
        <div className="cloud-png cloud-verh-2" style={{ backgroundImage: `url(${verh2})` }} />
        <div className="cloud-png cloud-lev-niz-2" style={{ backgroundImage: `url(${levNiz2})` }} />
      </div>

      {/* КОНТЕНТ */}
      <div className="site-content">
        <div className="site-image-wrapper">
          <img src={mountains} alt="Historic Site" className="site-image" />
        </div>
        <div className="site-text">
          <h2>ГОРЫ АКСУ</h2>
          <h3>ХРЕБЕТ ТЯНЬ-ШАНЯ</h3>
          <p>
            Величественные пики, хранящие тайны древних кочевников.
            Маршруты, которые меняют взгляд на мир и открывают истинную
            красоту дикой природы.
          </p>
        </div>
      </div>

      {/* СЛОИ ПЕРЕДНЕГО ПЛАНА */}
      <div className="front-clouds-container">
        <div className="cloud-png cloud-prav-niz-2" style={{ backgroundImage: `url(${pravNiz2})` }} />
        <div className="cloud-png cloud-verh-1" style={{ backgroundImage: `url(${verh1})` }} />
        {/* Дубликат для плотности */}
        <div className="cloud-png cloud-verh-1-dup" style={{ backgroundImage: `url(${verh1})` }} />
        <div className="cloud-png cloud-lev-niz-1" style={{ backgroundImage: `url(${levNiz1})` }} />
        {/* Дубликат для плотности */}
        <div className="cloud-png cloud-lev-niz-1-dup" style={{ backgroundImage: `url(${levNiz1})` }} />
        <div className="cloud-png cloud-prav-niz-1" style={{ backgroundImage: `url(${pravNiz1})` }} />
      </div>
    </section>
  );
};

export default HistoricSite;