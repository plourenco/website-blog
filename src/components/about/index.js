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
        My career started building software for finance, as I worked in a
        quantitative investment management firm that specialized in modelling
        financial markets. Presently, I'm part of Cisco, working on advanced
        solutions for a better customer experience. With a passion for learning
        and an insatiable curiosity, I rarely settle for comfort.
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
