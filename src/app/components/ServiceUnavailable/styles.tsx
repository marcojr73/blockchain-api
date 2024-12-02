import styled from "styled-components";

export const Bar = styled.div`
    width: 80dvw;
    height: 5dvh;
    background-color: #FFF;
`;

export const Body = styled.div`
    display: flex;
    height: 100dvh;
    gap: 5rem;
    flex-direction: column;
    justify-content: center;
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

