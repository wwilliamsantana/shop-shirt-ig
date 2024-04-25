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
import axios from 'axios'
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

  console.log(cartDetails)

  async function handleBuy() {
    try {
      setIsCheckoutDisabled(true)
      console.log(cartDetails)
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
  return (
    <CartContainer>
      <h1>Carrinho</h1>

      <CartWrapper ref={sliderRef} className="keen-slider">
        {/* {Array(cartDetails).map((item) => {
          return (
            <CartItem key={item.} className="keen-slider__slide">
              <ImageContainer>
                <Image src={camisa} width={128} height={180} alt="" />
              </ImageContainer>

              <InfoContainer>
                <div>
                  <span>Camisa X</span>
                  <strong>R$ 79.90</strong>
                </div>
                <button>
                  <X />
                </button>
              </InfoContainer>
            </CartItem>
          )
        })} */}
        <CartItem className="keen-slider__slide">
          <ImageContainer>
            <Image src={camisa} width={128} height={180} alt="" />
          </ImageContainer>

          <InfoContainer>
            <div>
              <span>Camisa X</span>
              <strong>R$ 79.90</strong>
            </div>
            <button>
              <X />
            </button>
          </InfoContainer>
        </CartItem>
      </CartWrapper>

      <InfoCart>
        <div>
          <span>
            Total:
            <strong> R$ 100,00</strong>
          </span>
        </div>

        <button onClick={handleBuy} disabled={isCheckoutDisabled}>
          Comprar agora
        </button>
      </InfoCart>
    </CartContainer>
  )
}
