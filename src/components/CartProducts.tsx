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
    <div className="flex flex-col relative bg-white rounded-xl mt-3 justify-between items-center lg:flex-row lg:p-5">
      <button
        className="absolute -right-3 -top-3 bg-black rounded-full p-1"
        onClick={handleRemoveProduct}
      >
        <XIcon size={25} color="white" fill="black" />
      </button>

      <img
        src={product.photo}
        alt={product.name}
        className="w-52 h-52 rounded-lg mt-2 lg:mt-0 lg:w-20 lg:h-20"
      />

      <p className="text-bg-price text-left mt-2 font-normal lg:mt-0 lg:ml-3">
        {product.name}
      </p>

      <div className="flex flex-row justify-between items-center w-full px-5 py-3 lg:px-2 lg:pl-4">
        <Counter productId={Number(product.id)} />
        <p className="font-bold text-lg bg-bg-price py-1 px-2.5 rounded-lg text-white lg:bg-transparent lg:text-black">
          {formatMoney(Number(product.price))}
        </p>
      </div>
    </div>
  )
}
