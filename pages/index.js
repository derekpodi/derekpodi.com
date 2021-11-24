import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import ThemeChanger from '../components/color'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/box'
import Sphere from '../components/sphere'

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
      
      <div className={utilStyles.center}
        style={{ position: "relative", width: 350, height: 350}}>
        <Canvas camera={{ position: [0, 0, 20] }}>
          <ambientLight intensity={3} />
          <pointLight position={[40, 40, 40]} />
          <Sphere position={[0, 0, 0]} />
          {/*
          <Box position={[10, 0, 0]} />
          <Box position={[-10, 0, 0]} />
          <Box position={[0, 10, 0]} />
          <Box position={[0, -10, 0]} />
          */}
          <OrbitControls />
        </Canvas>
      </div>

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


/*
//Server Side Rendering (API) - https://nextjs.org/docs/basic-features/data-fetching#sideprops-server-side-rendering
export async function SideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
*/