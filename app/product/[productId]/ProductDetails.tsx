'use client'

import SetQuantity from "@/app/components/quantity/SetQuantity"
import { useCallback, useState, useEffect } from "react"
import CartBtn from "@/app/components/addToCartBtn/CartBtn"
import { useCart } from "@/hooks/useCart"
import { MdCheckCircle } from "react-icons/md"
import Cart from "@/app/components/cart/Cart"
import toast from "react-hot-toast";
import Image from "next/image"
import Link from "next/link"

interface ProductDetailsProps {
  product: any
}

export type CartProductType = {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  quantity: number
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

  const { addProductToCart, cartProducts, cartVisibility, setCartVisibility } = useCart()

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product?.id,
    title: product?.title,
    description: product?.description,
    price: product?.price,
    image: product?.image,
    quantity: 1
  })

  const [isProductInCart, setIsProductInCart] = useState(false)

  useEffect(() => {
    setIsProductInCart(false)
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(item => item.id === product?.id)
      if (existingIndex > -1) {
        setIsProductInCart(true)
      }
    }
  }, [cartProducts])

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 20) {
      toast.error('Cannot buy more than 20')
      return
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity }
    })
  }, []);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity < 2) {
      toast.error('Cant order less than 1 item bud')
      return
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity }
    })
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className=""><Image width={400} height={400} src={product?.image} alt={product?.title} /></div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product?.title.length > 25 ? product?.title.substring(0, 24) + "..." : product?.title}</h2>
        <hr className="w-[30%] my-2" />
        <span>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product?.price)}</span>
        <hr className="w-[30%] my-2" />
        <p className="text-justify">{product?.description}</p>
        <hr className="w-[30%] my-2" />
        {isProductInCart ?
          <>
            <aside className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={20} />
              <span className="">  Product Successfully Added to Cart </span>
            </aside>
            <aside className="max-w-[300px]">
              <Link href="#">
                <CartBtn label={cartVisibility ? 'Viewing Cart' : 'View Cart'} outline onClick={() => setCartVisibility(!cartVisibility)} />
              </Link>
            </aside>

          </> :
          <>
            <SetQuantity cartProduct={cartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} />
            <hr className="w-[30%] my-2" />
            <div className="max-w-[300px]">
              <CartBtn label="Add to Cart" onClick={() => addProductToCart(cartProduct)} />
            </div>
          </>}
      </div>
      {cartVisibility && <Cart />}
    </div>

  )
}
export default ProductDetails