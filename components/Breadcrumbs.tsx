import Link from 'next/link';
import SchemaMarkup from './SchemaMarkup';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://coberturapolicarbonato.com.br${item.href}`,
    })),
  };

  return (
    <>
      <SchemaMarkup type="breadcrumb" data={schema} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-semibold">{item.label}</span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-[#D4AF37] transition"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

