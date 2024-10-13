"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Brain } from 'lucide-react'

function AnimatedSphere() {
  const meshRef = useRef()

  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#9F7AEA"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  )
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Brain className="h-20 w-20 text-purple-400 mb-8" />
        <h1 className="text-5xl font-bold text-gray-100 mb-4">MindTrack</h1>
        <p className="text-xl text-gray-300 mb-8">Your personal mental well-being companion</p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Start Your Journey
        </Button>
      </div>
    </div>
  )
}