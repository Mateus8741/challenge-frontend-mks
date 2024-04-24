'use client'

import { Card } from '@/components/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 bg-blue-400 lg:p-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            title="Product title"
            price={2499}
            description="Product description"
            imageUrl="https://via.placeholder.com/150"
          />
        ))}
      </div>
    </main>
  )
}
