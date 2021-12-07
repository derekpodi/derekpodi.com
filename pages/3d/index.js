import Layout from '../../components/layout'
import Link from 'next/link'



const Three = () => {
    return (
        <Layout Three>
            <div>
                <h1>3D Model Tests</h1>
                <p>
                    <Link href="/3d/sphere">
                        <a>Sphere</a>
                    </Link>
                <br/>
                    <Link href="/3d/box">
                        <a>Box</a>
                    </Link>
                </p>
                <p>
                    Instructions: <br/>
                    Left Click - Enlarge Models <br/>
                    Left Click + Drag - Spin <br/>
                    Right Click - Move Camera
                </p>
            </div>
        </Layout>
        
    );
}

export default Three;