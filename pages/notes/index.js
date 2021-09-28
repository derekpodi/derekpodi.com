import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'


const Notes = () => {
    return (
        <Layout Notes>
            <div> 
                <h1>Notes</h1>
                <br />
                <p>Enter a Stock Ticker - returns investment bank grades tally</p>
            </div>            
            <form action="/api/buy" >
            <label htmlFor="name">Stock </label>
                <input type="text" name="name" autoComplete="name" required/>
                <input type="submit" value="Submit" />
            </form>
        </Layout>
        
    );
}

export default Notes;



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


            <form action="/api/buy" method="GET">
            <label htmlFor="name">Stock </label>
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
            </form>   
*/