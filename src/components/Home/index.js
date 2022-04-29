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
        </ul>
      </div>
      <div className='page-info-container'>
        <h2>Greetings and Salutations from the Family Smith!</h2>
        <p>
          We have a lot of Stink between the five of us.
        </p>
      </div>
    </section>
  )
};

export default Home;