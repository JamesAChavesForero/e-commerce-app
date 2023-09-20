'use client'

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps{
    cartCounter? : boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: ()=> void;
    handleQtyDecrease: ()=> void;
}
const SetQuantity : React.FC<SetQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease
}) => {
  return <article className="flex gap-8 items-center">
    {cartCounter ? null : <span className="font-semibold"> Quantity : </span>}
    <div className="flex gap-4 items-center text-base">
        <button className="border-[1.2px] border-slate-300 px-2 rounded" onClick={handleQtyIncrease}>+</button>
        <div>{cartProduct.quantity }</div>
        <button className="border-[1.2px] border-slate-300 px-2 rounded" onClick={handleQtyDecrease}>-</button>
    </div>
  </article>
}

export default SetQuantity