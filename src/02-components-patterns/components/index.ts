import { ProductImage } from '.'
import { ProductButtons } from './ProductButtons'
import { ProductCard as productCardHOC } from './ProductCard'
import { ProductTitle } from './ProductTitle'

export * from './ProductButtons'
export { ProductContext } from './ProductCard'
export * from './ProductImage'
export * from './ProductTitle'

export const ProductCard = Object.assign(productCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})
