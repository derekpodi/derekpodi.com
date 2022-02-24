import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/swr.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

import useSound from 'use-sound'

const fetcher = (...args) => fetch(...args).then(res => res.json())



function Profile () {
    const url = `https://api.github.com/users/derekpodi`
    const { data, error } = useSWR(url, fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    return <pre className="flex-left">{JSON.stringify(data, null, 2)}</pre>
}

function News () {
    const url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    const { data, error } = useSWR(url, fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    return <pre className="flex-left">{JSON.stringify(data.slice(0,10), null, 2)}</pre>
}

function News2 () {
    const url = `https://node-hnapi.herokuapp.com/news?page=1`
    const { data, error } = useSWR(url, fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    return <pre className="flex-left">{JSON.stringify(data.slice(0,10),["id", "title", "points", "url"], 2)}</pre>
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

    const BoopButton = () => {
        const [play] = useSound('/hey.wav')
      
        return <button onClick={play}>Hey!</button>
    }
    
    return (
        <Layout SWR>
            <p>
                This page tests many different features within NextJS. Examples of embedded links, json data, and videos. Stale-while-revaluate (SWR) is a strategy to first return the data from cache (stale), then send the fetch request (revalidate)
            </p>
            <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>

            <Profile />

            <News />

            <News2 />

        
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
            <br></br>

            <h2>Video Embed</h2>
            <video width="250" height="250" controls loop autoPlay>
                <source src='/bz.mp4' type="video/mp4" />
            </video>
            
            <h2> Gif Embed</h2>
            <div>
                <Image 
                src="/BZ.gif" 
                alt="landing page image" 
                width={250} 
                height={250}
                />            
            </div>
            <div>
            <h2>Audio Embed</h2>
            <audio
                controls
                src="/hey.wav">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            <br></br>
            <BoopButton />
            </div>
        </Layout>
        
    );
}

export default SWR;