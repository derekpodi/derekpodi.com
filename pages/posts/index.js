/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
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
  
export default function Posts({ allPostsData }) {
    return (
      <Layout Posts>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Posts</h2>
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
        
        <div className={utilStyles["measure-wide"]}>
        <h4>Posts</h4>
          <div >
            <table className="table">
              <thead className={utilStyles["black"] + " " + utilStyles["bg-light-gray"]+ " " + utilStyles["ba"] + " " + utilStyles["b--black"]}>
                <tr>
                  <th className={utilStyles["measure-12"]}> Date </th>
                  <th className={utilStyles["measure-12"]}> Title</th>
                </tr>
              </thead>
              {allPostsData.map(({ id, date, title }) => (
              <tbody>
                <tr>
                  <td>{date}</td>
                  <td>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              ))}
            </table>
          </div>
        </div>
      </Layout>
    )
  }
        

/*
<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  <h2 className={utilStyles.headingLg}>Posts</h2>
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
*/