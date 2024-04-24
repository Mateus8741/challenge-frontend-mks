import { useCartStore } from '@/contexts/useStore'
import { ProductProps } from '@/schemas/productSchema'
import { formatMoney } from '@/utils/formatMoney'
import { XIcon } from 'lucide-react'
import { Counter } from './Counter'

export function CartProducts(product: ProductProps) {
  const { removeAmountProduct, products } = useCartStore()

  function handleRemoveProduct() {
    const productCount =
      products.find((p) => p.id === product.id)?.quantity ?? 0

    removeAmountProduct(String(product.id), productCount)
  }

  return (
    <div className="flex flex-col relative bg-white rounded-xl justify-between items-center">
      <button className="absolute right-3 top-2" onClick={handleRemoveProduct}>
        <XIcon size={35} color="black" fill="black" />
      </button>

      <img
        src={product.photo}
        alt={product.name}
        className="w-52 h-52 rounded-lg mt-2"
      />

      <p className="text-bg-price text-center mt-2 font-normal">
        {product.name}
      </p>

      <div className="flex flex-row justify-between items-center w-full px-5 py-3">
        <Counter productId={Number(product.id)} />
        <p className="font-bold text-lg bg-bg-price py-1 px-2.5 rounded-lg text-white">
          {formatMoney(Number(product.price))}
        </p>
      </div>
    </div>
  )
}
