import Layout from '../../components/layout'

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
        </Layout>
    );
}

export default Details;