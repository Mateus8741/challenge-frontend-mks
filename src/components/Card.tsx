import { ShoppingBag } from 'lucide-react'

export function Card() {
  return (
    <div className="w-[20rem] h-[285] bg-white rounded-lg shadow-lg">
      <div className="flex flex-col p-5">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="rounded-lg"
        />

        <div className="flex flex-row mt-5 items-center justify-between">
          <h3 className="font-normal text-xl text-start max-w-36 text-bg-price">
            Apple Watch Series 4 GPS
          </h3>
          <p className="font-bold text-xl bg-bg-price py-1 px-2.5 rounded-lg text-white">
            R$ 12.499
          </p>
        </div>

        <p className="text-bg-prices font-light text-sm mt-2">
          Redesigned from scratch and completely revised.
        </p>
      </div>

      <button className="flex flex-row bg-bg-nav items-center justify-center text-white w-full py-3 rounded-b-lg font-semibold text-base">
        <ShoppingBag size={24} className="inline-block mr-2" />
        COMPRAR
      </button>
    </div>
  )
}
