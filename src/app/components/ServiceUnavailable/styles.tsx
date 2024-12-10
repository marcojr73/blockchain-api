import styled from "styled-components";

export const Bar = styled.div`
    width: 100%;
    height: 5dvh;
    background-color: #FFF;
`;

export const Body = styled.div`
    display: flex;
    height: 100dvh;
    width: 90dvw;
    margin: auto;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #FFF;
`;

export const MainText = styled.p`
    font-size: 3rem;
    text-shadow: 2px 2px 4px red;
    animation: move 1s infinite alternate;
    text-align: center;

    @keyframes move {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(10px, 20px);
        }
    }
`;

