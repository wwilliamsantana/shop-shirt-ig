import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import logo from '@/assets/logoIg.svg'
import { CartProvider } from 'use-shopping-cart'
import { ShoppingCart } from '@phosphor-icons/react'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        cartMode="checkout-session"
        stripe={String(process.env.PUBLIC_API_KEY)}
        currency="BRL"
        shouldPersist
      >
        <Header>
          <Link href={'/'}>
            <Image src={logo} width={130} height={52} alt="" />
          </Link>
          <Link href={'/cart'}>
            <ShoppingCart size={40} />
          </Link>
        </Header>

        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
