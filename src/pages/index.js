import React from 'react'
import { Article } from 'components/blog/article'
import Heading from 'components/index/heading'
import Layout from 'components/layout'
import { graphql } from 'gatsby'

export default function HomePage({ data }) {
  return (
    <Layout>
      <Heading />
      <h3>My blog posts</h3>
      {data.getLatestArticles.nodes.map(
        ({
          frontmatter: { title, author, date, category },
          excerpt,
          fields: { readingTime, slug },
        }) => {
          return (
            <Article
              {...{ title, author, date, category, excerpt, readingTime, slug }}
            />
          )
        }
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    getLatestArticles: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 5
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          author
          category
        }
        fields {
          slug
          readingTime
        }
      }
    }
  }
`
