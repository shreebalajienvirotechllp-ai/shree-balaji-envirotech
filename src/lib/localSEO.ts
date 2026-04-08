export const businessInfo = {
  name: "Dhruv Singla Biomass Pellets",
  legalName: "Dhruv Singla Biomass Pellets Private Limited",
  address: {
    streetAddress: "Industrial Area, Bathinda",
    addressLocality: "Bathinda",
    addressRegion: "Punjab",
    postalCode: "151001",
    addressCountry: "IN"
  },
  phone: "+91-98765-43210",
  email: "info@dhruvsinglabiomass.com",
  url: "https://dhruvsinglabiomass.com",
  logo: "https://dhruvsinglabiomass.com/logo.jpg",
  image: "https://dhruvsinglabiomass.com/og-image.jpg",
  description: "Leading manufacturer and supplier of premium biomass pellets in Punjab. We convert agricultural waste into sustainable fuel alternatives for industries across North India.",
  foundingDate: "2020",
  priceRange: "$$",
  areaServed: [
    "Punjab",
    "Haryana",
    "Himachal Pradesh",
    "Rajasthan",
    "Uttarakhand",
    "Jammu and Kashmir"
  ],
  serviceArea: [
    "Bathinda",
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    "Mohali",
    "Chandigarh",
    "Ambala",
    "Karnal",
    "Panipat"
  ],
  geo: {
    latitude: "30.2110",
    longitude: "74.9455"
  },
  openingHours: "Mo-Sa 09:00-18:00",
  sameAs: [
    "https://www.facebook.com/dhruvsinglabiomass",
    "https://www.linkedin.com/company/dhruv-singla-biomass",
    "https://twitter.com/dhruvbiomass",
    "https://www.instagram.com/dhruvsinglabiomass"
  ]
};

export const products = [
  {
    name: "Premium Rice Husk Pellets",
    description: "High-quality biomass pellets made from rice husk, perfect for industrial boilers and thermal applications.",
    price: "8500",
    priceCurrency: "INR",
    availability: "InStock",
    category: "Biomass Fuel",
    image: "https://dhruvsinglabiomass.com/products/rice-husk-pellets.jpg"
  },
  {
    name: "Wheat Straw Pellets",
    description: "Sustainable fuel pellets manufactured from wheat straw, ideal for replacing coal in industrial processes.",
    price: "7800",
    priceCurrency: "INR",
    availability: "InStock",
    category: "Biomass Fuel",
    image: "https://dhruvsinglabiomass.com/products/wheat-straw-pellets.jpg"
  },
  {
    name: "Mustard Husk Pellets",
    description: "Premium quality mustard husk biomass pellets with high calorific value for efficient energy generation.",
    price: "9200",
    priceCurrency: "INR",
    availability: "InStock",
    category: "Biomass Fuel",
    image: "https://dhruvsinglabiomass.com/products/mustard-husk-pellets.jpg"
  }
];

export const services = [
  {
    name: "Biomass Pellet Manufacturing",
    description: "Custom manufacturing of biomass pellets from various agricultural residues including rice husk, wheat straw, and cotton stalks.",
    serviceType: "Manufacturing",
    areaServed: businessInfo.areaServed
  },
  {
    name: "Industrial Fuel Supply",
    description: "Regular supply of biomass pellets to industries, ensuring consistent quality and timely delivery across Punjab.",
    serviceType: "Supply",
    areaServed: businessInfo.areaServed
  },
  {
    name: "Energy Consultation",
    description: "Expert consultation on transitioning from coal to biomass fuel, including ROI analysis and equipment recommendations.",
    serviceType: "Consulting",
    areaServed: businessInfo.areaServed
  },
  {
    name: "Custom Biomass Solutions",
    description: "Tailored biomass fuel solutions for specific industrial requirements including pellet customization and delivery schedules.",
    serviceType: "CustomSolution",
    areaServed: businessInfo.areaServed
  }
];

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessInfo.url,
    "name": businessInfo.name,
    "legalName": businessInfo.legalName,
    "description": businessInfo.description,
    "url": businessInfo.url,
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "logo": businessInfo.logo,
    "image": businessInfo.image,
    "foundingDate": businessInfo.foundingDate,
    "priceRange": businessInfo.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.streetAddress,
      "addressLocality": businessInfo.address.addressLocality,
      "addressRegion": businessInfo.address.addressRegion,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": businessInfo.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geo.latitude,
      "longitude": businessInfo.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": businessInfo.areaServed.map(area => ({
      "@type": "State",
      "name": area
    })),
    "sameAs": businessInfo.sameAs,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessInfo.phone,
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Punjabi"]
    }
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessInfo.name,
    "legalName": businessInfo.legalName,
    "url": businessInfo.url,
    "logo": businessInfo.logo,
    "description": businessInfo.description,
    "foundingDate": businessInfo.foundingDate,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.streetAddress,
      "addressLocality": businessInfo.address.addressLocality,
      "addressRegion": businessInfo.address.addressRegion,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": businessInfo.address.addressCountry
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessInfo.phone,
      "contactType": "Sales",
      "email": businessInfo.email,
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Punjabi"]
    },
    "sameAs": businessInfo.sameAs
  };
}

export function generateProductSchema(product: typeof products[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": businessInfo.name
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.priceCurrency,
      "availability": `https://schema.org/${product.availability}`,
      "seller": {
        "@type": "Organization",
        "name": businessInfo.name
      }
    }
  };
}

export function generateServiceSchema(service: typeof services[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.serviceType,
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.streetAddress,
        "addressLocality": businessInfo.address.addressLocality,
        "addressRegion": businessInfo.address.addressRegion,
        "postalCode": businessInfo.address.postalCode,
        "addressCountry": businessInfo.address.addressCountry
      }
    },
    "areaServed": service.areaServed.map(area => ({
      "@type": "State",
      "name": area
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateAggregateRatingSchema(rating: number, reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": rating.toString(),
    "reviewCount": reviewCount.toString(),
    "bestRating": "5",
    "worstRating": "1"
  };
}
