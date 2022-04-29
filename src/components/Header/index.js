import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    setHomeSelected,
    setPatrickSelected,
    setJulietSelected,
    setHollySelected,
    setMichaelSelected
  } = props;

  return (
    <header>
      <div>
        <h1>The Family Smith</h1>
      </div>
      <div>
        <Navigation
          setHomeSelected={setHomeSelected}
          setPatrickSelected={setPatrickSelected}
          setJulietSelected={setJulietSelected}
          setHollySelected={setHollySelected}
          setMichaelSelected={setMichaelSelected}
        />
      </div>
    </header>
  )
}

export default Header;