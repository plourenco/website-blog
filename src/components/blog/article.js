import React from 'react';
import { Link } from 'gatsby';
import Badge from 'react-bootstrap/Badge';
import * as styles from './article.module.css';

export function Article({
  title,
  author,
  category,
  excerpt,
  date,
  readingTime,
  slug,
}) {
  return (
    <article key={title} className={styles.article}>
      <Link className="muted" to={slug}>
        <h5 className={styles.title}>{title}</h5>
        <Badge className={`ml-lg-3 mb-lg-0 mb-2 ${styles.badge}`}>
          {category}
        </Badge>
      </Link>
      {author && <small className="text-muted d-block">{author}</small>}
      <small className="text-muted">
        {date}, {readingTime} min read
      </small>
      {excerpt && (
        <>
          <p className={styles.excerpt}>{excerpt}</p>
          <Link className="muted" to={slug}>
            Read more
          </Link>
        </>
      )}
    </article>
  );
}
