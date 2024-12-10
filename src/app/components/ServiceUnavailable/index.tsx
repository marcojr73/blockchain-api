import { EStep } from '@/app/app';
import Footer from '../Footer';
import Header from '../Header';
import * as S from './styles';

const ServiceUnavailable = ({setIsError}: {setIsError: (arg: boolean) => void}) => {
    return (
        <S.Body>
            <Header backFn={() => setIsError(false)}/>
            <S.Bar />
            <S.MainText>503 😢</S.MainText>
            <S.MainText>Service Unavailable</S.MainText>
            <S.Bar />
            <Footer />
        </S.Body>
    );
};

export default ServiceUnavailable;
