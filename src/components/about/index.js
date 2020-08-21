import React from 'react'

export default function About() {
  return (
    <section>
      <h2>About me</h2>
      <p>
        I'm a software engineer from Portugal working at{' '}
        <a href="https://home.cern" target="_blank" className="highlight">
          CERN
        </a>
        , based in <span className="highlight danger">Switzerland</span> 🇨🇭,
        passionate about new technologies and challenges, with a special focus
        in software architecture, cloud computing, data visualization and live
        software development (also known as hot swapping).
      </p>
      <p>
        My first contact with computers started very soon, at the age of 6. A
        few years later, I started exploring Java using minecraft mechanics; a
        truly fun and enriching hobby that lead me to pursue my BSc.
      </p>
      <p>
        I follow an ever-evolving stack of technologies, including some within
        open-source projects, you can keep track on my{' '}
        <a
          href="https://github.com/plourenco"
          target="_blank"
          className="highlight">
          Github{' '}
        </a>
        .
      </p>
    </section>
  )
}
