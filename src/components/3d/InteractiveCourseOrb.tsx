import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme3D } from '@/hooks/use-theme-3d'

interface InteractiveCourseOrbProps {
    onSkillClick?: (skillId: number) => void
}

export function InteractiveCourseOrb({ onSkillClick }: InteractiveCourseOrbProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const theme3D = useTheme3D()

    const mouse = useRef({ x: 0, y: 0 })

    useState(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    })

    useFrame((_state, delta) => {
        if (!meshRef.current) return

        meshRef.current.rotation.x += (mouse.current.y * 0.5 - meshRef.current.rotation.x) * 0.05
        meshRef.current.rotation.y += (mouse.current.x * 0.5 - meshRef.current.rotation.y) * 0.05
        meshRef.current.rotation.z += delta * 0.2

        const targetScale = hovered ? 1.4 : 1.2
        meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    })

    // Skill nodes representing AI neurons or SE modules
    const nodes = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / 30)
            const theta = Math.sqrt(30 * Math.PI) * phi
            return {
                x: 2.3 * Math.cos(theta) * Math.sin(phi),
                y: 2.3 * Math.sin(theta) * Math.sin(phi),
                z: 2.3 * Math.cos(phi),
                id: i
            }
        })
    }, [])

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere
                    ref={meshRef}
                    args={[2, 64, 64]}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <MeshDistortMaterial
                        color={theme3D.particleColor}
                        speed={2}
                        distort={0.4}
                        radius={1}
                        wireframe
                        transparent
                        opacity={0.4}
                        emissive={theme3D.particleColor}
                        emissiveIntensity={hovered ? 0.8 : 0.3}
                    />
                </Sphere>
            </Float>

            {/* Node connections */}
            {nodes.map((node) => (
                <group key={node.id}>
                    <Sphere
                        args={[0.08, 16, 16]}
                        position={[node.x, node.y, node.z]}
                        onClick={() => onSkillClick?.(node.id)}
                    >
                        <meshStandardMaterial
                            color={theme3D.pointLightColor}
                            emissive={theme3D.pointLightColor}
                            emissiveIntensity={1}
                        />
                    </Sphere>
                </group>
            ))}

            {/* Internal Core */}
            <Sphere args={[1.5, 32, 32]}>
                <meshStandardMaterial
                    color={theme3D.pointLightColor}
                    emissive={theme3D.pointLightColor}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.1}
                />
            </Sphere>
        </group>
    )
}
