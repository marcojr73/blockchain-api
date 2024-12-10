import styled from "styled-components";

export const Text = styled.p`
    width: 90%;
    font-size: .9rem;

    @media only screen and (min-width: 600px) {
        font-size: 1rem;
    }
`;

export const Social = styled.div<{ $isHidden?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`;

export const Footer = styled.footer<{ $isHidden?: boolean }>`
    transition: ease opacity .5s;
    opacity: ${props => props.$isHidden ? '0' : '1'};
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 600px) {
        gap: 2rem;
    }
`;

export const Language = styled.div`

`;

export const Button = styled.button<{ $rounded?: string, $background?: string, $color?: string }>`
    background-color: ${props => props.$background ? props.$background : '#0D1520'};
    color: ${props => props.$color ? props.$color : '#FFF'};
    border: 1px solid #FFF;
    padding: .5rem;
    cursor: pointer;
    border-radius: ${props => props.$rounded ? props.$rounded : '5px'};
`;