import { create } from 'zustand'

type Props = {
  cartOpen: boolean
  setCartOpen: (state: boolean) => void
}

export const useOpenCart = create<Props>((set) => ({
  cartOpen: false,
  setCartOpen: (state) => set({ cartOpen: state }),
}))
