import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Line, Text, Float } from '@react-three/drei'
import * as THREE from 'three'
import type { Project } from '@/data/projects'
import { useTheme3D } from '@/hooks/use-theme-3d'

interface ProgressOrbitProps {
    projects: Project[]
}

export function ProgressOrbit({ projects }: ProgressOrbitProps) {
    const groupRef = useRef<THREE.Group>(null)
    const theme3D = useTheme3D()

    // Gentle rotation
    useFrame((_state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05
        }
    })

    // Get completed projects for connections
    const completedProjects = projects.filter((p) => p.status === 'terminé')

    return (
        <group ref={groupRef}>
            {/* Project nodes */}
            {projects.map((project) => {
                const isCompleted = project.status === 'terminé'
                const isInProgress = project.status === 'en-cours'
                const isAI = project.category === 'IA'

                return (
                    <Float key={project.id} speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                        <group position={project.position}>
                            <Sphere args={[0.3, 32, 32]}>
                                <meshStandardMaterial
                                    color={
                                        isCompleted
                                            ? (isAI ? '#6366f1' : '#a855f7') // indigo for AI, purple for SE
                                            : isInProgress
                                                ? theme3D.particleColor
                                                : '#475569' // slate-600
                                    }
                                    emissive={
                                        isCompleted
                                            ? (isAI ? '#6366f1' : '#a855f7')
                                            : isInProgress
                                                ? theme3D.particleColor
                                                : '#475569'
                                    }
                                    emissiveIntensity={isCompleted ? 1 : isInProgress ? 0.6 : 0.2}
                                />
                            </Sphere>

                            {/* Labels for projects */}
                            <Text
                                position={[0, 0.6, 0]}
                                fontSize={0.2}
                                color="white"
                                anchorX="center"
                                anchorY="middle"
                                font="https://fonts.gstatic.com/s/outfit/v11/Q_bg9nHls_LAnxucqK8hS2A.woff"
                            >
                                {project.title}
                            </Text>

                            {/* Outer glow ring for AI */}
                            {isAI && (
                                <mesh rotation={[Math.PI / 2, 0, 0]}>
                                    <ringGeometry args={[0.4, 0.45, 32]} />
                                    <meshBasicMaterial color="#6366f1" transparent opacity={0.3} />
                                </mesh>
                            )}
                        </group>
                    </Float>
                )
            })}

            {/* Connection lines between completed projects (Network structure) */}
            {completedProjects.map((project) => {
                // Connect each project to the next one in its category if possible
                const sameCategoryCompleted = completedProjects.filter(p => p.category === project.category)
                const projectIndex = sameCategoryCompleted.findIndex(p => p.id === project.id)

                if (projectIndex === sameCategoryCompleted.length - 1) return null

                const nextProject = sameCategoryCompleted[projectIndex + 1]
                const points = [
                    new THREE.Vector3(...project.position),
                    new THREE.Vector3(...nextProject.position),
                ]

                return (
                    <Line
                        key={`${project.id}-${nextProject.id}`}
                        points={points}
                        color={project.category === 'IA' ? '#6366f1' : '#a855f7'}
                        lineWidth={1.5}
                        transparent
                        opacity={0.4}
                    />
                )
            })}

            {/* Central "Core" hub */}
            <Sphere args={[0.5, 32, 32]}>
                <meshStandardMaterial
                    color={theme3D.pointLightColor}
                    emissive={theme3D.pointLightColor}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.2}
                    wireframe
                />
            </Sphere>
        </group>
    )
}
