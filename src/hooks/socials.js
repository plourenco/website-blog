import { graphql, useStaticQuery } from 'gatsby';

export function useSocials() {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            linkedIn
            github
          }
        }
      }
    }
  `);
  return social;
}
