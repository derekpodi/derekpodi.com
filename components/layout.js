import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'
import Menu from './menu'
import Footer from './footer'

const name = 'Derek '
export const siteTitle = 'Derek Podimatis'

export default function Layout({ children, home }) {
  return (
    <div className={utilStyles.container}>
      
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      <Menu />
      

      <main className={utilStyles.mh5}>{children}</main>


      <footer className={`${utilStyles.mh5} ${utilStyles.mt4}`}>
        {!home && (
          <div className={utilStyles.backToHome}>
            <Link href="/">
              <a className={utilStyles["top-2"] + " " + utilStyles["btn"]+ " " + utilStyles["btn-sm"] + " " + utilStyles["white"] + " " + utilStyles["bg-dark-green"] + " " + utilStyles["hover-white"]+ " " + utilStyles["hover-bg-black"]}>← Back to home</a>
            </Link>
          </div>
        )}
        <div className={utilStyles.mt3}></div>
        <Footer />
      </footer>

    </div>
  )
}


