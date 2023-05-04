import '@/styles/reset.css'
import '@/styles/global.scss'
import '@/styles/variables.scss';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
