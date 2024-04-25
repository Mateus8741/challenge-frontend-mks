import { useOpenCart } from '@/contexts/useOpenCart'
import { useCartStore } from '@/contexts/useStore'
import { fireEvent, render, renderHook, screen } from '@testing-library/react'

import { Card } from '../Card'

describe('Component: Card', () => {
  const data = {
    id: 1,
    name: 'Product 1',
    price: '100',
    photo: 'photo1.jpg',
    description: 'Description 1',
    quantity: 1,
  }

  it('should render Card component', () => {
    render(<Card data={data} />)

    const productName = screen.getByText(/Product 1/i)

    expect(productName).toBeInTheDocument()
  })

  it('should set the product data on click', () => {
    const { result } = renderHook(() => useCartStore())
    const { addProduct } = result.current

    render(<Card data={data} onClick={() => addProduct(data)} />)

    const buyButton = screen.getByTestId('buy-button')

    fireEvent.click(buyButton)

    expect(result.current.products).toEqual([data])
  })

  it('should open cart onClick', () => {
    const { result } = renderHook(() => useOpenCart())
    const { setCartOpen } = result.current

    render(<Card data={data} onClick={() => setCartOpen(true)} />)

    const buyButton = screen.getByTestId('buy-button')

    fireEvent.click(buyButton)

    expect(result.current.cartOpen).toBe(true)
  })
})
