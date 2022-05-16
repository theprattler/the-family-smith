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
          <li>
            <span>Image 08</span>
          </li>
          <li>
            <span>Image 09</span>
          </li>
          <li>
            <span>Image 10</span>
          </li>
        </ul>
      </div>
      <div className='info-container'>
        <div>
          <h2 className='home-h2'>We are The Family Smith!</h2>
        </div>
        <div>
          <p className='home-p'>
            Welcome to our little corner of the internet! The quick summary: We are four humans and a furry feline who moved to Clayton, North Carolina, in 2020 after spending our first twelve years together in the Nashville, Tennessee, area. If that has whet your appetite (which of course it has), then feel free to explore each or our pages to get to know us better. Thanks for spending some time with us!
          </p>
        </div>
      </div>
    </section>
  )
};

export default Home;