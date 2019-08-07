module.exports = {
  siteMetadata: {
    title: `Villa Du Lac by Omroom`,
    description: `Hand crafted wellness retreats in beautiful rural Thailand`,
    author: `cooperda`,
    siteUrl: "https://www.villadulac.net",
    image: "/images/grounds1.jpg",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
