import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Epunda Slab", serif;
    }

    html, body, #root {
        min-height: 100%;
        background: #161616;
        color: #eee;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font: inherit;
    }

    :root {
        --container-padding: 20px;
    }

    @media (max-width: 768px) {
        :root { --container-padding: 16px; }
    }

    @media (max-width: 480px) {
        :root { --container-padding: 12px; }
    }
`