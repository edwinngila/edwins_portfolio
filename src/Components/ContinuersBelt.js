import React, { useEffect, useRef } from 'react';

const ContinuousBelt = ({ images, beltWidth, beltHeight, speed }) => {
  const beltRef = useRef(null);

  useEffect(() => {
    const belt = beltRef.current;
    let currentPosition = 0;
    let intervalId;

    const moveImages = () => {
      currentPosition -= speed;
      belt.style.transform = `translateX(${currentPosition}px)`;

      if (currentPosition <= -belt.offsetWidth) {
        currentPosition = 0;
      }
    };

    intervalId = setInterval(moveImages, 50);

    return () => clearInterval(intervalId);
  }, [images, speed]);

  return (
     <div className='row'>
        <div
      ref={beltRef}
      style={{
        display: 'flex',
        width: `${beltWidth}px`,
        height: `${beltHeight}px`,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className='p-1'
          style={{
            width: `${beltWidth / images.length}px`,
            height: `${beltHeight}px`,
            display: 'inline-block',
          }}
        />
      ))}
      {images.map((image, index) => (
        <img
          key={`${index}-copy`}
          src={image}
          className='p-1'
          alt={`Image ${index} copy`}
          style={{
            width: `${beltWidth / images.length}px`,
            height: `${beltHeight}px`,
            display: 'inline-block',
          }}
        />
      ))}
        </div>
     </div>
  );
};

export default ContinuousBelt;