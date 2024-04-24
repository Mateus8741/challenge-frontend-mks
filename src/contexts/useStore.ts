import { create } from 'zustand'

import { createJSONStorage, persist } from 'zustand/middleware'

import { ProductProps } from '@/schemas/productSchema'
import { Add, Decrease, Increase, Remove } from './helpers/cartInMemory'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  addProduct: (product: ProductProps) => void
  increaseProduct: (id: string) => void
  decreaseProduct: (id: string) => void
  removeProduct: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create(
  persist<StateProps>(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => {
          const newProducts = Add(state.products, product)
          return { products: newProducts }
        }),
      increaseProduct: (id) =>
        set((state) => {
          const newProducts = Increase(state.products, id)
          return { products: newProducts }
        }),
      decreaseProduct: (id) =>
        set((state) => {
          const newProducts = Decrease(state.products, id)
          return { products: newProducts }
        }),
      removeProduct: (id) =>
        set((state) => ({
          products: Remove(state.products, id),
        })),
      clearCart: () => set({ products: [] }),
    }),
    {
      name: 'mks-sistemas:cart',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
