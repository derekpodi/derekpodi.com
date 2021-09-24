import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
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


const SWR = () => {
    return (
        <Layout SWR>
        

            <Profile  />
            
            <br></br>
            <h2> Youtube Embed</h2>
            <div className="video-responsive">
                <iframe src="https://www.youtube-nocookie.com/embed/ze8ycxc1UzE" width="..." height="..." frameborder="0" allowfullscreen></iframe>
            </div>
            <br></br>
            <h2> Vimeo Embed</h2>
            <div className="video-responsive">
                <iframe src="https://player.vimeo.com/video/1084537?h=b1b3ab5aa2" width="..." height="..." frameborder="0" allowfullscreen></iframe>
            </div>
        </Layout>
        
    );
}

export default SWR;