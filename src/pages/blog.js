import React from 'react'
import Articles from 'components/blog/articles'
import Layout from 'components/layout'
import { graphql } from 'gatsby'

export default function Blog({ data }) {
  return (
    <Layout>
      <Articles data={data.allMdx.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query getArticles {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          author
        }
        fields {
          slug
          readingTime
        }
      }
    }
  }
`
