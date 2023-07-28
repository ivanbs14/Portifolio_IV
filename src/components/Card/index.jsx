import { Conteiner } from "./style";

export function Card({title, subTitle, imgLogo }) {

    return(
        <Conteiner>
            <img className='logs' src={imgLogo} alt="imagm de um qr code" />
            <h3>{title}
                <span>{subTitle}</span>
            </h3>
        </Conteiner>
    )
}