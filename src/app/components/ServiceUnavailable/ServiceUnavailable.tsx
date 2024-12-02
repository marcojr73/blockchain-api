import * as S from './styles';

const ServiceUnavailable = () => {
    return (
        <S.Body>
            <S.Bar/>
            <S.MainText>503 😢</S.MainText>
            <S.MainText>Service Unavailable</S.MainText>
            <S.Bar/>
        </S.Body>
    );
};

export default ServiceUnavailable;
