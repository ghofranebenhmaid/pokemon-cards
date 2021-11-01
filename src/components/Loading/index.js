import React from 'react';
import Lottie from 'lottie-react';
import LoadingAnimation from '../../assets/Loading-animation.json';

const LoadingScreen = () => {
  return (
    <div className='loading'>
      <div className='loading__dots'>
        <Lottie animationData={LoadingAnimation} />
      </div>
    </div>
  );
};

export default LoadingScreen;
