import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    setHomeSelected,
    setPatrickSelected,
    setJulietSelected,
    setHollySelected,
    setMichaelSelected,
    setCandaceSelected
  } = props;

  return (
    <header>
      <div>
        <Navigation
          setHomeSelected={setHomeSelected}
          setPatrickSelected={setPatrickSelected}
          setJulietSelected={setJulietSelected}
          setHollySelected={setHollySelected}
          setMichaelSelected={setMichaelSelected}
          setCandaceSelected={setCandaceSelected}
        />
      </div>
    </header>
  )
}

export default Header;