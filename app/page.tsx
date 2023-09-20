'use client'

import Container from "./components/Container"
import Banner from "./components/banner/Banner"
import ProductCard from "./components/productCard/ProductCard"
import Cart from "./components/cart/Cart"
import { useCart } from "@/hooks/useCart"
import WhoWeAre from "./components/whoweare/WhoWeAre"
import { fetchData } from "@/data/productDataHandler";
import { useEffect } from "react"


export default function Home() {
  const { cartVisibility, products, setProducts } = useCart();
  useEffect(() => {
    fetchData()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [])

  return (
    <main className="p-8">
      <Container>
        <div className="">
          <Banner />
        </div>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 2xl:grid-cols-6 mb-8 gap-8">
          {products?.slice(0, 4).map((product: any) => {
            return <ProductCard key={product.id} data={product} />
          })}
        </section>
        {!cartVisibility && <WhoWeAre />}
        {cartVisibility && <Cart />}
      </Container>
    </main>
  )
}
