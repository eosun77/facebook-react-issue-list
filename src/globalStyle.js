import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

:root {
    /* Colors */
    --black-color:#1F2631;
    --blue-color:#0064FF;
}

body {
    font-family: "Pretendard-Regular";
    color: var(--black-color);
}
`;

export default GlobalStyle;
