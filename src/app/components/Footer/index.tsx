import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    const { t, i18n } = useTranslation()
    const [isEn, setIsEn] = useState(true);

    function changeLanguage() {
        if (isEn) {
            i18n.changeLanguage("pt");
            setIsEn(false);
            return;
        }
        setIsEn(true);
        i18n.changeLanguage("en");
    }

    function openNewTabToLink(url: string) {
        window.open(url);
    }

    return (
        <S.Footer>
            <S.Social onClick={() => openNewTabToLink('https://github.com/marcojr73')}>
                <GitHubIcon />
                <S.Text>marcojr73</S.Text>
            </S.Social>
            <S.Social onClick={() => openNewTabToLink('https://www.linkedin.com/in/marcojr73')}>
                <LinkedInIcon />
                <S.Text>marcojr73</S.Text>
            </S.Social>
            <S.Language>
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
    )
}

export default Footer;