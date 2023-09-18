"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
    data: any
}


const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter();

    return (
        <section onClick={()=> router.push(`/product/${data.id}`)} className="col-span-1 cursor-pointer border=[1.2px] border-slate-200 bg-slate-50 rounder-sm transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col items-center w-fill gap-1">
                <div className='aspect-square overflow-hidden relative w-full'>
                    <Image fill className='w-full h-full object-contain' src={data.image} alt={data.name} />
                </div>
                <h3 >
                    {data.title.length > 25 ? data.title.substring(0, 24) + "..." :  data.title}
                </h3>
                <span className='font-semibold'>
                    {new Intl.NumberFormat("en-US", {style:"currency",currency: "USD"}).format(data.price)}
                </span>
            </div>
        </section>
    )
}

export default ProductCard