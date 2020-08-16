import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, '') || ''

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
