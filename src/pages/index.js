import React from 'react'
import Articles from 'components/blog/articles'
import Heading from 'components/index/heading'
import Layout from 'components/layout'
import { graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function HomePage({ data }) {
  return (
    <Layout>
      <Heading />
      <Articles data={data.getLatestArticles.nodes} />
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
