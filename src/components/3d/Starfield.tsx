import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme3D } from '@/hooks/use-theme-3d'

interface StarfieldProps {
    count?: number
}

export function Starfield({ count = 5000 }: StarfieldProps) {
    const ref = useRef<THREE.Points>(null)
    const theme3D = useTheme3D()

    // Mouse position for interaction
    const mouse = useRef({ x: 0, y: 0 })
    const scrollY = useRef(0)

    // Generate random star positions
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            // Spread stars in a sphere around the camera
            const radius = 50 + Math.random() * 100
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i3 + 2] = radius * Math.cos(phi) - 50
        }

        return positions
    }, [count])

    // Mouse move listener
    useMemo(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
        }

        const handleScroll = () => {
            scrollY.current = window.scrollY
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Animate stars based on mouse and scroll
    useFrame((_state, delta) => {
        if (!ref.current) return

        // Rotate based on mouse position
        ref.current.rotation.x += mouse.current.y * 0.0001
        ref.current.rotation.y += mouse.current.x * 0.0001

        // Parallax based on scroll
        ref.current.position.z = scrollY.current * 0.01

        // Gentle continuous rotation
        ref.current.rotation.y += delta * 0.05
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={theme3D.particleColor}
                size={theme3D.particleSize}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    )
}
