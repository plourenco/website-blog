import { useEffect, useRef } from 'react';

function isEqualNode(a, b) {
  if (a.isEqualNode(b)) return true;
  if (a.tagName !== b.tagName) return false;
  if (a.tagName === 'TITLE') return true;
  if (a.tagName === 'META') {
    return ['name', 'property', 'itemprop'].reduce(
      (acc, x) =>
        acc || (a.getAttribute(x) && a.getAttribute(x) === b.getAttribute(x)),
      false
    );
  }
  if (a.tagName === 'LINK') {
    return (
      a.getAttribute('rel') === 'canonical' &&
      b.getAttribute('rel') === 'canonical'
    );
  }
  return false;
}

function useEquals(value) {
  const ref = useRef(value);

  const equals = (a, b) =>
    Array.isArray(a) && Array.isArray(b)
      ? a.filter(x => b.includes(x))
      : a === b;

  if (!equals(value, ref.current)) {
    ref.current = value;
  }
  return [ref.current];
}

export default function Helmet({ children }) {
  const tagRefs = useRef([]);

  // A very simple and specific meta controller
  useEffect(() => {
    const tags = tagRefs.current;
    const meta = Array.isArray(children) ? children : [children];
    for (const { type, props } of meta) {
      const elem = document.createElement(type);
      const { children, ...attrs } = props;
      Object.entries(attrs).forEach(([key, val]) =>
        elem.setAttribute(key, val)
      );
      children && (elem.innerHTML = children);
      const prev = Array.from(document.head.querySelectorAll(type));
      prev
        .filter(e => isEqualNode(e, elem))
        .forEach(e => e.parentNode.removeChild(e));
      document.head.appendChild(elem);
      tags.push(elem);
    }
    return () => tags.forEach(elem => elem.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useEquals(children));

  return null;
}
