import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/localSEO';

export function NAPFooter() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Address */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Our Location
        </h4>
        <address className="not-italic text-muted-foreground text-sm leading-relaxed">
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="name" className="block font-medium">{businessInfo.name}</span>
            <span itemProp="streetAddress" className="block">{businessInfo.address.streetAddress}</span>
            <span itemProp="addressLocality">{businessInfo.address.addressLocality}</span>,{' '}
            <span itemProp="addressRegion">{businessInfo.address.addressRegion}</span>{' '}
            <span itemProp="postalCode">{businessInfo.address.postalCode}</span>
            <meta itemProp="addressCountry" content={businessInfo.address.addressCountry} />
          </div>
        </address>
      </div>

      {/* Contact */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" />
          Contact Us
        </h4>
        <div className="space-y-2 text-sm">
          <a
            href={`tel:${businessInfo.phone}`}
            itemProp="telephone"
            className="block text-muted-foreground hover:text-primary transition-colors"
          >
            {businessInfo.phone}
          </a>
          <a
            href={`mailto:${businessInfo.email}`}
            itemProp="email"
            className="block text-muted-foreground hover:text-primary transition-colors"
          >
            {businessInfo.email}
          </a>
        </div>
      </div>

      {/* Service Areas */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Service Areas
        </h4>
        <div className="text-muted-foreground text-sm leading-relaxed">
          <p className="mb-2">We serve across:</p>
          <ul className="space-y-1">
            {businessInfo.serviceArea.slice(0, 5).map((area) => (
              <li key={area} itemProp="areaServed" itemScope itemType="https://schema.org/City">
                <span itemProp="name">{area}</span>
              </li>
            ))}
            <li className="text-primary font-medium">+ More cities in Punjab</li>
          </ul>
        </div>
      </div>

      {/* Business Hours */}
      <div className="space-y-2">
        <h4 className="font-semibold text-white flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Business Hours
        </h4>
        <div
          className="text-muted-foreground text-sm space-y-1"
          itemProp="openingHoursSpecification"
          itemScope
          itemType="https://schema.org/OpeningHoursSpecification"
        >
          <meta itemProp="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday" />
          <meta itemProp="opens" content="09:00" />
          <meta itemProp="closes" content="18:00" />
          <p>Monday - Saturday</p>
          <p className="font-medium text-white">9:00 AM - 6:00 PM</p>
          <p className="text-muted-foreground/70">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
