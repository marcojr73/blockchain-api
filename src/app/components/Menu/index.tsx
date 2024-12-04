import { EStep } from "@/app/page";
import * as S from './styles';

const Menu = ({ callback }: { callback: (arg: EStep) => void }) => {

    function openNewTabToLink(url: string) {
        window.open(url);
    }

    return (
        <S.Body>
            <S.Text>Hello! I am Marco and this is the implementation of my blockchain,
                here you can understand the basic principles of how a blockchain works
            </S.Text>
            <S.Button onClick={() => callback(EStep.BLOCKCHAIN)}>Aplicação</S.Button>
            <S.Button onClick={() => openNewTabToLink('https://www.linkedin.com/in/marcojr73')}>Linkedin</S.Button>
            <S.Button
                onClick={() => openNewTabToLink('https://horn-pyramid-06d.notion.site/WEB-3-Blockchain-Smart-Contracts-e-o-futuro-da-estrutura-da-Internet-116e5108d21180ee9d62f29b762cd37d?pvs=74')}
            >
                Article
            </S.Button>
        </S.Body>
    );
}

export default Menu;