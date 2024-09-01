import { useEffect } from 'react';

export const ScrollToTopComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};
