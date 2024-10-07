import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ animationData, style}) => {
  return (
    <div className="lottie-container" style={style}>
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={true}
        
      />
    </div>
  );
};

export default LottieAnimation;