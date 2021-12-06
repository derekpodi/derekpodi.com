import Layout from '../../../components/layout'
import Link from 'next/link'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sphere from '../../../components/sphere'
import utilStyles from '../../../styles/utils.module.css'


const SphereIndex = () => {
    return (
        <Layout SphereIndex>
            <div className={utilStyles.center} 
                style={{ position: "relative", width: 550, height: 550}}>
                <Canvas camera={{ position: [0, 0, 20] }}>
                <ambientLight intensity={3} />
                <pointLight position={[40, 40, 40]} />
                <Sphere position={[0, 0, 0]} />
              
                <OrbitControls />
                </Canvas>
            </div>
            <footer className={`${utilStyles.mh3} ${utilStyles.mt4}`}>
                <div className="flex-centered">
                <Link href="/3d">
                    <a className={utilStyles["top-2"] + " " + utilStyles["btn"]+ " " + utilStyles["btn-sm"] + " " + utilStyles["bg-dark-green"] + " " + utilStyles["white"] + " " + utilStyles["hover-white"]+ " " + utilStyles["hover-bg-black"]}>← Back to 3D</a>
                </Link>
                </div>
                <div className={utilStyles.mt3}></div>
                <div className={utilStyles["bottom-2"]}></div>
            </footer>
        </Layout>
        
    );
}

export default SphereIndex;