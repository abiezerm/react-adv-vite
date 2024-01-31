import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface ProductImageProps {
    image?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ image = '', className = '', style}: ProductImageProps) => {
    const { product } = useContext(ProductContext);
    
    const imageSrc = image || product.image || noImage;

    return (
        <img 
            className={ `${styles.productImg} ${className}` } 
            style={ style } 
            src={ imageSrc } alt="Product Image" 
        />
    )
}