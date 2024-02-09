import { useCallback, useContext } from "react";
import { ProductContext } from ".";

import styles from '../styles/styles.module.css'

export interface ProductButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}
export const ProductButtons = ({ className, style } : ProductButtonsProps) => {

    const { increaseBy, counter, maxCount} = useContext(ProductContext);

    const isMaxCountReached = useCallback(() => !!maxCount && counter == maxCount, [maxCount, counter])

    return (
        <div className={ `${styles.buttonsContainer} ${className}`} style={ style }>
            <button className={ styles.buttonMinus } onClick={() => increaseBy(-1)}> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button 
                className={ `${styles.buttonAdd} ${ isMaxCountReached() && styles.disabled }` } 
                onClick={() => increaseBy(+1)}> + </button>

        </div>
    )
}