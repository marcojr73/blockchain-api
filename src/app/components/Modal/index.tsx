import React from 'react';
import * as S from './styles';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const Modal = ({ setIsOpen }: { setIsOpen: (arg: boolean) => void }) => {
    const {t} = useTranslation();
    return (
        <S.Modal>
            <S.Head onClick={() => setIsOpen(false)}>
                <CloseIcon />
            </S.Head>
            
            <ul>{t('UL')}
                <li>{t('UL-1')}</li>
                <li>{t('UL-2')}</li>
                <li>{t('UL-3')}</li>
                <li>{t('UL-4')}</li>
                <li>{t('UL-5')}</li>
                <li>{t('UL-6')}</li>
            </ul>
        </S.Modal>
    )
};

export default Modal;