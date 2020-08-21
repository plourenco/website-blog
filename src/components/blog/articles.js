import React from 'react'
import { Link } from 'gatsby'
import Badge from 'react-bootstrap/Badge'
import styles from './article.module.scss'

export default function Articles({ data }) {
  return (
    <section>
      <h2>Articles</h2>
      {data.map(
        ({
          frontmatter: { title, author, date, category },
          excerpt,
          fields,
        }) => {
          return (
            <article key={title} className={styles.article}>
              <Link className="muted" to={fields.slug}>
                <h5 className={styles.title}>{title}</h5>
                <Badge className="ml-3" variant="secondary">
                  {category}
                </Badge>
              </Link>
              <small className="text-muted d-block">{author}</small>
              <small className="text-muted">
                {date}, {fields.readingTime} min read
              </small>
              {excerpt && (
                <>
                  <p className={styles.excerpt}>{excerpt}</p>
                  <p className="font-weight-bold">Read more</p>
                </>
              )}
            </article>
          )
        }
      )}
    </section>
  )
}
