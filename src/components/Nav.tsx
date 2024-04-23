'use client'

import { ShoppingCart } from 'lucide-react'
import { Logo } from './Logo'

export function Nav() {
  function handleCart() {
    console.log('Cart clicked')
  }

  return (
    <nav className="flex flex-row bg-bg-nav text-white py-3 px-5 lg:py-9 lg:px-16 justify-between items-center">
      <Logo />

      <button
        className="flex flex-row gap-3 bg-white items-center text-black py-3 px-5 rounded-lg"
        onClick={handleCart}
      >
        <ShoppingCart size={24} color="black" fill="black" />
        <h3 className="font-bold">0</h3>
      </button>
    </nav>
  )
}
