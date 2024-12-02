import React, {useEffect, useState} from 'react';
import * as S from "@/styles";
import {useForm} from "react-hook-form";
import Block, {IBlock} from "@/app/components/Block";
import Mining from "@/app/components/Mining";
import ServiceUnavailable from "@/app/components/ServiceUnavailable/ServiceUnavailable";

const Blockchain = () => {
    const {register, handleSubmit, reset} = useForm<{ data: string }>();
    const [isMining, setIsMining] = useState(false);
    const [isError, setIsError] = useState(false);
    const baseUrl = process.env.BASE_URL || 'http://localhost:8080/api/blockchain';
    const [invalidBlockIndex, setInvalidBlockIndex] = useState<number>();

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

    const [blockchain, setBlockChain] = useState<Array<IBlock>>([]);

    async function getBlockChain() {
        setIsError(false);
        const request = await fetch(baseUrl);
        const response = await request.json();
        setBlockChain(response);
        if (response.status === 404) {
            setIsError(true);
        }
    }

    useEffect(() => {
        (async () => await getBlockChain())();
        (async () => await validateChain())();
    }, [])

    async function validateChain() {
        try {
            const request = await fetch(baseUrl + '/validate');
            const response = await request.json();
            console.log(response);
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
            await getBlockChain();
            setInvalidBlockIndex(undefined);
        } catch (error) {
            console.warn(error)
        }
    }

    return isError ? <ServiceUnavailable/>
        : blockchain.length ? (
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
                                               validateChain={validateChain}/>

                                    </>
                                )
                            })
                        }
                        {!isMining &&
                            <S.Block>
                                <S.Form onSubmit={handleSubmit(onSubmit)}>
                                    <p>New block</p>
                                    <S.Input placeholder='data' {...register('data')} autoFocus={true}/>
                                    <S.Button type="submit">Add</S.Button>
                                </S.Form>
                            </S.Block>
                        }
                        {
                            isMining &&
                            <Mining/>
                        }
                    </>
                </S.Blockchain>
            </S.App>
        ) : <></>;
};

export default Blockchain;