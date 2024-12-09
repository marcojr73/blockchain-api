import React, { useEffect, useState } from 'react';
import * as S from "@/styles";
import { useForm } from "react-hook-form";
import Block, { IBlock } from "@/app/components/Block";
import Mining from "@/app/components/Mining";
import ServiceUnavailable from "@/app/components/ServiceUnavailable";

const Blockchain = ({
    blockchain,
    getBlockChain,
    deleteBlockChain,
    validateChain,
    invalidBlockIndex
}: {
    blockchain: Array<IBlock>;
    getBlockChain: () => Promise<void>;
    deleteBlockChain: () => Promise<void>;
    validateChain: () => Promise<void>;
    invalidBlockIndex: number | undefined;
}) => {
    const { register, handleSubmit, reset } = useForm<{ data: string }>();
    const [isMining, setIsMining] = useState(false);
    const baseUrl = process.env.BASE_URL || 'http://localhost:8080/api/blockchain';

    async function onSubmit(data: { data: string }) {
        try {
            setIsMining(true);
            await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            await getBlockChain();
            reset();
        } catch (error) {
            console.warn(error);
        } finally {
            setIsMining(false);
        }
    }

    useEffect(() => {
        (async () => await getBlockChain())();
        (async () => await validateChain())();
    }, [])

    return (
        <S.App>
            <S.Title>Blockchain by marco</S.Title>
            <S.Blockchain>
                <>
                    <S.Trash className="material-symbols-outlined" onClick={() => deleteBlockChain()}
                        title='Deletar blockchain'>
                        delete
                    </S.Trash>
                    {
                        blockchain && blockchain.length >= 0 &&
                        blockchain.map((block, index) => {
                            return (
                                <>
                                    <Block key={index} block={block}
                                        isInvalidBlock={(invalidBlockIndex !== undefined && block.id >= invalidBlockIndex)}
                                        validateChain={validateChain} />

                                </>
                            )
                        })
                    }
                    {!isMining &&
                        <S.Block>
                            <S.Form onSubmit={handleSubmit(onSubmit)}>
                                <p>New block</p>
                                <S.Input placeholder='data' {...register('data')} autoFocus={true} />
                                <S.Button type="submit">Add</S.Button>
                            </S.Form>
                        </S.Block>
                    }
                    {
                        isMining &&
                        <Mining />
                    }
                </>
            </S.Blockchain>
        </S.App>
    );
};

export default Blockchain;