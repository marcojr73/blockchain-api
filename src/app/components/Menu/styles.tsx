import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90dvw;
    height: 100dvh;
    margin: auto;
`;

export const Text = styled.p`
    width: 90%;
`;

export const Title = styled.h1<{ $isHidden?: boolean }>`
    font-size: 2rem;
    text-align: center;
    transition: ease opacity .5s;
    opacity: ${props => props.$isHidden ? '0' : '1'};
`;

export const Item = styled.div`
    width: 100%;
    padding: .7rem;
    border: 1px solid #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
    transition: ease opacity .5s;
    opacity: ${props => props.$isHidden ? '0' : '1'};
`;