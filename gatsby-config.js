const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Pedro Lourenço — Software Engineer',
    description: 'Personal website and blog by Pedro Lourenço.',
    author: 'Pedro Lourenço',
    siteUrl: 'https://plourenco.com',
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
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-175446640-1',
      },
    },
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map(
                ({ node: { frontmatter, fields, excerpt } }) => ({
                  ...frontmatter,
                  title: frontmatter.alt,
                  description: excerpt,
                  date: frontmatter.date,
                  url: site.siteMetadata.siteUrl + fields.slug,
                  guid: site.siteMetadata.siteUrl + fields.slug,
                  categories: frontmatter.tags,
                })
              ),
            query: `
              {
                allMdx(
                  limit: 100,
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 500)
                      frontmatter {
                        alt
                        date(formatString: "MMM DD, YYYY")
                        tags
                      }
                      fields { slug }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Pedro Lourenço's Blog",
          },
        ],
      },
    },
  ],
};
