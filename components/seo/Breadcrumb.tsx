'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StructuredData from './StructuredData';
import { breadcrumbNames } from '@/lib/breadcrumb-names';

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // Construir breadcrumb baseado na URL
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Início',
      url: 'https://www.coberturapolicarbonato.com.br',
      position: 1,
    },
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    const name =
      breadcrumbNames[segment] ||
      segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    breadcrumbItems.push({
      name,
      url: `https://www.coberturapolicarbonato.com.br${currentPath}`,
      position: index + 2,
    });
  });

  // Schema markup para Google
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <nav aria-label="Breadcrumb" className="py-4 px-4 md:px-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <li key={item.position} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-gray-900">{item.name}</span>
              ) : (
                <Link
                  href={item.url.replace(
                    'https://www.coberturapolicarbonato.com.br',
                    ''
                  )}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
