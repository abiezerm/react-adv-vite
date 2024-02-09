import { ProductButtonsProps, ProductImageProps, ProductTitleProps } from "../components"
import { ProductCardProps } from "../components/ProductCard"

export interface Product {
    id: string,
    image?: string
    title: string,
}

export interface ProductContextProps {
    counter: number,
    maxCount?: number,
    product: Product,
    
    increaseBy: (value: number) => void,
}

export interface ProductCardHOC {
    ({children, product, className}: ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}

export interface OnChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product {
    quantity: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}