import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import igniteLogo from '../assets/IgniteLogo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={igniteLogo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
