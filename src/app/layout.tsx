import './globals.scss'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from '@/provider/context'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <GlobalContextProvider>
        {children}
       
        </GlobalContextProvider>
      </body>
    </html>
  )
}
