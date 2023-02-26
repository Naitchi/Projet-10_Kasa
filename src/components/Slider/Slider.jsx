import React, { useState } from 'react';
import './slider.css';

export default function Slider({ pictures }) {
  const [index, setIndex] = useState(1);

  function nextSlide() {
    if (index !== pictures.length) {
      setIndex(index + 1);
    }
  }
  function previousSlide() {
    if (index !== 1) {
      setIndex(index - 1);
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${pictures[index - 1]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="slider"
    >
      <div className="arrows">
        <i onClick={previousSlide} className="fas fa-3x fa-chevron-left"></i>
        <i onClick={nextSlide} className="fas fa-3x fa-chevron-right"></i>
      </div>
      <p className="index">
        {index}/{pictures.length}
      </p>
    </div>
  );
}
