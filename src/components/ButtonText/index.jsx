import { Conteiner } from "./style";

export function ButtonText({title, aRef, dataRef, isActive, ...rest }) {

    return(
        <Conteiner
            type='button'
            isActive={isActive}
            {...rest}
        >
            {title}
            <a href={aRef}></a>
        </Conteiner>
    )
}