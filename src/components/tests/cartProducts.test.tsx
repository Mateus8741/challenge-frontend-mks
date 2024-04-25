import { useCartStore } from '@/contexts/useStore'
import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { CartProducts } from '../CartProducts'
import { Counter } from '../Counter'

describe('Component: CartProducts', () => {
  const data = {
    id: 2,
    name: 'Product 2',
    price: '200',
    brand: 'Brand 2',
    photo: 'photo2.jpg',
    description: 'Description 2',
    quantity: 1,
  }

  it('should be remove product from cart', () => {
    const { result } = renderHook(() => useCartStore())

    const wrapper = render(<CartProducts {...data} />)

    const button = wrapper.getByTestId('remove-product')

    fireEvent.click(button)

    expect(result.current.products).toEqual([])
  })

  it('should be increase, decrease and remove products from cart', () => {
    const { result } = renderHook(() => useCartStore())

    const { removeProduct, products } = result.current

    products.push(data)

    const { getByTestId } = render(<Counter productId={2} />)

    const increaseButton = getByTestId('increase-product')
    const decreaseButton = getByTestId('decrease-product')

    act(() => {
      fireEvent.click(increaseButton)
    })

    expect(result.current.products[0].quantity).toBe(2)

    act(() => {
      fireEvent.click(decreaseButton)
    })

    expect(result.current.products[0].quantity).toBe(1)

    act(() => {
      removeProduct('2')
    })

    expect(result.current.products).toEqual([])
  })
})
