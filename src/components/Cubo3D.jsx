
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Figura({ forma, color, girando, alto, ancho }) {
  const objeto = useRef()

  useFrame((_, delta) => {
    if (objeto.current && girando) {
      objeto.current.rotation.x += delta * 0.25
      objeto.current.rotation.y += delta * 0.6
    }
  })

  return (
    <mesh ref={objeto} scale={[ancho, alto, ancho]}>

      {forma === 'cubo' && (
        <boxGeometry args={[2, 2, 2]} />
      )}

      {forma === 'esfera' && (
        <sphereGeometry args={[1.5, 48, 48]} />
      )}

      {forma === 'cono' && (
        <coneGeometry args={[1.5, 2.7, 48]} />
      )}

      {forma === 'toroide' && (
        <torusGeometry args={[1.25, 0.42, 24, 64]} />
      )}

      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.3}
      />
    </mesh>
  )
}

export default function Cubo3D({
  forma,
  color,
  girando,
  alto,
  ancho
}) {
  return (
    <div className="h-[350px] w-full md:h-[450px]">
      <Canvas camera={{ position: [3, 2, 7], fov: 45 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <Figura
          key={forma}
          forma={forma}
          color={color}
          girando={girando}
          alto={alto}
          ancho={ancho}
        />

        <OrbitControls
          enablePan={false}
          minDistance={4}
          maxDistance={12}
        />
      </Canvas>
    </div>
  )
}

