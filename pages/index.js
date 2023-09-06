import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import ThemeChanger from '../components/color'
import Typewriter2 from '../components/typewriter'
import styles from '../styles/swr.module.css'
import { Analytics } from '@vercel/analytics/react';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      

      {/* ADD Typewriter 2 functionality -- Start w/ a verb and use 'you' to draw in visitors  */}

      
      <div>
        {/* <Typewriter2 /> */}
      </div>
      
      <body>
        <Analytics />
      </body>


      {/*TODO: ADD/Fix Landing Page

      <section className={utilStyles.headingMd}>
        
        <p>[Your Self Introduction]</p>
      </section>
      
      <section className={utilStyles.center}>
        <Image 
          src="/../public/" 
          alt="landing page image" 
          width={500} 
          height={500}
        />
      </section>

      */}

    </Layout>
  )
}
