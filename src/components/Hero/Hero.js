import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome to Shawarma Hatab</h6>
        <h4 className='hero-title'><em>Hello</em> in our restaurant</h4>
        <div className='main-button'>
          <a href='brows.html'>Browse now</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;