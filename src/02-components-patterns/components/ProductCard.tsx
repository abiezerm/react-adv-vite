import { createContext } from 'react';

import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct()
    
    return (
        <Provider value={{ product, counter, increaseBy}}>
            <div 
                className={ `${styles.productCard} ${className}` }
                style={ style }>
                { children }
            </div>
        </Provider>
    )
}