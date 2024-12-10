import styled from 'styled-components';

export const Block = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isInvalidBlock',
}) <{ isInvalidBlock?: boolean }>`
    border: 2px solid ${props => props?.isInvalidBlock ? '#d93030' : "#FFF"};
    color: ${props => props?.isInvalidBlock ? '#d93030' : "#FFF"};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: auto;
    border-radius: 5px;
    width: 100%;
`;

export const Blockchain = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    width: 90dvw;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        width: 90dvw;
    }

    .shake{
        animation: shake .5s ease forwards;
    }

    @keyframes shake {
        0% {
            transform: translateX(0); 
        }
        25% {
            transform: translateX(-10px);
        }
        50% {
            transform: translateX(10px);
        }
        100% {
            transform: translateX(0);
        }
    }
`;

export const Input = styled.input<{ $block?: boolean }>`
    border: 1px solid #FFF;
    width: 100%;
    outline: none;
    background-color: ${props => props?.$block ? '#D1D1D1' : "#FFF"};
    padding: .5rem;
    border-radius: 5px;
    pointer-events: ${props => props?.$block ? 'none' : "auto"};

    :active, :focus {
        outline: none;
        border: 1px solid #1CCAD8;
    }

    :disabled {
        cursor: not-allowed;
    }
`;

export const Button = styled.button`
    background: #2f3036;
    padding: .8rem;
    color: #FFF;
    outline: none;
    border: none;
    border-radius: .5rem;
    width: 100%;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Label = styled.label`
    font-size: .8rem;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        text-align: center;
    }
`;

export const Title = styled.h1`
    color: #FFF;
    text-align: center;
    width: 100%;
`;

export const App = styled.div`
    max-width: 90dvw;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Trash = styled.button`
    border: 1px solid #F00;
    cursor: pointer;
    background: #0D1520;
    color: #FFF;
    border-radius: 5px;
    padding: .5rem;
    max-width: 450px;
    width: 100%;
    margin: auto;

    :hover{
        background: #F00;
        color: #0D1520;
    }
`;