import React from 'react';
import '../App.css';
import { Button } from '@mui/material';
import './video.css';
import Id2 from './id2';
function Video2() {
  return (
    <div>
    <div className='hero-container'>
      <br/>
      <br/>
      <br/>
      <br/>

    <h1>Auto Mobile Management System</h1>
    <br/>
    <br/>
    

      <video src='/video4k.mp4' autoPlay loop muted />
      <Id2/>
      <div className='hero-btns'>
        
       
      </div>
    </div>
    </div>
  );
}

export default Video2;