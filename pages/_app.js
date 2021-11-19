import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

/*
import '../node_modules/spectre.css'
import '../styles/computer.css'
import '../styles/utils.module.css'
*/


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute = 'data-theme'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}