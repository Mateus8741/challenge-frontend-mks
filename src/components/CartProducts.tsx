import { ProductProps } from '@/schemas/productSchema'
import { formatMoney } from '@/utils/formatMoney'
import { Counter } from './Counter'

export function CartProducts(product: ProductProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl justify-between items-center">
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
