const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Pedro Lourenço — Software Engineer',
    description: 'Personal website and blog by Pedro Lourenço.',
    author: 'Pedro Lourenço',
    url: 'https://plourenco.com',
    keywords: 'software, engineer, java, javascript, react, pedro, lourenco',
    social: {
      twitter: 'pedroglourenco',
      linkedIn: 'pedrogilourenco',
      github: 'plourenco',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          app: path.resolve(__dirname, 'src/'),
          components: path.resolve(__dirname, 'src/components/'),
          hooks: path.resolve(__dirname, 'src/hooks'),
          assets: path.resolve(__dirname, 'src/assets/'),
          static: path.resolve(__dirname, 'static/'),
        },
        extensions: ['.css', '.js', '.jsx'],
      },
    },
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
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
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
};
