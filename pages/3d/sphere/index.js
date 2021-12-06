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
        </Layout>
        
    );
}

export default SphereIndex;