import React from 'react';
import { Article } from 'components/blog/article';
import Layout from 'components/layout';
import { graphql } from 'gatsby';

export default function BlogPage({ data }) {
  return (
    <Layout>
      <h2>Blog</h2>
      {data.getArticles.nodes.map(
        ({
          frontmatter: { title, author, date, category },
          excerpt,
          fields: { readingTime, slug },
        }) => {
          return (
            <Article
              {...{ title, author, date, category, excerpt, readingTime, slug }}
            />
          );
        }
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
