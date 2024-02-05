import { useState } from "react"
import { Product, ProductInCart } from '../interfaces/interfaces';


export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart}>({})

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        
        setShoppingCart(oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, quantity: 0}

            if(Math.max(productInCart.quantity + count, 0) > 0) {
                productInCart.quantity += count
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //Delete product from shopping cart if quantity is 0
            const { [product.id]: _, ...newShoppingCart } = oldShoppingCart
            return newShoppingCart

            // if(count === 0) {
            //     const newShoppingCart = {...oldShoppingCart}
            //     delete newShoppingCart[product.id]
            //     return newShoppingCart
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: {...product, quantity: count}
            // }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}