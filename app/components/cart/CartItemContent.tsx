'use client'

import { CartProductType } from '@/app/product/[productId]/ProductDetails'
import SetQuantity from '../quantity/SetQuantity'
import Image from 'next/image'
import { useCart } from '@/hooks/useCart'

interface ItemContentProps {
    item: CartProductType
}

const CartItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const {removeProductFromCart, handleQtyChange} = useCart()
    return (
        <article key={item.id} className='flex justify-between gap-4 border-t-[1.5px] w-full items-center py-4 text-sm border-slate-200'>
            <div className="flex flex-col gap-2">
                <div>
                    {item?.title?.length > 10 ? item?.title?.substring(0, 9) + "..." : item?.title}
                </div>
                <div className="relative w-[70px] h-auto aspect-square">
                    <Image fill className='object-contain' src={item.image} alt={item.title} />
                </div>
                <div className="cursor-pointer text-slate-500 underline" onClick={()=>removeProductFromCart(item)}>
                    Remove
                </div>
            </div>
            <aside>
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price)}
            </aside>
            <aside>
                <SetQuantity cartCounter={true} cartProduct={item} handleQtyIncrease={() => {handleQtyChange(item,true)}} handleQtyDecrease={() => {handleQtyChange(item,false)}} />
            </aside>
            <aside>
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price * item.quantity)}
            </aside>


        </article>
    )
}

export default CartItemContent