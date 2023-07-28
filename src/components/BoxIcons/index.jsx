import { Conteiner } from "./style";

import { MiniCard } from "../MiniCard";
import iconReact from '../../assets/reactjs.svg';
import iconNode from '../../assets/node.svg';
import iconJs from '../../assets/javascript.svg';
import iconSt from '../../assets/styled.svg';

export function BoxIcons() {

    return(
        <Conteiner>
            <MiniCard
                imgTitle={iconReact}
                subTitle="imagen simbolo React"
                subText="React"
            />
            
            <MiniCard
                imgTitle={iconJs}
                subTitle="imagem simbolo java script"
                subText="Java Script"
            />
            <MiniCard
                imgTitle={iconSt}
                subTitle="imagem simbolo styled components"
                subText="Styled Components"
            />

            <MiniCard
                imgTitle={iconNode}
                subTitle="imagem simbolo NodeJs"
                subText="Node.JS"
            />
        </Conteiner>
    )
};