import { useDebugValue, useEffect, useState } from 'react';
export const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue(`${queryValue}`, (name) => {
    return name + 'modificado';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);
    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };
    matchMedia.addEventListener('change', handleChange);
    setMatch(Boolean(matchMedia.matches));

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);
  return match;
};
