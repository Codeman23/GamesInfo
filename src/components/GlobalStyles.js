import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background: #797d86;
        }
        &::-webkit-scrollbar-track {
            background: #1d2a3b;
        }
    }
    body {
        font-family: 'Lato', sans-serif;
        width: 100%;
        background: #283e55;
    }
    h2 {
        font-size: 2.6rem;
        font-family: 'Luckiest Guy', cursive;
        letter-spacing: 2px;
        font-weight: lighter;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 2.5rem;
        }
        @media (max-width: 576px) {
            font-size: 2rem;
        }
    }
    h3 {
        font-size: 1.3rem;
        color: #333;
        margin-bottom: .5rem;
        @media (max-width: 576px) {
            font-size: 1rem;
        }
    }
    p {
        font-size: 1.2rem;
        line-height: 1.4;
        color: #333;
        @media (max-width: 576px) {
            font-size: 1rem;
        }
    }
    a {
        text-decoration: none;
        color: #333;
    }
    img {
        display: block;
        width: 100%;
    }
`;

export default GlobalStyles;
