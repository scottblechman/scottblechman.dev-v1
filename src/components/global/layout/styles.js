import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    @media screen and (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-image:
            linear-gradient(
            to right, 
            #048ba8, #16db93
            );
        color: #f5f5f5;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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

export const Underlined = styled.span`
    transition: 0.4s;
    border-bottom: 1px solid #f5f5f5;
    display: inline-block;

    @media (max-width: 1024px) {
        display: inline;
    }

    &:hover {
        transform: translateY(-1px);
    }
`;

export const Container = styled.div`
    margin: 6rem;
    letter-spacing: 0.05rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const CTAButton = styled.button`
    border: 0;
    background-color: #16db93;
    box-shadow: 0 2px 0 0 #14cc89;
    color: #f5f5f5;
    padding: .5em 2em;
    border-radius: 6px;
    cursor: default;
    transition: 0.4s;

    &:hover {
        transform: translateY(-1px);
        background-color: #20e99f;
        box-shadow: 0 2px 0 0 #16db93;
        cursor: pointer;
    }
`