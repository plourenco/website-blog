import React from 'react'
import { useSocials } from 'hooks/socials'

export default function Why() {
  const { twitter } = useSocials()
  return (
    <section>
      <h3>The blog</h3>
      <p>
        During some time, across many development stacks, I found myself
        researching the same topics over and over again, repeating questions
        I've known the answer to previously. Some notions were crucial to my
        learning process and bookmarking them just wasn't enough.
      </p>
      <p>
        For that reason, following the creation of my personal notes, I decided
        to share some of the topics I learn everyday. Also, some links really
        deserve more hits in their page-rank! There is no interest or
        newsletters involved. Most of the posts are written or compiled by me.
        In case you do not agree or feel something could be improved, please{' '}
        <a target="_blank" href={`https://twitter.com/${twitter}`}>
          contact me
        </a>{' '}
        or suggest an improvement on{' '}
        <a target="_blank" href="https://github.com/plourenco/website-blog">
          Github
        </a>
        .
      </p>
    </section>
  )
}
