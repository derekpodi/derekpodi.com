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
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}


const SWR = () => {
    return (
        <Layout SWR>
        

            <Profile />


        </Layout>
        
    );
}

export default SWR;