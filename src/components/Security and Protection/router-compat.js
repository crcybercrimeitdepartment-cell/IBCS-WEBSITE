// src/components/Security and Protection/router-compat.js
import React, { useState, useEffect, useCallback } from 'react';

/**
 * Lightweight React Router compatibility adapter for IBCS Website.
 * Ensures URLProtectionLayer works smoothly with either:
 * - Native browser Hash navigation (#home, #about-us, #careers)
 * - HTML5 pathname navigation (/about-us, /careers)
 * - react-router-dom (if installed in the future)
 * 
 * Zero external dependencies required.
 */

// Normalized location helper
const getNormalizedLocation = () => {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '', state: null };
  }

  let state = null;
  try {
    const raw = sessionStorage.getItem('__ibcs_last_router_state');
    if (raw) state = JSON.parse(raw);
  } catch {
    // ignore
  }

  const hash = window.location.hash || '';
  let pathname = window.location.pathname || '/';

  // Normalize hash route into pathname if present (e.g., "#about-us" -> "/about-us")
  if (hash.startsWith('#/')) {
    pathname = hash.slice(1);
  } else if (hash.startsWith('#') && hash.length > 1) {
    pathname = '/' + hash.slice(1);
  }

  return {
    pathname,
    rawPathname: window.location.pathname || '/',
    hash,
    search: window.location.search || '',
    state,
  };
};

export const useLocation = () => {
  const [location, setLocation] = useState(getNormalizedLocation);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(getNormalizedLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  return location;
};

export const useNavigate = () => {
  return useCallback((to, options = {}) => {
    if (typeof window === 'undefined') return;

    if (typeof to === 'number') {
      window.history.go(to);
      return;
    }

    if (typeof to === 'string') {
      if (options?.state) {
        try {
          sessionStorage.setItem('__ibcs_last_router_state', JSON.stringify(options.state));
        } catch {
          // ignore
        }
      }

      // Convert path to hash-friendly format if website uses hash routing
      let targetUrl = to;
      if (to === '/' || to === '/homepage' || to === '/home') {
        targetUrl = window.location.pathname + '#home';
      } else if (to.startsWith('/')) {
        targetUrl = window.location.pathname + '#' + to.slice(1);
      } else if (!to.startsWith('#')) {
        targetUrl = '#' + to;
      }

      if (options?.replace) {
        window.history.replaceState(options.state || null, '', targetUrl);
      } else {
        window.location.hash = targetUrl.includes('#') ? targetUrl.split('#')[1] : targetUrl;
      }

      // Dispatch popstate so listeners react immediately
      window.dispatchEvent(new Event('popstate'));
    }
  }, []);
};

export const Link = ({ to, children, className = '', onClick, replace = false, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  const href = typeof to === 'string' && to.startsWith('/') ? `#${to.slice(1)}` : to;

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default {
  useLocation,
  useNavigate,
  Link,
};
