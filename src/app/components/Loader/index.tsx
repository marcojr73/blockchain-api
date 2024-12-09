import * as S from './styles';

const Loader = () => {
    return (
        <S.blockchain>

            <S.Block></S.Block>

            <S.Block $delay="3s"></S.Block>

            <S.Block $delay="7s"></S.Block>

        </S.blockchain>
    )
}

export default Loader