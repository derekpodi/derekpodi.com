import Layout from '../../components/layout'
import Link from 'next/link'



const Three = () => {
    return (
        <Layout Three>
            <div>
                <h1>3D Model Tests</h1>
                <br />
                <p>
                    <Link href="/3d/sphere">
                        <a>Sphere</a>
                    </Link>
                </p>
                <p>
                    <Link href="/3d/box">
                        <a>Box</a>
                    </Link>
                </p>
            </div>
        </Layout>
        
    );
}

export default Three;