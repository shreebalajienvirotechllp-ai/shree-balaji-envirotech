import { Helmet } from 'react-helmet-async';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateProductSchema,
  generateServiceSchema,
  generateAggregateRatingSchema,
  businessInfo,
  products,
  services
} from '@/lib/localSEO';

interface LocalSEOProps {
  title?: string;
  description?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  includeProducts?: boolean;
  includeServices?: boolean;
  rating?: { value: number; count: number };
  structuredDataOverride?: Record<string, unknown>;
}

export function LocalSEO({
  title,
  description,
  breadcrumbs,
  faqs,
  includeProducts = false,
  includeServices = false,
  rating,
  structuredDataOverride
}: LocalSEOProps) {
  const schemas = [];

  schemas.push(generateLocalBusinessSchema());
  schemas.push(generateOrganizationSchema());

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs));
  }

  if (includeProducts) {
    products.forEach(product => {
      schemas.push(generateProductSchema(product));
    });
  }

  if (includeServices) {
    services.forEach(service => {
      schemas.push(generateServiceSchema(service));
    });
  }

  if (rating) {
    schemas.push(generateAggregateRatingSchema(rating.value, rating.count));
  }

  if (structuredDataOverride) {
    schemas.push(structuredDataOverride);
  }

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Local Business Meta Tags */}
      <meta property="business:contact_data:street_address" content={businessInfo.address.streetAddress} />
      <meta property="business:contact_data:locality" content={businessInfo.address.addressLocality} />
      <meta property="business:contact_data:region" content={businessInfo.address.addressRegion} />
      <meta property="business:contact_data:postal_code" content={businessInfo.address.postalCode} />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content={businessInfo.phone} />

      {/* Geographic Tags */}
      <meta name="geo.region" content="IN-PB" />
      <meta name="geo.placename" content="Bathinda, Punjab" />
      <meta name="geo.position" content={`${businessInfo.geo.latitude};${businessInfo.geo.longitude}`} />
      <meta name="ICBM" content={`${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`} />

      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export function NAPSchema() {
  return (
    <div className="hidden" itemScope itemType="https://schema.org/LocalBusiness">
      <span itemProp="name">{businessInfo.name}</span>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">{businessInfo.address.streetAddress}</span>
        <span itemProp="addressLocality">{businessInfo.address.addressLocality}</span>
        <span itemProp="addressRegion">{businessInfo.address.addressRegion}</span>
        <span itemProp="postalCode">{businessInfo.address.postalCode}</span>
        <span itemProp="addressCountry">{businessInfo.address.addressCountry}</span>
      </div>
      <span itemProp="telephone">{businessInfo.phone}</span>
      <span itemProp="email">{businessInfo.email}</span>
      <link itemProp="url" href={businessInfo.url} />
      <meta itemProp="priceRange" content={businessInfo.priceRange} />
      <time itemProp="foundingDate" dateTime={businessInfo.foundingDate}>{businessInfo.foundingDate}</time>
      <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
        <meta itemProp="latitude" content={businessInfo.geo.latitude} />
        <meta itemProp="longitude" content={businessInfo.geo.longitude} />
      </div>
    </div>
  );
}
