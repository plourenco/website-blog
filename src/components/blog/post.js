import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { MDXProvider } from '@mdx-js/react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Badge from 'react-bootstrap/Badge';
import Layout from '../layout';
import Helmet from '../layout/helmet';
import Icon from '../layout/icon';
import Anchor from './anchor';
import CodeBlock from './code-block';
import Note from './note';
import * as styles from './post.module.css';

const components = {
  h2: Anchor('h2'),
  h3: Anchor('h3'),
  h4: Anchor('h4'),
  pre: props => <div className={styles.codeHighlight} {...props} />,
  code: CodeBlock,
  u: props => <span className={styles.highlight} {...props} />,
  a: Link,
  'ul.li': List,
  Note,
};

export default function Blog({ data, pageContext }) {
  const {
    frontmatter: { title, date, category, tags, alt },
    body,
    fields: { readingTime },
  } = data.mdx;
  const { slug } = pageContext;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `https://plourenco.com${slug}`
  )}`;
  return (
    <Layout>
      <Helmet>
        <title lang="en">{alt || title}</title>
        <meta property="og:title" content={alt || title} />
      </Helmet>
      <article className={styles.blog}>
        <header className="mb-5">
          <h1>{title}</h1>
          <small className="">
            {category} — {date}, {readingTime} min read
          </small>
        </header>
        <div className={styles.body}>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
        {tags &&
          tags.map(tag => (
            <Badge key={tag} className={styles.tag}>
              {tag}
            </Badge>
          ))}
        <div className="mt-5">
          <h4>👋 Hey, did you find this content useful?</h4>
          <p>
            Let me know on{' '}
            <a target="_blank" href={twitterUrl} rel="noreferrer">
              Twitter
            </a>{' '}
            or suggest an improvement on{' '}
            <a
              target="_blank"
              href="https://github.com/plourenco/website-blog"
              rel="noreferrer"
            >
              Github
            </a>
            .
          </p>
        </div>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        alt
        date(formatString: "MMM DD, YYYY")
        category
        tags
      }
      fields {
        readingTime
      }
    }
  }
`;

function Link({ children, href }) {
  if (href.startsWith('/')) {
    return <GatsbyLink to={href}>{children}</GatsbyLink>;
  }
  const onPage = href.startsWith('#');
  return (
    <a
      href={href}
      target={onPage ? null : '_blank'}
      rel={onPage ? null : 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}

function List({ children, ...rest }) {
  return (
    <li {...rest}>
      <Icon icon={faAngleRight} />
      <span>{children}</span>
    </li>
  );
}
