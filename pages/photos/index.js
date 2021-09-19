import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/photos'
import Link from 'next/link'
import Date from '../../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  
export default function Photos({ allPostsData }) {
    return (
      <Layout Photos>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Photos</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/photos/${id}`}>
                <a>{id}</a>
              </Link>
              <br />
            </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }