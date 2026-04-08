import { MapPin, TrendingUp, Leaf, Factory, CircleCheck as CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { businessInfo } from '@/lib/localSEO';

interface LocationContentProps {
  city?: string;
  industry?: string;
}

export function LocationContent({ city = 'Punjab', industry }: LocationContentProps) {
  const locationData = {
    Punjab: {
      description: 'Punjab generates over 20 million tons of agricultural waste annually, making it the perfect location for biomass pellet manufacturing and supply.',
      stats: [
        { label: 'Agricultural Waste', value: '20M+ tons/year' },
        { label: 'Active Industries', value: '5,000+' },
        { label: 'Coal Consumption', value: '15M tons/year' }
      ],
      benefits: [
        'Abundant agricultural residue availability',
        'Strong industrial demand for fuel',
        'Government support for clean energy',
        'Excellent logistics and connectivity'
      ],
      industries: [
        'Textile Mills',
        'Rice Mills',
        'Food Processing',
        'Dairy Plants',
        'Distilleries',
        'Brick Kilns'
      ]
    },
    Bathinda: {
      description: 'Bathinda is strategically located in the heart of Punjab\'s agricultural belt, providing easy access to raw materials and industrial customers.',
      stats: [
        { label: 'Distance to Major Cities', value: '< 250 km' },
        { label: 'Local Industries', value: '800+' },
        { label: 'Daily Waste Generation', value: '5,000+ tons' }
      ],
      benefits: [
        'Central location in Punjab',
        'Direct access to rice and wheat belt',
        'Well-connected by road and rail',
        'Growing industrial ecosystem'
      ],
      industries: [
        'Cotton Mills',
        'Oil Mills',
        'Thermal Plants',
        'Spinning Mills',
        'Boiler Units',
        'Manufacturing Units'
      ]
    }
  };

  const data = locationData[city as keyof typeof locationData] || locationData.Punjab;

  return (
    <div className="space-y-8">
      {/* Location Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">
            Serving {city} {industry && `${industry} Industry`}
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Location Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.stats.map((stat, index) => (
          <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why This Location */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Why Choose Our {city} Operations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Industries We Serve */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Factory className="h-5 w-5 text-primary" />
            Industries We Serve in {city}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Service Coverage */}
      <Card className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20">
        <CardHeader>
          <CardTitle>Our Service Coverage</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            From our {businessInfo.address.addressLocality} facility, we efficiently serve customers across:
          </p>
          <div className="flex flex-wrap gap-2">
            {businessInfo.serviceArea.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Same-day dispatch available for orders within 100 km radius
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function CitySpecificContent({ city }: { city: string }) {
  const cityContent = {
    Ludhiana: {
      title: 'Biomass Pellet Supply to Ludhiana Industries',
      description: 'Ludhiana, the industrial hub of Punjab, has over 1,500 textile mills and manufacturing units. We provide reliable biomass pellet supply to help these industries reduce fuel costs by up to 40%.',
      keyPoints: [
        'Serving 200+ textile mills in Ludhiana',
        'Daily dispatch capacity: 100+ tons',
        'Average delivery time: 4-6 hours',
        'Dedicated logistics for Ludhiana region'
      ]
    },
    Amritsar: {
      title: 'Clean Energy Solutions for Amritsar',
      description: 'Amritsar\'s growing food processing and manufacturing sector needs sustainable energy. Our biomass pellets help businesses comply with pollution norms while cutting costs.',
      keyPoints: [
        'Supporting 150+ food processing units',
        'Special rates for bulk orders',
        'Next-day delivery guarantee',
        'Technical support for fuel transition'
      ]
    },
    Jalandhar: {
      title: 'Biomass Fuel for Jalandhar\'s Sports Goods Industry',
      description: 'Jalandhar\'s famous sports goods manufacturing units require consistent heat for production. Our premium biomass pellets ensure uninterrupted operations.',
      keyPoints: [
        'Custom pellet specifications available',
        'Moisture content < 8%',
        'Calorific value: 4200+ kcal/kg',
        'Monthly supply contracts available'
      ]
    }
  };

  const content = cityContent[city as keyof typeof cityContent];

  if (!content) return null;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border-2 border-primary/20">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <MapPin className="h-6 w-6 text-primary" />
        {content.title}
      </h3>
      <p className="text-muted-foreground mb-6">{content.description}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {content.keyPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
