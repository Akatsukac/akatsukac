module.exports = {
  siteMetadata: {
    title: `Christopher Akatsuka's Personal Site`,
    description: `Christopher Akatsuka's personal site powered 
    by React with the Gatsby framework`,
    siteUrl: `https://www.akatsukac.com`,
    author: `Christopher Akatsuka`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-extract-schema`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-favicon`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-styled-components`
  ]
}
