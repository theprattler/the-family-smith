import React, { useEffect, useState } from 'react';

function Navigation(props) {
  const categories = [
    {name: 'Home'},
    {name: 'Patrick'},
    {name: 'Juliet'},
    {name: 'Holly'},
    {name: 'Michael'},
    {name: 'Candace'}
  ];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const {
    setHomeSelected,
    setPatrickSelected,
    setJulietSelected,
    setHollySelected,
    setMichaelSelected,
    setCandaceSelected
  } = props;
  const categorySelected = (name) => {
    if (name === 'Home') {
      setHomeSelected(true)
      setPatrickSelected(false)
      setJulietSelected(false)
      setHollySelected(false)
      setMichaelSelected(false)
      setCandaceSelected(false)
    } else if (name === 'Patrick') {
      setHomeSelected(false)
      setPatrickSelected(true)
      setJulietSelected(false)
      setHollySelected(false)
      setMichaelSelected(false)
      setCandaceSelected(false)
    } else if (name === 'Juliet') {
      setHomeSelected(false)
      setPatrickSelected(false)
      setJulietSelected(true)
      setHollySelected(false)
      setMichaelSelected(false)
      setCandaceSelected(false)
    } else if (name === 'Holly') {
      setHomeSelected(false)
      setPatrickSelected(false)
      setJulietSelected(false)
      setHollySelected(true)
      setMichaelSelected(false)
      setCandaceSelected(false)
    } else if (name === 'Michael') {
      setHomeSelected(false)
      setPatrickSelected(false)
      setJulietSelected(false)
      setHollySelected(false)
      setMichaelSelected(true)
      setCandaceSelected(false)
    } else if (name === 'Candace') {
      setHomeSelected(false)
      setPatrickSelected(false)
      setJulietSelected(false)
      setHollySelected(false)
      setMichaelSelected(false)
      setCandaceSelected(true)
    }
  };

  useEffect(() => {
    document.title = 'The Family Smith: ' + currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul className='nav-links'>
        {categories.map((category) => (
          <li key={category.name} onClick={() => {
            categorySelected(category.name)
            setCurrentCategory(category)
          }} className={currentCategory.name === category.name}>
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;