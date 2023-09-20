import React from 'react'
import Image from 'next/image'

const WhoWeAre = () => {
    return (
        <section className="w-full mb-2 md:mb-0 text-center text-white bg-slate-500 max-h-max">
            <h2 className='text-4xl md:text-6xl font-bold my-4 py-8'>We Are <b className='text-4xl md:text-6xl text-yellow-500 font-bold'>Lorem ipsum</b> !</h2>
            <article>
                <p className='text-lg md:text-xl mb-2 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat ac felis donec et odio. Sed enim ut sem viverra. Ultricies mi quis hendrerit dolor magna eget est. Morbi tempus iaculis urna id volutpat lacus laoreet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Eu turpis egestas </p>
            </article>
                <Image src='/banner-image.png' width={300} height={300} alt='who we are image' className='text-center object-contain !relative !inline p-10' />
        </section>
    )
}

export default WhoWeAre