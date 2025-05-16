import { Conteiner } from "./style";
import { useEffect } from "react";

import { MiniCard } from "../MiniCard";
import iconReact from '../../assets/reactjs.svg';
import iconNode from '../../assets/node.svg';
import iconJs from '../../assets/javascript.svg';
import iconSt from '../../assets/styled.svg';
import iconTS from '../../assets/typescript.svg';
import iconTw from '../../assets/tailwind-icon.svg';
import iconNx from '../../assets/next.png';
import iconNs from '../../assets/nest.png';
import iconPs from '../../assets/polstgres.png';

export function BoxIcons({ ts, rc, js, nd, sc, tw, nx, ns, ps }) {

    return(
        <Conteiner>

            {nd && (
                <MiniCard
                    imgTitle={iconNode}
                    subTitle="imagem simbolo NodeJs"
                    subText="Node.JS"
                />
            )}
            
            {rc && (
                <MiniCard
                    imgTitle={iconReact}
                    subTitle="imagen simbolo React"
                    subText="React"
                    />
                    )}
            
            {js && (
                <MiniCard
                imgTitle={iconJs}
                subTitle="imagem simbolo java script"
                subText="Java Script"
                />
            )}

            {ts && (
                <MiniCard
                    imgTitle={iconTS}
                    subTitle="imagem simbolo TypeScrypt"
                    subText="TypeScript"
                />
            )}

            {tw && (
                <MiniCard
                    imgTitle={iconTw}
                    subTitle="imagen simbolo Tailwind"
                    subText="Tailwind"
                />
            )}

            {sc && (
                <MiniCard
                    imgTitle={iconSt}
                    subTitle="imagem simbolo styled components"
                    subText="Styled Components"
                />
            )}
            {nx && (
                <MiniCard
                    imgTitle={iconNx}
                    subTitle="imagem simbolo NextJs"
                    subText="NextJs"
                />
            )}
            {ns && (
                <MiniCard
                    imgTitle={iconNs}
                    subTitle="imagem simbolo NestJs"
                    subText="NestJs"
                />
            )}
            {ps && (
                <MiniCard
                    imgTitle={iconPs}
                    subTitle="imagem simbolo PostgreSQL"
                    subText="PostgreSQL"
                />
            )}

        </Conteiner>
    )
};