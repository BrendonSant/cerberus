import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

// 3D Model component
const Model = (props) => {
  const group = useRef()
  const [hovered, setHover] = useState(false)
  const [error, setError] = useState(null)
  
  const { scene, animations } = useGLTF('/gltf/Brendon.glb', undefined, (error) => {
    console.error('Error loading model:', error)
    setError(error)
  })

  // Get access to animations
  const { actions, names } = useAnimations(animations, group)

  // Play all animations when component mounts
  useEffect(() => {
    // Log available animations
    console.log('Available animations:', names)

    // Play all animations
    names.forEach((animationName) => {
      const action = actions[animationName]
      if (action) {
        action.reset().play()
        action.setLoop(THREE.LoopRepeat, Infinity)
      }
    })
  }, [actions, names])

  if (error) {
    return (
      <Text
        position={[0, 0, 0]}
        color="red"
        fontSize={0.5}
        maxWidth={4}
        textAlign="center"
        anchorX="center"
        anchorY="middle">
        Error loading model
      </Text>
    )
  }

  return (
    <group
      {...props}
      ref={group}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive 
        object={scene} 
        scale={[1.4, 1.4, 1.4]}
        position={[0, -1, 0]}
      />
    </group>
  )
}

// Preload the model
useGLTF.preload('/gltf/Brendon.glb')

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
  description = "Hover over the 3D object to see it change color. You can rotate and pan the view." 
}) => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      display: 'flex',
      flexDirection: 'row',
      position: 'relative' 
    }}>
      {/* 3D Canvas Section */}
      <div style={{ width: '50%', height: '100%' }}>
        <Canvas
          camera={{ position: [0, 2, 5], fov: 45 }}
          style={{ 
            background: '#000000',
            width: '100%',
            height: '100%'
          }}
          alpha={true}
          transparent={true}
        >
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.8} />
          
          <Model position={[0, 0, 0]} />
          
          <OrbitControls 
            enablePan={true} 
            enableZoom={false} 
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
        </Canvas>
      </div>

      {/* Text Content Section */}
      <div style={{ 
        width: '50%', 
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#000000',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textAlign: 'left'
        }}>
          {title}
        </h1>
        <p style={{ 
          fontSize: '1.2rem',
          lineHeight: '1.6',
          color: '#cccccc',
          textAlign: 'left'
        }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ThreeDMe