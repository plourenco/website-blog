const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Pedro Lourenço, Software Engineer',
    description: 'Personal website and blog by Pedro Lourenço.',
    author: 'Pedro Lourenço',
    siteUrl: 'https://plourenco.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          app: path.resolve(__dirname, 'src/'),
          components: path.resolve(__dirname, 'src/components/'),
          assets: path.resolve(__dirname, 'src/assets/'),
          static: path.resolve(__dirname, 'static/'),
        },
        extensions: ['.css', '.js', '.jsx'],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              disableBgImage: true,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'plourenco',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-175446640-1',
      },
    },
  ],
}
