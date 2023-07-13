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

code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.875em;
    color: #d14;
    background-color: #f7f7f9;
    border-radius: 3px;
    padding: 2px 4px;
}

pre {
    display: block;
    padding: 10px;
    margin: 0;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
}

`;

export default GlobalStyle;
