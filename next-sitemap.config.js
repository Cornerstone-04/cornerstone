/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cornerstoneephraim.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/404"],

  // Per-route overrides to match your original sitemap.ts
  transform: async (config, path) => {
    const lastmod = new Date().toISOString();

    if (path === "/") {
      return { loc: path, changefreq: "weekly", priority: 1.0, lastmod };
    }
    if (path === "/about") {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod };
    }
    if (path === "/projects") {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod };
    }
    if (path === "/contact") {
      return { loc: path, changefreq: "monthly", priority: 0.7, lastmod };
    }

    // Default for any other stand-alone routes you add later
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod,
    };
  },

  // No section anchors; leave empty or use to inject EXTRA real pages only.
  additionalPaths: async () => {
    return [];
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api", "/404"] },
    ],
    additionalSitemaps: [
      // e.g. "https://cornerstoneephraim.vercel.app/server-sitemap.xml",
    ],
  },
};
