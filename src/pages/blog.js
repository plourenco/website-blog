import React from 'react';
import { Article } from 'components/blog/article';
import Layout from 'components/layout';
import { graphql } from 'gatsby';

export default function BlogPage({ data }) {
  return (
    <Layout>
      <h2>Blog</h2>
      {data.getArticles.nodes.map(
        ({ id, frontmatter, excerpt, fields: { readingTime, slug } }) => (
          <Article
            key={id}
            {...frontmatter}
            excerpt={excerpt}
            readingTime={readingTime}
            slug={slug}
          />
        )
      )}
    </Layout>
  );
}

export const query = graphql`
  query {
    getArticles: allMdx(
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
          category
        }
        fields {
          slug
          readingTime
        }
      }
    }
  }
`;
