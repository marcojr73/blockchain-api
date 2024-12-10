import { useState } from "react";
import { IBlock } from "../components/Block";

const UseFetchBlockchain = () => {
    const [isError, setIsError] = useState(false);
    const baseUrl = process.env.BASE_URL || 'http://localhost:8080/api/blockchain';
    const [blockchain, setBlockChain] = useState<Array<IBlock>>([]);
    const [invalidBlockIndex, setInvalidBlockIndex] = useState<number>();

    async function validateChain() {
        try {
            const request = await fetch(baseUrl + '/validate');
            const response = await request.json();
            if (response >= 0) {
                setInvalidBlockIndex(response);
            } else {
                setInvalidBlockIndex(undefined);
            }
        } catch (error) {
            console.warn(error)
        }
    }

    async function deleteBlockChain() {
        try {
            await fetch(baseUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setBlockChain([]);
            getBlockChain();
            setInvalidBlockIndex(undefined);
        } catch (error) {
            console.warn(error)
        }
    }

    async function getBlockChain() {
        try {
            setIsError(false);
            const request = await fetch(baseUrl);
            console.log(request);
            const response = await request.json();
            setBlockChain(response);
            if (response.status === 404) {
                setIsError(true);
            }
        } catch (error) {
            console.warn(error);
            setIsError(true);
        }
    }

    return {
        validateChain,
        deleteBlockChain,
        getBlockChain,
        blockchain,
        invalidBlockIndex,
        isError,
        setIsError,
        setBlockChain
    }
}

export default UseFetchBlockchain;