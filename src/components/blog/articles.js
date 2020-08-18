import React from 'react'
import { Link } from 'gatsby'
import styles from './article.module.scss'

export default function Articles({ data }) {
  return (
    <section>
      <h2>Articles</h2>
      {data.map(({ frontmatter: { title, author, date }, fields }) => {
        return (
          <article className={styles.article}>
            <Link className="muted" to={fields.slug}>
              <h5 className={styles.title}>{title}</h5>
            </Link>
            <small className="text-muted d-block">{author}</small>
            <small className="text-muted">
              {date}, {fields.readingTime} min read
            </small>
          </article>
        )
      })}
    </section>
  )
}
