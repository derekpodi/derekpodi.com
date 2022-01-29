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
                        <a>-Sphere</a>
                    </Link>
                <br/><br/>
                    <Link href="/3d/box">
                        <a>-Box</a>
                    </Link>
                <br/><br/>
                    <Link href="/3d/scroll">
                        <a>-Scroll</a>
                    </Link>
                <br/><br/>
                    <Link href="/3d/sandbox">
                        <a>-Sandbox</a>
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