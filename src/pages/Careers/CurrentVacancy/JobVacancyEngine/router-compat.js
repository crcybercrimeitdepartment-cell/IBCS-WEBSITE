import { useState, useEffect } from 'react';

/**
 * Lightweight react-router-dom compatibility module
 * Provides useNavigate and useLocation without requiring react-router-dom package.
 */

export const useNavigate = () => {
  return (to, options) => {
    if (typeof to === 'number') {
      window.history.go(to);
    } else if (typeof to === 'string') {
      // Store state in sessionStorage or history state if provided
      if (options?.state) {
        try {
          sessionStorage.setItem('__last_router_state', JSON.stringify(options.state));
        } catch (e) {
          /* ignore */
        }
      }
      if (to.startsWith('/')) {
        window.location.hash = `#${to}`;
      } else {
        window.location.hash = `#/${to}`;
      }
    }
  };
};

export const useLocation = () => {
  const [loc, setLoc] = useState(() => {
    let state = null;
    try {
      const stored = sessionStorage.getItem('__last_router_state');
      if (stored) state = JSON.parse(stored);
    } catch (e) {
      /* ignore */
    }
    return {
      pathname: window.location.pathname,
      hash: window.location.hash,
      search: window.location.search,
      state,
    };
  });

  useEffect(() => {
    const onHash = () => {
      let state = null;
      try {
        const stored = sessionStorage.getItem('__last_router_state');
        if (stored) state = JSON.parse(stored);
      } catch (e) {
        /* ignore */
      }
      setLoc({
        pathname: window.location.pathname,
        hash: window.location.hash,
        search: window.location.search,
        state,
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return loc;
};

export const useParams = () => ({});
