'use client';

import { useEffect } from 'react';
import { trackScroll90 } from './GoogleAnalytics';

export default function ScrollTracker() {
  useEffect(() => {
    let scroll90Tracked = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      if (scrollPercent >= 90 && !scroll90Tracked) {
        scroll90Tracked = true;
        trackScroll90();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}

