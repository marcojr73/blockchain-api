import { EStep } from "@/app/page";
import * as S from './styles';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Loader from "../Loader";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useTranslation } from 'react-i18next';

const Menu = ({ callback, isLoading }: { callback: (arg: EStep) => void, isLoading: boolean }) => {
    const { t, i18n } = useTranslation()

    function openNewTabToLink(url: string) {
        window.open(url);
    }

    return (
        <S.Body>
            <S.Title>Blockchain
            </S.Title>

            <Loader />

            <S.Column $isHidden={isLoading}>
                <S.Text>{t('hello-1')}Hello! I'm Marco!
                    <br />
                    {t('hello-2')}
                    This application was developed with the aim of explaining the main concepts of how a blockchain works, check out my article below and come back to interact with the application
                </S.Text>

                <S.Grid>
                    <S.Item onClick={() => callback(EStep.BLOCKCHAIN)}>
                        <WidgetsIcon />
                        Application
                    </S.Item>
                    <S.Item
                        onClick={() => openNewTabToLink(URLS.article)}>
                        <GitHubIcon />
                        Repository
                    </S.Item>
                    <S.Item
                        onClick={() => openNewTabToLink(URLS.article)}>
                        <ArticleIcon />
                        Article
                    </S.Item>
                </S.Grid>
            </S.Column>

            <S.Social $isHidden={isLoading} onClick={() => openNewTabToLink('https://www.linkedin.com/in/marcojr73')}>
                <S.Text>Marco Júnior</S.Text>
                <LinkedInIcon />
            </S.Social>
        </S.Body>
    );
}

export default Menu;

const URLS = {
    article: 'https://horn-pyramid-06d.notion.site/WEB-3-Blockchain-Smart-Contracts-e-o-futuro-da-estrutura-da-Internet-116e5108d21180ee9d62f29b762cd37d?pvs=74'
}