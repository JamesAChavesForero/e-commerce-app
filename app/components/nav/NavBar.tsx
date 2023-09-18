import Link from 'next/link'
import Container from '../Container'
import React from 'react'
import CartCounter from './CartCounter'

const NavBar = () => {
  return (
    <nav className='sticky top-0 w-full bg-slate-200 z-30 first-letter shadow-sm'>
      <div className="py-4 border-b-[1px">
        <Container>
          <div className='text-xl flex items-center justify-evenly gap-3 md-gap-0'>
            <Link href="/" >
              Home
            </Link>
            <Link href="/">
              Products
            </Link>
              <CartCounter/>
          </div>
        </Container>
      </div>
    </nav>
  )
}
export default NavBar