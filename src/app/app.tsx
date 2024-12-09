'use client';

import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Blockchain from "./components/Blockchain";
import ServiceUnavailable from "./components/ServiceUnavailable";
import useFetchBlockchain from "./hooks/useFetchBlockchain";

export default function App() {
    const [step, setStep] = useState(EStep.MENU);
    const [isLoading, setIsLoading] = useState(false);

    const {
        blockchain,
        deleteBlockChain,
        getBlockChain,
        invalidBlockIndex,
        isError,
        validateChain
    } = useFetchBlockchain();

    useEffect(() => {
        (async () => {
            if (step === EStep.BLOCKCHAIN) {
                setIsLoading(true);
                await getBlockChain();
                setIsLoading(false);
            }
        })();
    }, [step])

    if (isError) {
        return <ServiceUnavailable />;
    }

    if (!blockchain.length) {
        return <Menu callback={setStep} isLoading={isLoading} />;
    }

    if (blockchain.length) {
        return (
            <Blockchain
                blockchain={blockchain}
                invalidBlockIndex={invalidBlockIndex}
                deleteBlockChain={deleteBlockChain}
                getBlockChain={getBlockChain}
                validateChain={validateChain}
            />
        );
    }
    return <></>;
}

export enum EStep {
    MENU = 0,
    BLOCKCHAIN = 1,
}