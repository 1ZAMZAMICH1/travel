import React from 'react';
import Hero from './components/Hero';
import HistoricSite from './components/HistoricSite'; // Импортируй новый компонент
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <HistoricSite /> {/* Вот он */}
        {/* Можешь добавить еще один такой же, чтобы проверить, что он тоже анимируется */}
        {/* <HistoricSite /> */}
      </main>
    </div>
  );
}

export default App;