import '@styles/globals.css'
import '@styles/editor.css'
import '@styles/markdown.css'
import '@styles/prism-atom-dark.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
