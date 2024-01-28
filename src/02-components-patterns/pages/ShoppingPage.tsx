import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    id: '1',
    title: 'Coffee Mug - Black',
    image: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle title="" />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title="the other mug" />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>

        </div>
    )
}

