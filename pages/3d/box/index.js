import Layout from '../../../components/layout'
import Link from 'next/link'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../../../components/box'
import utilStyles from '../../../styles/utils.module.css'

const BoxIndex = () => {
    return (
        <Layout BoxIndex>
            <div className={utilStyles.center} 
                style={{ position: "relative", width: 550, height: 550}}>
                <Canvas camera={{ position: [0, 0, 20] }}>
                <ambientLight intensity={3} />
                <pointLight position={[40, 40, 40]} />
             
                <Box position={[10, 0, 0]} />
                <Box position={[-10, 0, 0]} />
                <Box position={[0, 10, 0]} />
                <Box position={[0, -10, 0]} />
                
                <OrbitControls />
                </Canvas>
            </div>
            <footer className={`${utilStyles.mh3} ${utilStyles.mt4}`}>
                <div className="flex-centered">
                <Link
                    href="/3d"
                    className={utilStyles["top-2"] + " " + utilStyles["btn"]+ " " + utilStyles["btn-sm"] + " " + utilStyles["bg-dark-green"] + " " + utilStyles["white"] + " " + utilStyles["hover-white"]+ " " + utilStyles["hover-bg-black"]}>
                    ← Back to 3D
                </Link>
                </div>
                <div className={utilStyles.mt3}></div>
                <div className={utilStyles["bottom-2"]}></div>
            </footer>
        </Layout>
    );
}

export default BoxIndex;