import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"


/*
import '../styles/computer.css'
import '../styles/utils.module.css'

import '../node_modules/spectre.css/dist/spectre.css'
import '../node_modules/spectre.css/dist/spectre-exp.css'
import '../node_modules/spectre.css/dist/spectre-exp.min.css'
import '../node_modules/spectre.css/dist/spectre-icons.css'
import '../node_modules/spectre.css/dist/spectre.min.css'
*/


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}