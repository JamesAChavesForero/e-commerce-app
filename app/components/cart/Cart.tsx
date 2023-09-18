import { IoExit } from 'react-icons/io5'
import { MdArrowBack } from 'react-icons/md'
import { useCart } from "@/hooks/useCart"
import CartBtn from '../addToCartBtn/CartBtn'
import Link from 'next/link'
import CartItemContent from './CartItemContent'
import toast from "react-hot-toast";



const Cart = () => {
  const { cartProducts, setCartVisibility, cartTotalAmount, cleanCart } = useCart()
  return (
    <>
      <div className="absolute inset-0 w-full h-full bg-slate-900 bg-opacity-25 z-10"></div>
      <aside className="p-4 bg-white absolute top-[60px] right-0 h-screen z-20 md:min-w-[400px] overflow-scroll">
        <IoExit className='cursor-pointer m-2' onClick={() => setCartVisibility(false)} />
        <header className="text-center font-bold pb-4">Shopping Cart</header>
        <div className="flex justify-evenly items-center gap-2">
          <span className="flex-1 text-center justify-center">PRODUCT</span>
          <span className="flex-1 text-center justify-center">PRICE</span>
          <span className="flex-1 text-center justify-center">QTY</span>
          <span className="flex-1 text-center justify-center">TOTAL</span>
        </div>
        <div>
          {cartProducts && cartProducts.map(item => {
            return <CartItemContent key={item.id} item={item} />
          })}
        </div>
        <div className='border-t-[1.5px] border-slate-200 py-4 flex flex-col justify-between gap-4'>
          <div className='flex justify-between w-full text-base font'>
            <span className=''>Subtotal : </span>
            <span> {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cartTotalAmount)}</span>
          </div>
          <div>
            <CartBtn label="Checkout" onClick={() => {

              if (cartProducts?.length > 0) {
                cleanCart();
                toast.success('Your Purchase Was Successfull!')
              }else{
                toast.error('First Add Items to The Cart')
              }
            }} small />
          </div>
          <Link href={"/"} >
            <small className='flex w-full items-center cursor-pointer'> <MdArrowBack className='mx-2' />Continue Shopping</small>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Cart