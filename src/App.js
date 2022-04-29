import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Patrick from './components/Patrick';
import Juliet from './components/Juliet';
import Holly from './components/Holly';
import Michael from './components/Michael';

function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [patrickSelected, setPatrickSelected] = useState(false);
  const [julietSelected, setJulietSelected] = useState(false);
  const [hollySelected, setHollySelected] = useState(false);
  const [michaelSelected, setMichaelSelected] = useState(false);

  return (
    <div>
      <Header
        setHomeSelected={setHomeSelected}
        setPatrickSelected={setPatrickSelected}
        setJulietSelected={setJulietSelected}
        setHollySelected={setHollySelected}
        setMichaelSelected={setMichaelSelected}
      />
      <main>
        {homeSelected && !patrickSelected && !julietSelected && !hollySelected && !michaelSelected ? (
          <Home />
        ) : patrickSelected && !homeSelected && !julietSelected && !hollySelected && !michaelSelected ? (
          <Patrick />
        ) : julietSelected && !homeSelected && !patrickSelected && !hollySelected && !michaelSelected ? (
          <Juliet />
        ) : hollySelected && !homeSelected && !patrickSelected && !julietSelected && !michaelSelected ? (
          <Holly />
        ) : (
          <Michael />
        )}
      </main>
    </div>
  );
}

export default App;
