import { Nav } from '@/components/Nav'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Soluções em tecnologia para o seu negócio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Nav />
          {children}
          <footer className="flex items-center justify-center h-12 bg-gray-200">
            <p className="text-gray-600 text-sm font-medium">
              MKS Sistemas &copy; Todos os direitos reservados
            </p>
          </footer>
        </Provider>
      </body>
    </html>
  )
}
