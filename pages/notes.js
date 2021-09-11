import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Notes = () => {
    return (
        <Layout Notes>
            <div>
                <h1>Notes</h1>
                <p>Testing testing 1 2 3</p>
                <p>Testing testing 1 2 3</p>
            </div>
        </Layout>
    );
}

export default Notes;