import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/swr.module.css'
import Link from 'next/link'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())



function Profile () {
    const url = `https://api.github.com/users/derekpodi`
    const { data, error } = useSWR(url, fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    return <pre className={utilStyles.mh5}>{JSON.stringify(data, null, 2)}</pre>
}


export async function getServerSideProps() {
    // Fetch data from external API
    const url = `https://jsonplaceholder.typicode.com/albums`
    const res = await fetch(url)
    const data = await res.json()
  
    // Pass data to the page via props
    return { 
        props: {
             albums: data 
        } 
    }
  }


const SWR = ({ albums }) => {
    return (
        <Layout SWR>
            <p>
                This page tests many different features within NextJS. Examples of embedded links, json data, and videos. Stale-while-revaluate (SWR) is a strategy to first return the data from cache (stale), then send the fetch request (revalidate)
            </p>
            <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>

            <Profile  />


            <ul className={styles.grid}>
                {albums.map(albums => {
                    return (
                        <li key={albums.id} className={styles.card}>
                            <a href="https://nextjs.org/learn">
                                <h3>{ albums.title }</h3>
                            </a>
                        </li>
                    )
                })}
                
            </ul>


            <br></br>
            <h2> Youtube Embed</h2>
            <div className="video-responsive">
                <iframe src="https://www.youtube-nocookie.com/embed/ze8ycxc1UzE" width="..." height="..." frameBorder="0" allowFullScreen></iframe>
            </div>
            <br></br>
            <h2> Vimeo Embed</h2>
            <div className="video-responsive">
                <iframe src="https://player.vimeo.com/video/1084537?h=b1b3ab5aa2" width="..." height="..." frameBorder="0" allowFullScreen></iframe>
            </div>
        </Layout>
        
    );
}

export default SWR;