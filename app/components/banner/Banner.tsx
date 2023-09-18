import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <header className='relative bg-gradient-to-r from-slate-500 to-slate-700 mb-8 '>
        <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
            <aside className="mb-8 md:mb-0 text-center text-white">
                <h1 className='text-3xl md:text-5xl font-bold mb-4'> Fall Promotions ! </h1>
                <span className='text-lg md:text-xl mb-2'> Enjoy discounts on your favorite items </span>
                <h4 className='text-2xl md:text-4xl text-yellow-500 font-bold'>30% OFF SALE!</h4>
            </aside>
            <aside className="w-1/3 relative aspect-video">
                <Image src='/banner-image.png' fill sizes='' alt="Home Banner" className="object-contain"/>
            </aside>
        </div>
    </header>
  )
}

export default Banner