import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  /* Font families */
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Space Grotesk', sans-serif;

  /* Greys */
  --color-white: #ffffff;
  --color-light: #f7f7f7;
  --color-light-gray: #eeeeee;
  --color-mid-gray: #929AAB;
  --color-dark-gray: #393E46;
  --color-black: #000000;

  /* Accent Colors (Muted Blue & Soft Orange from Linkrow) */
  --color-accent-blue: #4A6CF7;
  --color-accent-blue-hover: #3e5ae0;
  --color-accent-yellow: #FFD15C;
  --color-accent-pink: #FF6F91;

  /* States */
  --color-success: #15803d;
  --color-error: #b91c1c;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Layout */
  --container-width: 1200px;
  --gutter: 1.5rem;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--color-dark-gray);
  background-color: var(--color-light);
  transition: background-color 0.3s, color 0.3s;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select,
textarea {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-secondary);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-black);
  overflow-wrap: break-word;
}

p {
  color: var(--color-mid-gray);
  overflow-wrap: break-word;
}

`;

export default GlobalStyle;
