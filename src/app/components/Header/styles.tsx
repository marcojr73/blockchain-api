import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;
`;

export const Box = styled.div<{$left?: string, $right?: string}>`
    cursor: pointer;
    position: absolute;
    margin: auto;
    left: ${props => props.$left ? props.$left : 'auto'};
    right: ${props => props.$right ? props.$right : 'auto'};
    top: 20%;
    bottom: 0;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    transition: ease opacity .5s;
    
    @media only screen and (min-width: 600px) {
        font-size: 2.5rem;
    }
`;