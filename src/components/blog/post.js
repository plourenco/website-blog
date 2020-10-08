import React from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDXProvider } from '@mdx-js/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Badge from 'react-bootstrap/Badge'
import Layout from '../layout'
import Anchor from './anchor'
import CodeBlock from './code-block'
import Note from './note'
import './post.scss'

const components = {
  h2: Anchor('h2'),
  h3: Anchor('h3'),
  h4: Anchor('h4'),
  pre: props => <div className="code-highlight" {...props} />,
  code: CodeBlock,
  u: props => <span className="highlight" {...props} />,
  'ul.li': props => {
    return (
      <li {...props}>
        <FontAwesomeIcon icon={faAngleRight} />
        <span>{props.children}</span>
      </li>
    )
  },
  Note,
}

export default function Blog({ data, pageContext }) {
  const {
    frontmatter: { title, date, category, tags },
    body,
    fields: { readingTime },
  } = data.mdx
  const { slug } = pageContext
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `https://plourenco.com${slug}`
  )}`
  return (
    <Layout>
      <article className="blog">
        <header className="mb-5">
          <h1>{title}</h1>
          <small className="">
            {category} — {date}, {readingTime} min read
          </small>
        </header>
        <div className="body">
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
        {tags &&
          tags.map(tag => (
            <Badge key={tag} variant="secondary" className="tag">
              {tag}
            </Badge>
          ))}
        <div className="mt-5">
          <h4>👋 Hey, did you find this content useful?</h4>
          <p>
            Let me know on{' '}
            <a target="_blank" href={twitterUrl}>
              Twitter
            </a>{' '}
            or edit this page on{' '}
            <a target="_blank" href="https://github.com/plourenco/website-blog">
              Github
            </a>
            .
          </p>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        category
        tags
      }
      fields {
        readingTime
      }
    }
  }
`
