import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from './../data/products';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id} 
                            product={product} 
                            className="bg-dark text-white" 
                            value={ shoppingCart[product.id]?.quantity || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} />
                            <ProductTitle title="" className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, productInCart]) => (
                        <ProductCard
                            key={ key }
                            product={ productInCart } 
                            className="bg-dark text-white" 
                            style={{width: '100px', }}
                            value={ productInCart.quantity }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} />
                            <ProductButtons 
                                className="custom-buttons" 
                                style={{ display: 'flex', justifyContent: 'center'}}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

