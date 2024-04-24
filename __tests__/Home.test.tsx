import Home from '@/app/page'
import { useOpenCart } from '@/contexts/useOpenCart'
import { render, screen } from '@testing-library/react'
import { AnimatePresence } from 'framer-motion'

describe('Home component', () => {
  test('renders Cart when cartOpen is true', () => {
    const { setCartOpen } = useOpenCart()
    setCartOpen(true)

    render(
      <AnimatePresence>
        <Home />
      </AnimatePresence>,
    )

    expect(screen.getByText('Cart')).toBeInTheDocument()
  })
})
