import { ProductProps } from '@/schemas/productSchema'
import { formatMoney } from '@/utils/formatMoney'
import { ShoppingBag } from 'lucide-react'
import { HtmlHTMLAttributes } from 'react'

type CardProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  data: ProductProps
}

export function Card({ data, ...props }: CardProps) {
  return (
    <div className="w-[20rem] h-[285] bg-white rounded-lg shadow-xl">
      <div className="flex flex-col p-5">
        <img src={data.photo} alt="Placeholder" className="rounded-lg" />

        <div className="flex flex-row mt-5 items-center justify-between">
          <h3 className="font-normal text-xl text-start max-w-36 text-bg-price">
            {data.name}
          </h3>
          <p className="font-bold text-xl bg-bg-price py-1 px-2.5 rounded-lg text-white">
            {formatMoney(Number(data.price))}
          </p>
        </div>

        <p className="text-bg-prices font-light text-sm mt-2">
          {data.description}
        </p>
      </div>

      <button
        className="flex flex-row bg-bg-nav items-center justify-center text-white w-full py-3 rounded-b-lg font-semibold text-base"
        {...props}
      >
        <ShoppingBag size={24} className="inline-block mr-2" />
        COMPRAR
      </button>
    </div>
  )
}
