import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/photos'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import path from 'path'



export default function Post({ postData }) {
    const postsDirectory = path.join(process.cwd(), '/images')
    const fileName = postData.id + ".jpg"
    const fullPath = path.join(postsDirectory, fileName)

  return (
    <Layout>
      <div className="flex-centered" >
        <br />
        <Image src={fullPath} width="1000%" height="1000%" quality={100} objectFit='contain' alt={postData.id} />
        <br />
      </div>
      <footer className={`${utilStyles.mh3} ${utilStyles.mt4}`}>
        <div className="flex-centered">
          <Link href="/photos">
            <a className={utilStyles["top-2"] + " " + utilStyles["btn"]+ " " + utilStyles["btn-sm"] + " " + utilStyles["bg-dark-green"] + " " + utilStyles["white"] + " " + utilStyles["hover-white"]+ " " + utilStyles["hover-bg-black"]}>← Back to photos</a>
          </Link>
        </div>
        <div className={utilStyles.mt3}></div>
        <div className={utilStyles["bottom-2"]}></div>
      </footer>
    </Layout>
  )
}

/*
<br />
{postData.id}
<br />
{fullPath}
<br />
{postData.date}
*/

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}