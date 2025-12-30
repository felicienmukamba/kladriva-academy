import { useTheme } from '@/providers/theme-provider'
import { useMemo } from 'react'

export interface Theme3DConfig {
    ambientColor: string
    ambientIntensity: number
    pointLightColor: string
    pointLightIntensity: number
    particleColor: string
    particleSize: number
}

export function useTheme3D(): Theme3DConfig {
    const { theme } = useTheme()

    const config = useMemo(() => {
        const isDark = theme === 'dark' ||
            (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

        if (isDark) {
            return {
                ambientColor: '#818cf8', // indigo-400
                ambientIntensity: 0.6,
                pointLightColor: '#a78bfa', // purple-400
                pointLightIntensity: 1.5,
                particleColor: '#818cf8',
                particleSize: 2,
            }
        }

        return {
            ambientColor: '#ffffff',
            ambientIntensity: 1.2,
            pointLightColor: '#4f46e5', // indigo-600
            pointLightIntensity: 1.0,
            particleColor: '#4f46e5',
            particleSize: 1.5,
        }
    }, [theme])

    return config
}
