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
  'gatsby-plugin-netlify'
]
};