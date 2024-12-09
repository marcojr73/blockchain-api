import * as S from './styles';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Loader from "../Loader";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useTranslation } from 'react-i18next';
import { EStep } from '@/app/app';
import { useState } from 'react';

const Menu = ({ callback, isLoading }: { callback: (arg: EStep) => void, isLoading: boolean }) => {
    const { t, i18n } = useTranslation()
    const [isEn, setIsEn] = useState(true);

    function openNewTabToLink(url: string) {
        window.open(url);
    }

    function changeLanguage() {
        if (isEn) {
            i18n.changeLanguage("pt");
            setIsEn(false);
            return;
        }
        setIsEn(true);
        i18n.changeLanguage("en");
    }

    return (
        <S.Body>
            <S.Title>Blockchain
            </S.Title>

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
                        {t('application')}
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


            <S.Footer>
                <S.Social $isHidden={isLoading} onClick={() => openNewTabToLink('https://www.linkedin.com/in/marcojr73')}>
                    <LinkedInIcon />
                    <S.Text>{t('Author')}</S.Text>
                </S.Social>
                <S.Language >
                    <S.Button
                        $rounded='5px 0 0 5px'
                        $background={!isEn ? '#FFF' : '#0D1520'}
                        $color={!isEn ? '#0D1520' : '#FFF'}
                        className={i18n.language == "pt" ? "selected" : ""}
                        onClick={() => changeLanguage()}>
                        PT
                    </S.Button>

                    <S.Button
                        $rounded='0 5px 5px 0'
                        $background={isEn ? '#FFF' : '#0D1520'}
                        $color={isEn ? '#0D1520' : '#FFF'}
                        className={i18n.language == "en" ? "selected" : ""}
                        onClick={() => changeLanguage()}>
                        EN
                    </S.Button>
                </S.Language >
            </ S.Footer>
        </S.Body>
    );
}

export default Menu;

const URLS = {
    article: 'https://horn-pyramid-06d.notion.site/WEB-3-Blockchain-Smart-Contracts-e-o-futuro-da-estrutura-da-Internet-116e5108d21180ee9d62f29b762cd37d?pvs=74'
}