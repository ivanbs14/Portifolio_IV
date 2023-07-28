import React, { useState } from 'react';
import { Conteiner } from "./style";

export function MiniCard({imgTitle, subTitle, subText}) {

    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    };

    return(
        <Conteiner>
            <img 
                className='image-container'
                src={imgTitle} 
                alt={subTitle}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
            {isMouseOver && <p className="text">{subText}</p>}
        </Conteiner>
    )
}