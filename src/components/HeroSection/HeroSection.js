import React from 'react';
import '../../App.css';
import { Button } from '../button/button';
import '../HeroSection/HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={require('../Media/video-2.mp4')} autoPlay loop muted />
      <h1>Find the good out there. </h1>
      <p>What Are You Looking For?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
        
      </div>
    </div>
  );
}

export default HeroSection;
