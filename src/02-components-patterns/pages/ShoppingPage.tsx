import { products } from './../data/products';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                    key={product.id} 
                    product={product} 
                    className="bg-dark text-white" 
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ( { count, reset, isMaxCountReached, increaseBy } ) => (
                            <div>
                                <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} />
                                <ProductTitle title="" className="text-bold" />
                                <ProductButtons className="custom-buttons" />
                                <button onClick={reset} className="btn btn-danger">Reset</button>
                                <button onClick={ () => increaseBy( -2 )} className="btn btn-danger"> -2 </button>
                                <button onClick={() => increaseBy(+2) } style={{ display: `${isMaxCountReached ? 'none' : 'block'}`}}> +2 </button>
                                <span>{ count }</span>
                            </div>
                        )
                    }
            </ProductCard>

        </div>
    )
}

