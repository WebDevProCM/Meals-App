import { useState, useLayoutEffect } from 'react';

function useMediaQuery() {
  const [screenSize, setScreenSize] = useState('mobile'); // Default to mobile

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenSize(window.innerWidth > 750 ? 'desktop' : 'mobile');
    }
  }, []);

  return screenSize;
}

export default useMediaQuery;
