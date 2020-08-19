import { useEffect } from 'react'

export default function Helmet({ children }) {
  useEffect(() => {
    const meta = Array.isArray(children) ? children : [children]
    console.log(meta)
    for (const { type, props } of meta) {
      const elem = document.createElement(type)
      const { children, ...attrs } = props
      Object.entries(attrs).forEach(([key, val]) => elem.setAttribute(key, val))
      elem.innerHTML = children
      document.head.appendChild(elem)
    }
  }, [children])

  return null
}
