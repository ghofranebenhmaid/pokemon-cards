// import React, { useEffect, useRef, useState } from 'react';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const PageNotFound = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/404-poky-heads.json'),
    });
  }, []);
  return (
    <div className='container' ref={container}>
    </div>
  );
};

export default PageNotFound;
