import { MapPin, Star, ExternalLink, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/lib/localSEO';

export function GoogleBusinessProfile() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${businessInfo.name}, ${businessInfo.address.streetAddress}, ${businessInfo.address.addressLocality}, ${businessInfo.address.addressRegion}`
  )}`;

  const googleReviewUrl = `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`;

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{businessInfo.name}</h3>
            <p className="text-sm text-muted-foreground">{businessInfo.description}</p>
          </div>
          <div className="flex gap-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <address className="not-italic text-muted-foreground">
              {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality},{' '}
              {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
            </address>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <a href={`tel:${businessInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
              {businessInfo.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <a href={`mailto:${businessInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              {businessInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button asChild variant="default" className="w-full">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <Star className="h-4 w-4 mr-2" />
              Write a Review
            </a>
          </Button>
        </div>

        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Find us on{' '}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Google Maps <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function GoogleBusinessProfileIntegrationGuide() {
  return (
    <div className="prose prose-sm max-w-none">
      <h3 className="text-lg font-bold mb-4">Google Business Profile Setup Guide</h3>

      <div className="space-y-4 text-sm">
        <section>
          <h4 className="font-semibold text-foreground mb-2">1. Claim Your Business</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Visit <a href="https://www.google.com/business/" target="_blank" rel="noopener" className="text-primary hover:underline">Google Business Profile</a></li>
            <li>Search for "{businessInfo.name}" or click "Add your business"</li>
            <li>Follow verification steps (postcard, phone, or email)</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2">2. Complete Your Profile</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Business Name: {businessInfo.name}</li>
            <li>Category: Biomass Energy Equipment Supplier, Manufacturer</li>
            <li>Address: {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}</li>
            <li>Phone: {businessInfo.phone}</li>
            <li>Website: {businessInfo.url}</li>
            <li>Hours: {businessInfo.openingHours}</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2">3. Add Rich Content</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Upload high-quality photos of products, facility, and team</li>
            <li>Add business description highlighting USPs</li>
            <li>List services: Biomass Pellet Manufacturing, Industrial Supply</li>
            <li>Add attributes: Wheelchair accessible, Online estimates</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2">4. Optimize for Local SEO</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Post weekly updates about products and offers</li>
            <li>Respond to all reviews within 24 hours</li>
            <li>Use keywords: "biomass pellets Punjab", "rice husk pellets Bathinda"</li>
            <li>Enable messaging to connect with customers instantly</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2">5. Track Performance</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Monitor search queries bringing customers</li>
            <li>Track phone calls and direction requests</li>
            <li>Analyze photo views and engagement</li>
            <li>Compare performance with competitors</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-foreground mb-2">6. Service Area Setup</h4>
          <p className="text-muted-foreground mb-2">Add these service areas to your profile:</p>
          <div className="grid grid-cols-2 gap-2">
            {businessInfo.serviceArea.map((area) => (
              <span key={area} className="text-muted-foreground">• {area}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
