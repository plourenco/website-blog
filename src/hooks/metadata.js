import { graphql, useStaticQuery } from 'gatsby'

export function useMetadata() {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          keywords
          social {
            twitter
          }
        }
      }
    }
  `)
  return meta
}
