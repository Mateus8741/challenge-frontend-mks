// import { useCartStore } from '@/contexts/useStore'
// import { MinusIcon, PlusIcon } from 'lucide-react'

// export function Counter() {
//   const { products, addProduct, removeProduct } = useCartStore()

//   return (
//     <div className="flex flex-row items-center justify-between p-2 border border-gray-200 rounded-md w-28 h-10">
//       <button onClick={decreaseCount}>
//         <MinusIcon size={16} />
//       </button>

//       <div className="w-px h-6 bg-gray-200" />

//       <span className="font-bold text-base">{count}</span>

//       <div className="w-px h-6 bg-gray-200" />

//       <button onClick={increaseCount}>
//         <PlusIcon size={16} />
//       </button>
//     </div>
//   )
// }

import { useCartStore } from '@/contexts/useStore'
import { MinusIcon, PlusIcon } from 'lucide-react'

type CounterProps = {
  productId: number
}

export function Counter({ productId }: CounterProps) {
  const { products, increaseProduct, decreaseProduct } = useCartStore()

  function handleIncrease() {
    increaseProduct(String(productId))
  }

  function handleDecrease() {
    decreaseProduct(String(productId))
  }

  const productCount =
    products.find((product) => product.id === productId)?.quantity ?? 0

  return (
    <div className="flex flex-row items-center justify-between p-2 border border-gray-200 rounded-md w-28 h-10">
      <button onClick={handleDecrease}>
        <MinusIcon size={16} />
      </button>

      <div className="w-px h-6 bg-gray-200" />

      <span className="font-bold text-base">{Number(productCount)}</span>

      <div className="w-px h-6 bg-gray-200" />

      <button onClick={handleIncrease}>
        <PlusIcon size={16} />
      </button>
    </div>
  )
}
