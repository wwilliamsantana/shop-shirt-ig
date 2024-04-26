import {
  CartContainer,
  CartItem,
  CartWrapper,
  ImageContainer,
  InfoCart,
  InfoContainer,
} from '@/styles/pages/cart'
import camisa from '../assets/tshirt1.svg'
import Image from 'next/image'
import { X } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { useShoppingCart } from 'use-shopping-cart'
import { useState } from 'react'

export default function Cart() {
  const { removeItem, cartDetails } = useShoppingCart()
  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(false)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 32,
    },
  })

  async function handleBuy() {
    try {
      setIsCheckoutDisabled(true)

      // const response = await axios.post('/api/checkout', {
      //   priceId: product.defaultPriceId,
      // })

      // const { checkoutUrl } = response.data

      // window.location.href = checkoutUrl
    } catch (err) {
      setIsCheckoutDisabled(false)
      alert('Falha ao redirecionar!')
    }
  }

  const arrayAmountTransform = Object.values(cartDetails ?? {}).map((item) =>
    Number(
      item.price.toLocaleString().replace('R$', '').replace(',', '.').trim(),
    ),
  )

  const amount = arrayAmountTransform
    .reduce((total, i) => {
      return total + i
    }, 0)
    .toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })

  const blockButtonBuy = Object.values(cartDetails ?? {}).length === 0

  return (
    <CartContainer>
      {Object.values(cartDetails ?? {}).length === 0 ? (
        <h1>Carrinho vazio!</h1>
      ) : (
        <h1>Carrinho</h1>
      )}

      <CartWrapper ref={sliderRef} className="keen-slider">
        {cartDetails ? (
          Object.values(cartDetails ?? {}).map((product) => {
            return (
              <CartItem key={product.id} className="keen-slider__slide">
                <ImageContainer>
                  <Image
                    src={product.imageUrl}
                    width={128}
                    height={180}
                    alt=""
                  />
                  <span>{product.quantity}</span>
                </ImageContainer>

                <InfoCart>
                  <div>
                    <span>{product.name}</span>
                    <strong>{product.price}</strong>
                  </div>
                  <button onClick={() => removeItem(product.id)}>
                    <X />
                  </button>
                </InfoCart>
              </CartItem>
            )
          })
        ) : (
          <strong>loading....</strong>
        )}
      </CartWrapper>

      <InfoContainer>
        <div>
          <span>
            Total:
            <strong>{amount}</strong>
          </span>
        </div>

        <button
          onClick={handleBuy}
          disabled={isCheckoutDisabled || blockButtonBuy}
        >
          Comprar agora
        </button>
      </InfoContainer>
    </CartContainer>
  )
}
