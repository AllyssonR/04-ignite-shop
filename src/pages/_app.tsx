import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import igniteLogo from '../assets/IgniteLogo.svg'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <img src={igniteLogo.src} alt="" />
      </header>
      <Component {...pageProps} />
    </>
  )
}
