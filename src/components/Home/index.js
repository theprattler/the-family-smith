import React from 'react';

function Home() {
  return (
    <section>
      <div>
        <ul className='home-bg-slideshow'>
          <li>
            <span>Image 01</span>
          </li>
          <li>
            <span>Image 02</span>
          </li>
          <li>
            <span>Image 03</span>
          </li>
          <li>
            <span>Image 04</span>
          </li>
          <li>
            <span>Image 05</span>
          </li>
          <li>
            <span>Image 06</span>
          </li>
          <li>
            <span>Image 07</span>
          </li>
        </ul>
      </div>
      <div className='home-info-container'>
        <div>
          <h2>Greetings and Salutations from The Family Smith!</h2>
        </div>
        <div>
          <p className='p-margin-top'>
            We are but four (plus one) stinky people living in Clayton, North Carolina. Michael and Holly married in 2008, and it has been nothing but pure marital bliss ever since. Two stinky but precious kids later, and a dang rotten cat to boot, we blaze the trail before us, seeking wild adventure and loving embraces. Want to get to know us better? Explore each of our pages.
          </p>
        </div>
      </div>
    </section>
  )
};

export default Home;