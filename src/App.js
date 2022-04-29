import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Patrick from './components/Patrick';
import Juliet from './components/Juliet';
import Holly from './components/Holly';
import Michael from './components/Michael';
import Candace from './components/Candace';

function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [patrickSelected, setPatrickSelected] = useState(false);
  const [julietSelected, setJulietSelected] = useState(false);
  const [hollySelected, setHollySelected] = useState(false);
  const [michaelSelected, setMichaelSelected] = useState(false);
  const [candaceSelected, setCandaceSelected] = useState(false);

  return (
    <div>
      <Header
        setHomeSelected={setHomeSelected}
        setPatrickSelected={setPatrickSelected}
        setJulietSelected={setJulietSelected}
        setHollySelected={setHollySelected}
        setMichaelSelected={setMichaelSelected}
        setCandaceSelected={setCandaceSelected}
      />
      <main>
        {homeSelected && !patrickSelected && !julietSelected && !hollySelected && !michaelSelected && !candaceSelected ? (
          <Home />
        ) : patrickSelected && !homeSelected && !julietSelected && !hollySelected && !michaelSelected && !candaceSelected ? (
          <Patrick />
        ) : julietSelected && !homeSelected && !patrickSelected && !hollySelected && !michaelSelected && !candaceSelected ? (
          <Juliet />
        ) : hollySelected && !homeSelected && !patrickSelected && !julietSelected && !michaelSelected && !candaceSelected ? (
          <Holly />
        ) : michaelSelected && !homeSelected && !patrickSelected && !julietSelected && !hollySelected && !candaceSelected ? (
          <Michael />
        ) : (
          <Candace />
        )}
      </main>
    </div>
  );
}

export default App;
