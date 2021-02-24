import { createElement } from 'react';

const applyDarkModeClass = `
(function () {
  try {
    const mode = localStorage.getItem('prefers-dark')
    const isDarkMode = mode == null || mode === 'true'
    if (isDarkMode) {
      document.body.classList.add('dark')
    }
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  setPreBodyComponents([script]);
};
