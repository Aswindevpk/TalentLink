import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  /* Font families */
  --font-primary: 'Parkinsans', sans-serif;
  --font-secondary: 'Poppins', sans-serif;

  /* primary colors  */
  --color-brand: #1f514c;
  --color-brand-light: #aeda94;

  /* greys  */
  --color-grey-light: #eaeae2;
  --color-grey: #777272;

  --color-white: #fffffb;
  --color-black: #000000;


  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Layout */
  --container-width: 1260px;
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
  background-color: var(--color-white);
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
  font-family: var(--font-primary);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-brand);
  overflow-wrap: break-word;
}

p {
  color: var(--color-grey);
}

`;

  

export default GlobalStyle;
