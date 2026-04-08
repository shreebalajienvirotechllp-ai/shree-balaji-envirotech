export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

const baseUrl = 'https://shreebalajienvirotech.com';
const today = new Date().toISOString().split('T')[0];

export const sitemapUrls: SitemapUrl[] = [
  {
    loc: `${baseUrl}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: `${baseUrl}/about`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${baseUrl}/blog`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: `${baseUrl}/manufacturing-costs`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/equipment`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/compliance`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/buyers`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/blog/biomass-pellets-complete-guide-punjab`,
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${baseUrl}/blog/stubble-burning-solution-punjab-biomass-pellets`,
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${baseUrl}/blog/coal-to-biomass-switch-industrial-boilers`,
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${baseUrl}/blog/biomass-pellet-price-punjab-2025`,
    lastmod: '2025-01-01',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    loc: `${baseUrl}/blog/biomass-pellet-suppliers-near-bathinda`,
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${baseUrl}/blog/rice-husk-pellets-benefits-manufacturing`,
    lastmod: '2024-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    loc: `${baseUrl}/awareness/industrial-fuel-costs-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/textile-mills-fuel-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/brick-kilns-biomass-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/food-processing-fuel-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/rice-mills-fuel-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/dairy-plants-fuel-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/paper-mills-fuel-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/distilleries-fuel-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/awareness/poultry-farms-fuel-punjab`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  }
];

export const sitemapXml = generateSitemap(sitemapUrls);
