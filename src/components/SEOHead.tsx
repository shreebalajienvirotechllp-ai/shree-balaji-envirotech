import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedDate?: string;
  modifiedDate?: string;
  breadcrumbs?: { label: string; href: string }[];
}

const SITE_URL = 'https://shreebalajienvirotech.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const LOGO_URL = `${SITE_URL}/logo.jpg`;

// ─── WebSite Schema (sitelinks search box) ───
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "Shree Balaji Envirotech",
  "url": SITE_URL,
  "description": "Premium biomass pellet manufacturer in Punjab, India.",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "inLanguage": "en-IN",
};

// ─── LocalBusiness Schema (enhanced) ───
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "Shree Balaji Envirotech",
  "description": "Leading manufacturer of premium biomass pellets in Punjab. Sustainable, carbon-neutral energy solutions for industries including textile mills, brick kilns, rice mills, and more.",
  "url": SITE_URL,
  "telephone": ["+91-6280610158", "+91-8360410158"],
  "email": "shreebalajienvirotech@gmail.com",
  "image": LOGO_URL,
  "logo": {
    "@type": "ImageObject",
    "url": LOGO_URL,
    "width": 512,
    "height": 512,
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Grain Market",
    "addressLocality": "Bathinda",
    "addressRegion": "Punjab",
    "postalCode": "151001",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.207,
    "longitude": 74.9455,
  },
  "areaServed": [
    { "@type": "State", "name": "Punjab" },
    { "@type": "State", "name": "Haryana" },
    { "@type": "AdministrativeArea", "name": "North India" },
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00",
  },
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, UPI",
  "knowsAbout": [
    "Biomass Pellets",
    "Renewable Energy",
    "Sustainable Fuel",
    "Carbon Credits",
    "Industrial Boiler Fuel",
    "Stubble Burning Solution",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Biomass Pellet Products",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Rice Husk Pellets",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Sawdust Pellets",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Agro-Waste Pellets",
        },
      },
    ],
  },
  "sameAs": [
    "https://www.instagram.com/shreebalaji_envirotech/",
  ],
};

// ─── Organization Schema ───
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Shree Balaji Envirotech",
  "url": SITE_URL,
  "logo": LOGO_URL,
  "description": "Premium biomass pellet manufacturer providing sustainable energy solutions for industries across Punjab and India.",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-6280610158",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Punjabi"],
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-8360410158",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Punjabi"],
    },
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bathinda",
    "addressRegion": "Punjab",
    "addressCountry": "IN",
  },
  "sameAs": [
    "https://www.instagram.com/shreebalaji_envirotech/",
  ],
};

// ─── Product Schemas (multiple variants) ───
const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium Biomass Pellets",
    "description": "High-quality biomass pellets made from agricultural residue. Eco-friendly coal alternative with 4200+ kcal/kg calorific value and low ash content.",
    "brand": { "@type": "Brand", "name": "Shree Balaji Envirotech" },
    "manufacturer": { "@type": "Organization", "name": "Shree Balaji Envirotech" },
    "image": DEFAULT_OG_IMAGE,
    "material": "Agricultural residue (rice husk, wheat straw, sawdust)",
    "category": "Biomass Fuel",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Calorific Value", "value": "4200+ kcal/kg" },
      { "@type": "PropertyValue", "name": "Moisture Content", "value": "< 14%" },
      { "@type": "PropertyValue", "name": "Ash Content", "value": "< 5%" },
      { "@type": "PropertyValue", "name": "Pellet Diameter", "value": "6-25 mm" },
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "7000",
      "highPrice": "8500",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "seller": { "@type": "Organization", "name": "Shree Balaji Envirotech" },
      "areaServed": { "@type": "State", "name": "Punjab" },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "reviewCount": "50",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rice Husk Pellets",
    "description": "Premium rice husk pellets with 3800-4200 kcal/kg calorific value. Ideal for industrial boilers, brick kilns, and textile mills in Punjab.",
    "brand": { "@type": "Brand", "name": "Shree Balaji Envirotech" },
    "manufacturer": { "@type": "Organization", "name": "Shree Balaji Envirotech" },
    "material": "Rice husk",
    "category": "Biomass Fuel",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Calorific Value", "value": "3800-4200 kcal/kg" },
      { "@type": "PropertyValue", "name": "Bulk Density", "value": "~600 kg/m³" },
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "7000",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "seller": { "@type": "Organization", "name": "Shree Balaji Envirotech" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wood Pellets (Sawdust Pellets)",
    "description": "High-grade wood pellets with 4200-4500 kcal/kg calorific value. Premium quality fuel for boilers and heating applications.",
    "brand": { "@type": "Brand", "name": "Shree Balaji Envirotech" },
    "manufacturer": { "@type": "Organization", "name": "Shree Balaji Envirotech" },
    "material": "Sawdust, wood chips",
    "category": "Biomass Fuel",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Calorific Value", "value": "4200-4500 kcal/kg" },
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "8500",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31",
      "seller": { "@type": "Organization", "name": "Shree Balaji Envirotech" },
    },
  },
];

