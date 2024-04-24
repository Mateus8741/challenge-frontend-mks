'use client'

import { Card } from '@/components/Card'
import { Cart } from '@/components/Cart'
import { useOpenCart } from '@/contexts/useOpenCart'
import { useCartStore } from '@/contexts/useStore'
import { AnimatePresence, motion } from 'framer-motion'

const data = [
  {
    id: 1,
    name: 'Famous Brand 1',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Famous Brand 2',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Famous Brand 3',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Famous Brand 4',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Famous Brand 5',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Famous Brand 6',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Famous Brand 7',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Famous Brand 8',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Famous Brand 9',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Famous Brand 10',
    price: '2499',
    description: 'Product description',
    photo: 'https://via.placeholder.com/150',
  },
]

export default function Home() {
  const { addProduct } = useCartStore()
  const { cartOpen } = useOpenCart()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 lg:p-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {data.map((item, index) => (
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
