import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/Photos.module.css'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/photos'
import Link from 'next/link'
import Date from '../../components/date'
import Image from 'next/image'
import path from 'path'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  
export default function Photos({ allPostsData }) {
    const postsDirectory = path.join(process.cwd(), '/images')
    const fileName = allPostsData.id + ".jpg"
    const fullPath = path.join(postsDirectory, fileName)
    return (
      <Layout Photos>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Photos</h2>
          <article>
            <div className="container">
              <div className="columns flex-centered">
                <div className="column col-12 flex-centered">
                  <ul className={`${utilStyles.list} ${styles.ul}`}>
                    {allPostsData.map(({ id }) => (
                      <li className={styles.listItem} key={id}>
                      <Link href={`/photos/${id}`}>
                        <Image src={`/images/${id}.jpg`} width={283} height={283} quality={100} alt={allPostsData.id} /> 
                      </Link>
                      <br />
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    );
  }