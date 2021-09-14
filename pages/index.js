import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

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
      
      <section className={utilStyles.headingMd}>
        <div className="container">
          <h2>About</h2>
          <div className="columns">
            <div className="column">
              <table className="table">
                <thead>
                  <tr>
                    <th>Personal Information</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Derek</td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td>[Add link here]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p></p>
          <div className="column">
            <table className="table">
                <thead>
                  <tr>
                    <th>Contact</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>derek podi at gmail dot com</td>
                  </tr>
                  <tr>
                    <td>Github</td>
                    <td>
                      <Link href="https://github.com/derekpodi">
                        <a>derekpodi</a>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>  
        </div>

        <p></p>
        <div>
          <Link href={`/notes`}>
            <a>Notes</a>
          </Link>
        </div>
        <p></p>
        <div>
          <Link href={`/media`}>
            <a>Media</a>
          </Link>
        </div>
        <p></p>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


/*
//Server Side Rendering (API) - https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}

//SWR - https://swr.vercel.app/docs/getting-started
const fetcher = (...args) => fetch(...args).then(res => res.json())

import useSWR from 'swr'

function Profile () {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>hello {data.name}!</div>
}
*/