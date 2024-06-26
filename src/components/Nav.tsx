'use client'

import { useOpenCart } from '@/contexts/useOpenCart'
import { useCartStore } from '@/contexts/useStore'
import { ShoppingCart } from 'lucide-react'
import { Logo } from './Logo'

export function Nav() {
  const { products } = useCartStore()
  const { setCartOpen } = useOpenCart()

  const cartQuantityTotal = products.reduce(
    (total, product) => total + product.quantity,
    0,
  )

  return (
    <nav className="flex flex-row bg-bg-nav text-white py-3 px-5 lg:py-9 lg:px-16 justify-between items-center">
      <Logo />

      <button
        className="flex flex-row gap-3 bg-white items-center text-black py-3 px-5 rounded-lg"
        onClick={() => setCartOpen(true)}
      >
        <ShoppingCart size={24} color="black" fill="black" />
        <h3 className="font-bold">{cartQuantityTotal}</h3>
      </button>
    </nav>
  )
}