// ─── BreadcrumbList builder ───
const buildBreadcrumbSchema = (pathname: string, breadcrumbs?: { label: string; href: string }[]) => {
  const items: { name: string; url: string }[] = [
    { name: "Home", url: SITE_URL },
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbs.forEach((crumb) => {
      items.push({ name: crumb.label, url: `${SITE_URL}${crumb.href}` });
    });
  }

  // Add current page from pathname
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0) {
    const pageLabel = segments[segments.length - 1]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    items.push({ name: pageLabel, url: `${SITE_URL}${pathname}` });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
};

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  publishedDate,
  modifiedDate,
  breadcrumbs,
}: SEOHeadProps) => {
  const location = useLocation();
  const fullCanonicalUrl = canonicalUrl || `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', fullCanonicalUrl, true);
    updateMeta('og:site_name', 'Shree Balaji Envirotech', true);
    updateMeta('og:locale', 'en_IN', true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Article specific
    if (publishedDate) updateMeta('article:published_time', publishedDate, true);
    if (modifiedDate) updateMeta('article:modified_time', modifiedDate, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullCanonicalUrl);

    // GEO meta tags for local SEO
    updateMeta('geo.region', 'IN-PB');
    updateMeta('geo.placename', 'Bathinda, Punjab');
    updateMeta('geo.position', '30.2070;74.9455');
    updateMeta('ICBM', '30.2070, 74.9455');

    // ─── JSON-LD injection ───
    const addJsonLd = (id: string, schema: object) => {
      let script = document.querySelector(`script[data-schema-id="${id}"]`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema-id', id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    // Site-wide schemas (every page)
    addJsonLd('website', websiteSchema);
    addJsonLd('organization', organizationSchema);
    addJsonLd('local-business', localBusinessSchema);

    // BreadcrumbList (every page except homepage)
    if (location.pathname !== '/') {
      addJsonLd('breadcrumb', buildBreadcrumbSchema(location.pathname, breadcrumbs));
    } else {
      document.querySelector('script[data-schema-id="breadcrumb"]')?.remove();
    }

    // Product schemas (homepage + product-related pages)
    const productPages = ['/', '/manufacturing-costs', '/equipment', '/buyers', '/blog/biomass-pellet-price-punjab-2025'];
    if (productPages.includes(location.pathname)) {
      productSchemas.forEach((schema, i) => {
        addJsonLd(`product-${i}`, schema);
      });
    } else {
      // Remove product schemas on non-product pages
      productSchemas.forEach((_, i) => {
        document.querySelector(`script[data-schema-id="product-${i}"]`)?.remove();
      });
    }

    // Cleanup all schemas on unmount
    return () => {
      document.querySelectorAll('script[data-schema-id]').forEach((el) => el.remove());
    };
  }, [title, description, keywords, fullCanonicalUrl, ogImage, ogType, publishedDate, modifiedDate, location.pathname, breadcrumbs]);

  return null;
};

export default SEOHead;
