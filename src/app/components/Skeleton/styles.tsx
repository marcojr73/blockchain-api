import styled from "styled-components";

export const Skeleton = styled.div`
    width: 100%;
    height: 2rem;
    background-color: #b5b3b3;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 150%;
        height: 100%;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9), transparent);
        animation: loading 1s infinite linear;
    }

    @keyframes loading {
        100% {
            left: 100%;
        }
    }
`;