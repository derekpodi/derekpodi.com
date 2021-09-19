import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/photos'
import Image from 'next/image'


export default function Post({ postData }) {
  return (
    <Layout>
      {postData.id}
      <br />
      <Image src={"/photos/" + postData.id + ".jpeg"} width={400} height={400} />
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