'use client'

import { Card } from '@/components/Card'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 lg:p-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card
              name="Product title"
              price={2499}
              description="Product description"
              photo="https://via.placeholder.com/150"
            />
          </motion.div>
        ))}
      </div>
    </main>
  )
}
