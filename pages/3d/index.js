import Layout from '../../components/layout'
import Link from 'next/link'



const Three = () => {
    return (
        <Layout Three>
            <div>
                <h1>3D Model Tests</h1>
                <br/>
                <h2>
                    <Link href="/3d/sphere">
                        -Sphere
                    </Link>
                <br/><br/>
                    <Link href="/3d/box">
                        -Box
                    </Link>
                <br/><br/>
                    <Link href="/3d/scroll">
                        -Scroll
                    </Link>
                <br/><br/>
                    <Link href="/3d/sandbox">
                        -Sandbox
                    </Link>
                <br/><br/>


                </h2>
                <p>
                    Instructions: <br/>
                    Left Click - Enlarge Models <br/>
                    Left Click + Drag - Spin <br/>
                    Right Click + Drag - Move Camera Viewport
                </p>
            </div>
        </Layout>
    );
}

export default Three;