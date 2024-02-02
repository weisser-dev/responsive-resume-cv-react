import React from 'react';
import {Wrapper, Particle, radius} from './Loader.styles';

const particles = 62;
const lapDuration = '3s';

export const Loader: React.FC = () => {
  const particlesArray = Array.from({ length: particles }, (_, index) => index + 1);

  return (
    <Wrapper>
      {particlesArray.map((i) => (
        <Particle
          key={i}
          style={{
            transform: `rotate(${(i / particles) * 720}deg) translate3d(${radius}, 0, 0)`,
            animationDelay: `${i * (parseInt(lapDuration) / particles)}s`
          }}
        />
      ))}
    </Wrapper>
  );
};

export default Loader;
