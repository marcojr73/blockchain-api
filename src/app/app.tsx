'use client';

import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Blockchain from "./components/Blockchain";
import ServiceUnavailable from "./components/ServiceUnavailable";
import useFetchBlockchain from "./hooks/useFetchBlockchain";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        blockchain,
        deleteBlockChain,
        getBlockChain,
        invalidBlockIndex,
        isError,
        setIsError,
        validateChain,
        setBlockChain
    } = useFetchBlockchain();

    async function startBlockchain() {
        setIsLoading(true);
        await getBlockChain();
        setIsLoading(false);
    }

    if (isError) {
        return <ServiceUnavailable setIsError={setIsError}/>;
    }

    if (!blockchain.length) {
        return <Menu callback={startBlockchain} isLoading={isLoading} />;
    }

    if (blockchain.length) {
        return (
            <Blockchain
                blockchain={blockchain}
                setBlockChain={setBlockChain}
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