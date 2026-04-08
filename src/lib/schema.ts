export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shree Balaji Envirotech",
  "url": "https://shreebalajienvirotech.com",
  "logo": "https://shreebalajienvirotech.com/logo.jpg",
  "description": "Leading manufacturer of premium biomass pellets in Punjab, India. Providing eco-friendly, sustainable energy solutions for industries.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bathinda",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-62806-10158",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi", "pa"]
  },
  "sameAs": [
    "https://www.instagram.com/shreebalaji_envirotech/"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shree Balaji Envirotech",
  "image": "https://shreebalajienvirotech.com/logo.jpg",
  "telephone": "+91-62806-10158",
  "email": "shreebalajienvirotech@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bathinda",
    "addressRegion": "Punjab",
    "postalCode": "151001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2070,
    "longitude": 74.9455
  },
  "priceRange": "$$",
  "openingHours": "Mo-Sa 09:00-18:00"
};

export const productSchema = (productName: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": productName,
  "brand": {
    "@type": "Brand",
    "name": "Shree Balaji Envirotech"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Shree Balaji Envirotech"
  },
  ...(price && {
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": price,
      "availability": "https://schema.org/InStock"
    }
  })
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const articleSchema = (title: string, description: string, datePublished: string, image: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "author": {
    "@type": "Organization",
    "name": "Shree Balaji Envirotech"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Shree Balaji Envirotech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://shreebalajienvirotech.com/logo.jpg"
    }
  }
});
