import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    body {
        background-color: #1c77c3;
        color: #f5f5f5;
        font-family: 'Poppins', sans-serif;
    }

    a {
        color: #f5f5f5;
        text-decoration: none;
    }
`;

export const HoverUnderline = styled.span`
    transition: 0.4s;
    border-bottom: 1px solid transparent;

    &:hover {
        border-color: #f5f5f5;
    }
`;