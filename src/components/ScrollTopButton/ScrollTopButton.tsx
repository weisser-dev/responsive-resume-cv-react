import React from 'react';
import {ScrollTopButton, ScrollTopIcon} from './ScrollTopButton.styles';

interface ScrollToTopProps {
  show: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({show}) => {
  if (!show) return null;

  return (
    <ScrollTopButton show={show} href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <ScrollTopIcon className="bx bx-up-arrow-alt"></ScrollTopIcon>
    </ScrollTopButton>
  );
};

export default ScrollToTop;
