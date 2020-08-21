import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) {
    return () => false
  } else {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(v => parseInt(v, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  }
}

export default function CodeBlock({ children, className, metastring }) {
  const language = className.replace(/language-/, '') || ''
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  console.log(metastring, shouldHighlightLine)

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            // Ensure blank lines/spaces drop onto a new line
            if (index === tokens.length - 1 && !line.content) {
              return null
            }
            if (line.length === 1 && line[0].content === '') {
              line[0].content = ' '
            }
            if (shouldHighlightLine(index)) {
              lineProps.className = `${lineProps.className} highlight-line`
            }
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
