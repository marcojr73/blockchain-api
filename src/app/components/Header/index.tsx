import * as S from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpIcon from '@mui/icons-material/Help';

const Header = ({ backFn, helpFn }: { backFn?: () => void, helpFn?: () => void }) => {
    return (
        <S.Header>
            {
                Boolean(backFn) &&
                <S.Box onClick={() => backFn && backFn()} $left='0'>
                    <ArrowBackIcon />
                </S.Box>
            }
            <S.Title>Blockchain</S.Title>

            {
                helpFn &&
                <S.Box onClick={() => helpFn && helpFn()} $right='0'>
                    <HelpIcon />
                </S.Box>
            }
        </S.Header>
    );
}

export default Header;

