'use client'
import React from 'react'
import Container from '@/app/components/Container'
import ProductDetails from './ProductDetails'
import { useCart } from '@/hooks/useCart'

interface IParams {
  productId: number
}


const PDP = ({ params }: { params: IParams }) => {
  const { products } = useCart()
  const product = products?.find(item => item.id === Number(params.productId))
  return (
    <section className='p-8'>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </section>
  )
}

export default PDP