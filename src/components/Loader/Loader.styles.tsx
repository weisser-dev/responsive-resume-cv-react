import styled, { keyframes } from 'styled-components';

export const particleSize = '8px';
export const radius = '80px';

const lapDuration = '3s';


const spin = keyframes`
    from {
        opacity: 0.0;
    }
    to {
        opacity: 0.6;
        transform: translate3d(-${particleSize}/2, -${particleSize}/2, 570px);
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    perspective: 500px;
`;

export const Particle = styled.i`
  display: block;
  position: absolute;
  width: ${particleSize};
  height: ${particleSize};
  border-radius: ${particleSize};
  opacity: 0;
  background: rgba(255,255,255,0.5);
  box-shadow: 0px 0px 10px rgba(255,255,255,1);
  animation: ${spin} ${lapDuration} infinite ease-in-out;
`;
