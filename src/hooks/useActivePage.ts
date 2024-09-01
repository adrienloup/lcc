import { useLocation } from 'react-router-dom';

export const useActivePage = (path: string) => {
  const location = useLocation();
  let active;

  for (const substring of location.pathname.split('/')) {
    if (substring === path) {
      active = substring;
    }
  }

  return active;
};
