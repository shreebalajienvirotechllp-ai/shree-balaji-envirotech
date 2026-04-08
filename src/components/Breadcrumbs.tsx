import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Chrome as Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  "about": "About Us",
  "blog": "Blog",
  "buyers": "Buyers",
  "compliance": "Compliance",
  "equipment": "Equipment",
  "manufacturing-costs": "Manufacturing Costs",
  "awareness": "Industries",
  "textile-mills-fuel-punjab": "Textile Mills",
  "rice-mills-fuel-punjab": "Rice Mills",
  "dairy-plants-fuel-punjab": "Dairy Plants",
  "paper-mills-fuel-punjab": "Paper Mills",
  "distilleries-fuel-punjab": "Distilleries",
  "poultry-farms-fuel-punjab": "Poultry Farms",
  "brick-kilns-biomass-punjab": "Brick Kilns",
  "food-processing-fuel-punjab": "Food Processing",
  "industrial-fuel-costs-punjab": "Industrial Fuel",
};

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from path if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        label: routeLabels[segment] || segment.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        path: isLast ? undefined : currentPath,
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  if (breadcrumbItems.length === 0) return null;

  // Generate JSON-LD for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shreebalajienvirotech.com"
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.path && { "item": `https://shreebalajienvirotech.com${item.path}` })
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
        <Link
          to="/"
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only md:not-sr-only">Home</span>
        </Link>
        
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            {item.path ? (
              <Link
                to={item.path}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;
