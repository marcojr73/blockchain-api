import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90dvw;
    height: 100dvh;
    margin: auto;

    @media only screen and (min-width: 600px) {
        width: 50dvw;
    }
`;

export const Text = styled.p`
    width: 90%;
    font-size: .9rem;

    @media only screen and (min-width: 600px) {
        font-size: 1rem;
    }
`;

export const Title = styled.h1<{ $isHidden?: boolean }>`
    font-size: 1.5rem;
    text-align: center;
    transition: ease opacity .5s;
    opacity: ${props => props.$isHidden ? '0' : '1'};
    
    @media only screen and (min-width: 600px) {
        font-size: 2.5rem;
    }
`;

export const Item = styled.div`
    width: 100%;
    padding: .7rem;
    border: 1px solid #FFF;
    border-radius: 5px;
    font-size: .7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    :hover{
        border: 3px solid #FFF;
    }

    @media only screen and (min-width: 600px) {
        font-size: 1rem;
        padding: 1.5rem;
    }
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    grid-gap: .7rem;
    width: 100%;
`;


export const Column = styled.div<{ $isHidden?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    transition: ease opacity .5s;
    opacity: ${props => props.$isHidden ? '0' : '1'};
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
    border-radius: ${props => props.$rounded ? props.$rounded : '5px'};
`;