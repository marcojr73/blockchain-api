import React, { useEffect, useState } from 'react';
import * as S from "./styles";
import { useForm } from "react-hook-form";
import Block, { IBlock } from "@/app/components/Block";
import Mining from "@/app/components/Mining";
import ServiceUnavailable from "@/app/components/ServiceUnavailable";
import Footer from '../Footer';
import Header from '../Header';
import { EStep } from '@/app/app';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal';

const Blockchain = ({
    blockchain,
    getBlockChain,
    deleteBlockChain,
    validateChain,
    invalidBlockIndex,
    setBlockChain
}: {
    blockchain: Array<IBlock>;
    getBlockChain: () => Promise<void>;
    deleteBlockChain: () => Promise<void>;
    validateChain: () => Promise<void>;
    invalidBlockIndex: number | undefined;
    setBlockChain: (arg: Array<IBlock>) => void;
}) => {
    const { register, handleSubmit, reset } = useForm<{ data: string }>();
    const [isMining, setIsMining] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { t } = useTranslation()
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

    useEffect(() => {
        if (isOpenModal) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isOpenModal]);

    return (
        <S.App>
            {
                isOpenModal &&
                <Modal setIsOpen={setIsOpenModal} />
            }
            <Header backFn={() => setBlockChain([])} helpFn={() => setIsOpenModal(true)} />
            <S.Blockchain>
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
                            <p>{t('New')}</p>
                            <S.Input placeholder='data' {...register('data')} autoFocus={true} />
                            <S.Button type="submit">{t('Add')}</S.Button>
                        </S.Form>
                    </S.Block>
                }
                {
                    isMining &&
                    <Mining />
                }
            </S.Blockchain>
            <S.Trash onClick={() => deleteBlockChain()}>{t('Delete')}</S.Trash>
            <Footer />
        </S.App>
    );
};

export default Blockchain;