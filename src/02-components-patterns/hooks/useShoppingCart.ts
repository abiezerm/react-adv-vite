import { useState } from "react"
import { Product, ProductInCart } from '../interfaces/interfaces';


export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart}>({})

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        
        setShoppingCart(oldShoppingCart => {
            if(count === 0) {
                const newShoppingCart = {...oldShoppingCart}
                delete newShoppingCart[product.id]
                return newShoppingCart
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, quantity: count}
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}