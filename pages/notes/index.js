import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

function Form() {
    const registerUser = async event => {
        event.preventDefault()

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

const Notes = () => {
    return (
        <Layout Notes>
            <div>
                <h1>Notes</h1>
                <p>Testing testing 1 2 3</p>
                <p>Testing testing 1 2 3</p>
            </div>
            <br />
            <Form />
        </Layout>
    );
}

export default Notes;