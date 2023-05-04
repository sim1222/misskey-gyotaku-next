import '@/styles/reset.css'
import '@/styles/global.scss'
import '@/styles/variables.scss';
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
