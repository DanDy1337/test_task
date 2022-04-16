import React, {FC} from 'react';

export enum CardVariant{
    outlined = 'outlined', 
    primary = 'primary'
}

interface CardProp {
    width?: string;
    height?: string; 
    variant?: CardVariant;
}

const Card: FC<CardProp> = ({width,height, children, variant}) => {

    return(
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid gray': 'none',
            background: variant === CardVariant.primary ? 'Lightgray': ''
        }}>
            {children}
        </div>
    )
};

export default Card;