import styled from 'styled-components';

export const Modal = styled.section`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 95dvw;
    height: 90dvh;
    background: #2f3036;
    border: 2px solid #FFF;
    z-index: 1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    ul{
        display: flex;
        padding: 0 2rem 2rem 2rem;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.5rem;
        overflow-y: auto;
    }

    li{
        font-size: 1rem;
    }

    @media only screen and (min-width: 600px) {
        ul{
            font-size: 2rem;
            padding: 4rem;
        }

        li{
            font-size: 1.5rem;
        }
    }
`;

export const Head = styled.section`
    display: flex;
    justify-content: flex-end;
    padding: .5rem;
`;