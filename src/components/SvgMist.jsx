import React from 'react';

const SvgMist = () => {
  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <defs>
        <filter id="mist-effect">
          {/* 1. Генерируем очень крупный, мягкий шум */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.005" // Очень низкая частота = большие, плавные формы
            numOctaves="1" // Всего один слой, без лишних деталей
            seed="5"
          >
            {/* Очень медленная анимация, почти незаметная */}
            <animate
              attributeName="seed"
              from="5"
              to="10"
              dur="60s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          {/* 2. Превращаем шум в очень мягкую прозрачность */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 -0.5 1" // Мягкий контраст
          />
          {/* 3. Сильно размываем, чтобы убрать все резкие края */}
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="white" filter="url(#mist-effect)" />
    </svg>
  );
};

export default SvgMist;