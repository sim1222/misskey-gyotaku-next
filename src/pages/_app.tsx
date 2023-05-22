import '@/styles/reset.css'
import '@/styles/global.scss'
import '@/styles/variables.scss';
import type {AppProps} from 'next/app'
import {Zen_Kaku_Gothic_New} from "@next/font/google";

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
	weight: ["300", "400", "500", "700"],
	display: 'swap',
	subsets: ["latin-ext"],
})

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			{/* eslint-disable-next-line react/no-unknown-property */}
			<style jsx global>{`
				@font-face {
					font-family: ${ZenKakuGothicNew.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />

		</>
	)
}
