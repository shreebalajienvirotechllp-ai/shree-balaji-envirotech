import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { LocalSEO as LocalSEOHead, NAPSchema } from "@/components/LocalSEO";
import { GoogleBusinessProfile, GoogleBusinessProfileIntegrationGuide } from "@/components/GoogleBusinessProfile";
import { LocationContent, CitySpecificContent } from "@/components/LocationContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleCheck as CheckCircle, MapPin, Search, Star, TrendingUp } from "lucide-react";
import { businessInfo } from "@/lib/localSEO";

const LocalSEOPage = () => {
  return (
    <main className="min-h-screen">
      <LocalSEOHead
        title="Local SEO Services | Biomass Pellets Across Punjab | Dhruv Singla"
        description="Find biomass pellets near you. We serve 10+ cities across Punjab including Bathinda, Ludhiana, Amritsar. Same-day dispatch, expert local support."
        includeServices
        rating={{ value: 4.9, count: 127 }}
        breadcrumbs={[
          { name: "Home", url: "https://dhruvsinglabiomass.com" },
          { name: "Local Services", url: "https://dhruvsinglabiomass.com/local-seo" }
        ]}
      />
      <NAPSchema />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Serving Punjab & North India
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Find Premium Biomass Pellets
              <span className="text-primary"> Near You</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Local manufacturing in Bathinda, serving industries across Punjab with same-day dispatch
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">500+ Local Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm">Same-Day Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Profile Card */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <GoogleBusinessProfile />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Where We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable biomass pellet delivery across Punjab and neighboring states
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Primary Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Bathinda (HQ)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Ludhiana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Amritsar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Jalandhar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Patiala</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Same-day dispatch available
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Extended Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Mohali</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Chandigarh</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Moga</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Sangrur</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Barnala</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Next-day delivery
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Regional Supply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Haryana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Himachal Pradesh</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Rajasthan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Uttarakhand</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>J&K</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  2-3 day delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <LocationContent city="Punjab" />
        </div>
      </section>

      {/* City-Specific Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving Major Industrial Hubs
          </h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            <CitySpecificContent city="Ludhiana" />
            <CitySpecificContent city="Amritsar" />
            <CitySpecificContent city="Jalandhar" />
          </div>
        </div>
      </section>

      {/* NAP Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Our Location
                      </h3>
                      <address className="not-italic text-muted-foreground text-sm">
                        {businessInfo.address.streetAddress}<br />
                        {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                      </address>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <a
                        href={`tel:${businessInfo.phone}`}
                        className="text-primary hover:underline"
                      >
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href={`mailto:${businessInfo.email}`}
                        className="text-primary hover:underline text-sm"
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Saturday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Business Profile Guide */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  About Our Google Business Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <GoogleBusinessProfileIntegrationGuide />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
};

export default LocalSEOPage;
