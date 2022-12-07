import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import ThemeChanger from '../components/color'
import Typewriter from '../components/typewriter'


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
