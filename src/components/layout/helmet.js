import { useEffect, useRef } from 'react'

export default function Helmet({ children }) {
  const tags = useRef([])

  // A very simple and specific meta controller
  // Consider using react-helmet for a broader use
  useEffect(() => {
    const meta = Array.isArray(children) ? children : [children]
    tags.current.forEach(elem => elem.remove())
    for (const { type, props } of meta) {
      const elem = document.createElement(type)
      const { children, ...attrs } = props
      Object.entries(attrs).forEach(([key, val]) => elem.setAttribute(key, val))
      children && (elem.innerHTML = children)
      document.head.appendChild(elem)
      tags.current.push(elem)
    }
  }, [children])

  return null
}
