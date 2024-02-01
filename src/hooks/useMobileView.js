// src/hooks/useMobileView.js
import {useEffect, useState} from 'react';

const useMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 968);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 968);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileView;
};

export default useMobileView;
