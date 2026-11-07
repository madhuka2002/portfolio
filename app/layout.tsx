import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import QuantheonixChatWidget from '@/components/quantheonix-chat'
import SinglePageHeader from '@/components/single-page-header'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Madhuka Malshan',
  description: 'Madhuka Malshan builds full-stack, AI, mobile, and microservice products from Colombo, Sri Lanka.',
  icons: {
    icon: '/images/authors/pageLogo.jpg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <SinglePageHeader />
          <main className='grow'>{children}</main>
          <QuantheonixChatWidget />
        </Providers>
      </body>
    </html>
  )
}
