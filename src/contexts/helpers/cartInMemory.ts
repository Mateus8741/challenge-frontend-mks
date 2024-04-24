import { ProductProps } from '@/schemas/productSchema'
import { ProductCartProps } from '../useStore'

export function Add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({ id }) => newProduct.id === id)

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? {
            ...product,
            quantity: product.quantity + 1,
          }
        : product,
    )
  }

  return [...products, { ...newProduct, quantity: 1 }]
}

export function Remove(products: ProductCartProps[], id: string) {
  const updatedProducts = products.map((product) =>
    product.id === Number(id)
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product,
  )

  return updatedProducts.filter((product) => product.quantity > 0)
}

export function Increase(products: ProductCartProps[], id: string) {
  return products.map((product) =>
    product.id === Number(id)
      ? { ...product, quantity: product.quantity + 1 }
      : product,
  )
}

export function Decrease(products: ProductCartProps[], id: string) {
  return products.map((product) =>
    product.id === Number(id)
      ? { ...product, quantity: product.quantity - 1 }
      : product,
  )
}

export function RemoveAmount(
  products: ProductCartProps[],
  id: string,
  amount: number,
) {
  return products.map((product) =>
    product.id === Number(id)
      ? { ...product, quantity: product.quantity - amount }
      : product,
  )
}
