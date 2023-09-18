import React from 'react'
import { fetchData } from "@/data/productDataHandler";
import { useCart } from "@/hooks/useCart"
import Cart from '@/app/components/cart/Cart';

const ProductListing = () => {
    const { cartVisibility, products, setProducts } = useCart();

    fetchData()
        .then((products) => {
            setProducts(products);
        })
        .catch((error) => {
            console.error(error.message);
        });

    return (<>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 2xl:grid-cols-6 gap-8">
            {products?.slice(0, 4).map((product: any) => {
                return <ProductCard key={product.id} data={product} />
            })}
        </section>
        {cartVisibility && <Cart />}
    </>
    )
}

export default ProductListing