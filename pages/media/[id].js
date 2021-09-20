import Layout from '../../components/layout'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'



//Tells Next how many HTML pages need to be made based on data
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(users => {
        return {
            params: { id: users.id.toString()}
        }
    })

    return{
        paths: paths,
        fallback: false
    }
}

//For each html paths, gets specific user info - return into page template
export const getStaticProps = async (context) => {
    const id =  context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return{
        props: { user: data}
    }
}


const Details  = ({ user }) => {
    return(
        <Layout>
            <div>
                <h3>{ user.name }</h3>
                <p>{ user.email }</p>
                <p>{ user.website }</p>
                <p>{ user.address.city }</p>
            </div>
            <footer className={`${utilStyles.mt4}`}>
                <div className="flex-left">
                <Link href="/media">
                    <a className={utilStyles["top-2"] + " " + utilStyles["btn"]+ " " + utilStyles["btn-sm"] + " " + utilStyles["bg-dark-green"] + " " + utilStyles["white"] + " " + utilStyles["hover-white"]+ " " + utilStyles["hover-bg-black"]}>← Back to media</a>
                </Link>
                </div>
                <div className={utilStyles.mt3}></div>
                <div className={utilStyles["bottom-2"]}></div>
            </footer>
        </Layout>
    );
}

export default Details;