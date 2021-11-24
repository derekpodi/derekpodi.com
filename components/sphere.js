import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere as NativeSphere } from '@react-three/drei'

export default function Sphere(props) {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <NativeSphere
      args={[2]}
      {...props}
      ref={mesh}
      scale={active ? [6, 6, 6] : [5, 5, 5]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        attach="material"
        color={hovered ? '#0000FF' : '#720b23'}
        wireframe
      />
    </NativeSphere>
  )
}