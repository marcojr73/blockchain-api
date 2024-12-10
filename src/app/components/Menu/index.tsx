import * as S from './styles';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';

import Loader from "../Loader";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useTranslation } from 'react-i18next';
import { EStep } from '@/app/app';
import { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Menu = ({ callback, isLoading }: { callback: (arg: EStep) => void, isLoading: boolean }) => {
    const { t, i18n } = useTranslation()

    function openNewTabToLink(url: string) {
        window.open(url);
    }

    return (
        <S.Body>
            <Header/>

            <Loader />

            <S.Column $isHidden={isLoading}>
                <S.Text>
                    <strong>{t('Hello-1')}</strong>
                    <br /><br />
                    {t('Hello-2')}
                </S.Text>

                <S.Grid>
                    <S.Item onClick={() => callback(EStep.BLOCKCHAIN)}>
                        <WidgetsIcon />
                        {t('Application')}
                    </S.Item>
                    <S.Item
                        onClick={() => openNewTabToLink(URLS.article)}>
                        <GitHubIcon />
                        {t('Repository')}
                    </S.Item>
                    <S.Item
                        onClick={() => openNewTabToLink(URLS.article)}>
                        <ArticleIcon />
                        {t('Article')}
                    </S.Item>
                </S.Grid>
            </S.Column>
            <Footer/>
        </S.Body>
    );
}

export default Menu;

const URLS = {
    article: 'https://horn-pyramid-06d.notion.site/WEB-3-Blockchain-Smart-Contracts-e-o-futuro-da-estrutura-da-Internet-116e5108d21180ee9d62f29b762cd37d?pvs=74'
}