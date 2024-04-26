import { HomeContainer, Product } from '@/styles/pages/home'

import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import { stripe } from '@/api/stripe'
import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import { ShoppingCart } from '@phosphor-icons/react'
import { useShoppingCart } from 'use-shopping-cart'

interface ProductsProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    currency: string
  }[]
}

export default function Home({ products }: ProductsProps) {
  const { addItem } = useShoppingCart()
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>HOME | Ignite</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((item) => {
          return (
            <Product className="keen-slider__slide" key={item.id}>
              <Link href={`product/${item.id}`} prefetch={false}>
                <Image src={item.imageUrl} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.price}</span>
                </div>

                <button onClick={() => addItem(item)}>
                  <ShoppingCart size={20} />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(price.unit_amount) / 100),

      currency: price.currency,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hour
  }
}
