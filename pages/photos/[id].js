import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/photos'
import Image from 'next/image'
import path from 'path'



export default function Post({ postData }) {
    const postsDirectory = path.join(process.cwd(), '/images')
    const fileName = postData.id + ".jpg"
    const fullPath = path.join(postsDirectory, fileName)

  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {fullPath}
      <br />
      <Image src={fullPath} width={400} height={400} alt={postData.id} />
      <br />
      {postData.date}
    </Layout>
  )
}

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