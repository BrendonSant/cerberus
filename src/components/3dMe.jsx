import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, useGLTF } from '@react-three/drei'

// 3D Model component - using a simple box for demonstration
// You can replace this with a custom model using useGLTF
const Model = (props) => {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  
  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={hovered ? '#2196f3' : '#e91e63'} />
    </mesh>
  )
}

// Text content component positioned in 3D space
const TextContent = ({ title, description }) => {
  return (
    <group position={[0, 2.5, 0]}>
      <Text
        position={[0, 0, 0]}
        color="white"
        fontSize={0.5}
        maxWidth={4}
        textAlign="center"
        anchorX="center"
        anchorY="middle">
        {title}
      </Text>
      <Text
        position={[0, -0.7, 0]}
        color="#cccccc"
        fontSize={0.2}
        maxWidth={5}
        lineHeight={1.2}
        textAlign="center"
        anchorX="center"
        anchorY="middle">
        {description}
      </Text>
    </group>
  )
}

// Main component
const ThreeDMe = ({ 
  title = "3D Interactive Experience", 
  description = "Hover over the 3D object to see it change color. You can rotate, pan and zoom the view." 
}) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} />
        
        <Model position={[0, 0, 0]} />
        <TextContent title={title} description={description} />
        
        <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      </Canvas>
    </div>
  )
}

export default ThreeDMe