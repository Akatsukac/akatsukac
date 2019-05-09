module.exports = {
  siteMetadata: {
    title: `Christopher Akatsuka Personal Site`,
    description: `Powered by React`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-styled-components`
  ],
}
