'use client';

import Link from 'next/link';
import { trackWhatsAppLead } from '@/components/GoogleAnalytics';

type WhatsAppLinkProps = {
  href: string;
  location: string;
  serviceSlug?: string;
  className?: string;
  children: React.ReactNode;
};

export default function WhatsAppLink({
  href,
  location,
  serviceSlug,
  className,
  children,
}: WhatsAppLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppLead({ location, serviceSlug });

    if (!navigator.sendBeacon) {
      e.preventDefault();
      setTimeout(() => {
        window.open(href, '_blank', 'noopener,noreferrer');
      }, 300);
    }
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
