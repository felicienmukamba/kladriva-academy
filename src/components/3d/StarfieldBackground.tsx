import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Starfield } from './Starfield'
import { useTheme3D } from '@/hooks/use-theme-3d'

export function StarfieldBackground() {
    const theme3D = useTheme3D()

    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                style={{ background: 'transparent' }}
            >
                <Suspense fallback={null}>
                    <ambientLight
                        color={theme3D.ambientColor}
                        intensity={theme3D.ambientIntensity}
                    />
                    <pointLight
                        position={[10, 10, 10]}
                        color={theme3D.pointLightColor}
                        intensity={theme3D.pointLightIntensity}
                    />
                    <Starfield count={5000} />
                </Suspense>
            </Canvas>
        </div>
    )
}
