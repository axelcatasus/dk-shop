/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `webshop`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "5kC2tLpa7uhTSPnNkTLN_TiNdvLD_G44OCYPaq3vAGA",
      "spaceId": "dphdxqy6qqbr"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Donkey Kong Shop",
      short_name: "DK Shop",
      start_url: "/",
      background_color: "yellow",
      theme_color: "red",
      display: "standalone",
      icon: "src/images/icon.png",
      crossOrigin: `use-credentials`,
    },
  },
  {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      mergeSecurityHeaders: true, // boolean to turn off the default security headers
      mergeCachingHeaders: true, // boolean to turn off the default caching headers
      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    },
  }
]
};