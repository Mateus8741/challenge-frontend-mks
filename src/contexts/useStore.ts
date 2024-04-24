import { create } from 'zustand'

import { createJSONStorage, persist } from 'zustand/middleware'

import { ProductProps } from '@/schemas/productSchema'
import { Add, Remove } from './helpers/cartInMemory'

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  addProduct: (product: ProductProps) => void
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
