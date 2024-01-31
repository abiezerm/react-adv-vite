import { ProductButtonsProps, ProductImageProps, ProductTitleProps } from "../components"
import { ProductCardProps } from "../components/ProductCard"

export interface Product {
    id: string,
    image?: string
    title: string,
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void
    product: Product,
}

export interface ProductCardHOC {
    ({children, product, className}: ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}