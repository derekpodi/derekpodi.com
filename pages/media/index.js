import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

//Fetch API info before sent to browser
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props:{ users: data }
    }
}


const Media = ({ users }) => {
    return (
        <Layout Media>
            <div>
                <h1>Media</h1>
                <br />
                <p>External API testing with dynamic pages: <a href="https://jsonplaceholder.typicode.com/"> JSON SRC</a></p>
                {users.map(users => (
                    <Link href={'/media/' + users.id} key={users.id}>
                        <a>
                            <p>{ users.name }</p>
                        </a>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export default Media;