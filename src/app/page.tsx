'use client'

import { useStoreApi } from '@/api/storeApi'
import { Card } from '@/components/Card'
import { Cart } from '@/components/Cart'
import { useOpenCart } from '@/contexts/useOpenCart'
import { useCartStore } from '@/contexts/useStore'
import { ProductProps } from '@/schemas/productSchema'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const { addProduct } = useCartStore()
  const { cartOpen } = useOpenCart()
  const { data } = useStoreApi()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 lg:p-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {data?.data.products.map((item: ProductProps, index: number) => (
          <motion.div
            key={item.id}
            layoutId={`card-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card
              data={item}
              onClick={() =>
                addProduct({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  photo: item.photo,
                  description: item.description,
                })
              }
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>{cartOpen && <Cart />}</AnimatePresence>
    </main>
  )
}
