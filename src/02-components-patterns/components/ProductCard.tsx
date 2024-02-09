import { createContext } from 'react';

import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    //children?: React.ReactElement | React.ReactElement[];
    children: ( args : ProductCardHandlers) => JSX.Element | JSX.Element[] | React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args : OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })
    
    return (
        <Provider value={{ product, counter, increaseBy, maxCount}}>
            <div 
                className={ `${styles.productCard} ${className}` }
                style={ style }>
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount || value,
                        reset,
                        product,
                        increaseBy
                    }) 
                }
            </div>
        </Provider>
    )
}