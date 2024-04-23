import { HomeContainer, Product } from '@/styles/pages/home'

import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import { stripe } from '@/api/stripe'
import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'

interface ProductsProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: ProductsProps) {
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
            <Link key={item.id} href={`product/${item.id}`} prefetch={false}>
              <Product className="keen-slider__slide" key={item.id}>
                <Image src={item.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.price}</span>
                </footer>
              </Product>
            </Link>
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
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hour
  }
}
