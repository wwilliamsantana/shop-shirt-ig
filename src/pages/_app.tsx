import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import logo from '@/assets/logoIg.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} width={130} height={52} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
