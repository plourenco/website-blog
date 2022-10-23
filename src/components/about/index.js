import React from 'react';

export default function About() {
  return (
    <section>
      <h2>About me</h2>
      <p>
        I'm a software engineer originally from{' '}
        <span className="highlight danger">Portugal</span> 🇵🇹  with a background
        ranging from software architecture, cloud computing and finance. I
        studied{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sigarra.up.pt/fcup/en/cur_geral.cur_view?pv_curso_id=885"
        >
          Computer Science as BSc
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sigarra.up.pt/feup/en/cur_geral.cur_view?pv_curso_id=10861"
        >
          Software Engineering as MSc.
        </a>
      </p>
      <p>
        My first contact with computers started very soon, at the age of 6. A
        few years later, I started exploring Java using minecraft mechanics; a
        truly fun and enriching hobby that lead me to pursue my BSc.
      </p>
      <p>
        My career started building software for finance, as I worked in a
        quantitative investment management firm that specialized in modelling
        financial markets. Most recently, I've worked at CERN, after moving to{' '}
        <span className="highlight danger">Switzerland</span> 🇨🇭, helping
        maintain an open source project and collaboration services implemented
        throughout the organization.
      </p>
      <p>
        I follow an ever-evolving stack of technologies, including some within
        open-source projects, you can keep track on my{' '}
        <a
          href="https://github.com/plourenco"
          target="_blank"
          className="highlight"
          rel="noreferrer"
        >
          Github{' '}
        </a>
        .
      </p>
    </section>
  );
}
