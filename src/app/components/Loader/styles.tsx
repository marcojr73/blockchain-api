import styled from "styled-components";

export const IconBox = styled.div`
  width: fit-content;
  position: relative;
`;

export const blockchain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 45%;
  height: 140px;
  margin: 0 auto;

  & > div {
    position: absolute;
  }

  & > div:nth-child(1) {
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  & > div:nth-child(2) {
    bottom: 0;
    left: 0;
  }

  & > div:nth-child(3) {
    bottom: 0;
    right: 0;
  }
`;

export const Block = styled.div<{ $delay?: string }>`
    position: relative;
    width: 50px;
    height: 50px;
    border: 3px solid #2ec7d6;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate 7s ease-in-out infinite;
    animation-delay: ${props => props.$delay ? props.$delay : '1s'};

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        5% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(90deg);
        }
        100% {
            transform: rotate(90deg);
        }
    }

    > * {
        transform: rotate(0deg);
    }
`;
