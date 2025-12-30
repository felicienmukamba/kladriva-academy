import { useEffect, useRef } from 'react'

export function SimpleTechBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        // Particles/Grid Logic
        const particles: { x: number, y: number, vx: number, vy: number, size: number }[] = []
        const particleCount = 40

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2, // Very slow movement
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 2
            })
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, width, height)

            // Draw Grid (Subtle)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
            ctx.lineWidth = 1
            const gridSize = 100

            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath()
                ctx.moveTo(x, 0)
                ctx.lineTo(x, height)
                ctx.stroke()
            }

            // Horizontal lines
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath()
                ctx.moveTo(0, y)
                ctx.lineTo(width, y)
                ctx.stroke()
            }


            // Draw Particles and Connections
            ctx.fillStyle = 'rgba(120, 120, 255, 0.4)'
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()

                // Connections
                particles.forEach((p2, j) => {
                    if (i === j) return
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 150) {
                        ctx.strokeStyle = `rgba(100, 100, 255, ${0.1 * (1 - dist / 150)})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(animate)
        }

        const animId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animId)
        }
    }, [])

    return (
        <div className="fixed inset-0 -z-20 bg-[#0f0e17] overflow-hidden">
            {/* Deep Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0e17] via-[#1a1a2e] to-[#0f0e17]" />

            {/* Subtle Glowing Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full animate-float-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full animate-float-delayed" />

            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        </div>
    )
}
