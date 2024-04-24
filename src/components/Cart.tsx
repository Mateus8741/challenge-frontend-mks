import { useOpenCart } from '@/contexts/useOpenCart'
import { useCartStore } from '@/contexts/useStore'
import { formatMoney } from '@/utils/formatMoney'
import { motion } from 'framer-motion'
import { XIcon } from 'lucide-react'

export function Cart() {
  const { products } = useCartStore()
  const { setCartOpen } = useOpenCart()

  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-full bg-gray-600 bg-opacity-75 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed top-0 right-0 p-5 h-full w-[350px] lg:w-5/12 lg:px-12 bg-bg-nav shadow-lg">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl text-white font-bold">
            Carrinho <br />
            de compras
          </h2>

          <button
            className="bg-black rounded-full p-2"
            onClick={() => setCartOpen(false)}
          >
            <XIcon size={35} color="white" fill="black" />
          </button>
        </div>

        {products.length === 0 && (
          <div className="flex justify-center mt-80">
            <p className="text-white text-xl lg:text-2xl font-bold">
              Seu carrinho está vazio
            </p>
          </div>
        )}

        <div className="flex flex-col gap-5 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white rounded-xl justify-between items-center"
            >
              <img
                src={product.photo}
                alt={product.name}
                className="w-52 h-52 rounded-lg mt-2"
              />

              <p className="text-bg-price text-center mt-2 font-normal">
                {product.name}
              </p>

              <div className="flex flex-row justify-between items-center w-full px-5 py-3">
                contador
                <p className="font-bold text-lg bg-bg-price py-1 px-2.5 rounded-lg text-white">
                  {formatMoney(Number(product.price))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
