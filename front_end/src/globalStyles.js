import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /* font-size: 16px; */
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: #a51b0b; //#4b59f7
    white-space: nowrap;
    padding: 12px 64px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.1s ease-out;
        background: #7a1b0c;
    }
`;

export default GlobalStyles;
