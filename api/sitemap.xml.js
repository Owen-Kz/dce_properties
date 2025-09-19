// api/sitemap.xml.js
export default function handler(req, res) {
  const baseUrl = 'https://www.dcepropertiesmgt.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    { url: '/', priority: '1.0', changefreq: 'monthly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/partners', priority: '0.7', changefreq: 'monthly' },
    { url: '/properties', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.8', changefreq: 'monthly' },
    { url: '/investors', priority: '0.8', changefreq: 'monthly' },
    { url: '/artisans', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(({ url, priority, changefreq }) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}