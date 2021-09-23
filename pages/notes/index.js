import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import useSWR from 'swr'

/*
function Form() {
    const registerUser = async event => {
        event.preventDefault()
        console.log('You clicked submit.');

        const res = await fetch('/api/sanicjson', {
            body: JSON.stringify({
                name: event.target.name.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        // result.user => 'John Doe'
    }

    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">Name </label>
            <input id="name" name="name" type="text" autoComplete="name" required />
            <button type="submit">Register</button>
        </form>
    )
}
https://nextjs.org/blog/forms
*/

const fetcher = (...args) => fetch(...args).then(res => res.json())



function Profile () {
    const url = `/api/buy`
    const { data, error } = useSWR(url, fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}


const Notes = () => {
    return (
        <Layout Notes>
            <div> 
                <h1>Notes</h1>
                <p>Testing testing 1 2 3</p>
                <p>Testing testing 1 2 3</p>
            </div>
            <br />
            <form action="/api/buy" method="GET">
            <label htmlFor="name">Stock </label>
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
            </form>

            <form action="/api/buy" >
            <label htmlFor="name">Stock </label>
                <input type="text" name="name" autoComplete="name" required/>
                <input type="submit" value="Submit" />
            </form>
        </Layout>
        
    );
}

export default Notes;