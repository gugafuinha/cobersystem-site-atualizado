import Script from 'next/script';

export default function PerformanceOptimizer() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
      
      {/* Preload critical assets */}
      <link
        rel="preload"
        href="/images/logo.png"
        as="image"
        type="image/png"
      />
      
      {/* Resource hints */}
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Critical CSS inline (if any) */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Critical above-the-fold CSS */
        body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
        * { box-sizing: border-box; }
      `}} />
      
      {/* Service Worker registration for PWA features */}
      <Script id="service-worker-register" strategy="lazyOnload">
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              // Uncomment when service worker is ready
              // navigator.serviceWorker.register('/sw.js');
            });
          }
        `}
      </Script>
    </>
  );
}
