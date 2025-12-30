import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { InteractiveCourseOrb } from '@/components/3d/InteractiveCourseOrb'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Brain, Code2 } from 'lucide-react'
import { fadeInUp, scaleIn } from '@/lib/animations'
import { Link } from 'react-router-dom'

export function HeroSectionWith3DCanvas() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
            {/* 3D Canvas Background - Neural Network / Orb */}
            <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-30">
                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1.5} />
                        <InteractiveCourseOrb />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto space-y-10"
                >
                    {/* Badge */}
                    <motion.div variants={scaleIn} className="flex justify-center">
                        <div className="glass-card px-6 py-2.5 inline-flex items-center gap-3 text-sm font-semibold tracking-wide">
                            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                            <span className="uppercase opacity-80">Excellence en IA & Génie Logiciel</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
                        <span className="block mb-2 text-slate-900 dark:text-white">Maîtrisez l'ère de </span>
                        <span className="block gradient-text dark:gradient-text drop-shadow-sm">
                            l'Intelligence
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                        Formation de nouvelle génération pour les architectes de demain.
                        Plongez dans l'<span className="text-foreground">Intelligence Artificielle</span> et
                        les <span className="text-foreground">Systèmes Logiciels Avancés</span>.
                    </p>

                    {/* Specialization Tracks */}
                    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                            <Brain className="h-5 w-5 text-indigo-500" />
                            <span className="text-sm font-bold">Architectures Neurales</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                            <Code2 className="h-5 w-5 text-purple-500" />
                            <span className="text-sm font-bold">Systèmes Résilients</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                        <Link to="/courses">
                            <Button size="lg" className="text-lg px-10 py-7 group transition-all duration-500 hover:scale-105 shadow-2xl shadow-primary/30">
                                Voir les parcours IA
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to="/courses">
                            <Button size="lg" variant="outline" className="text-lg px-10 py-7 glass-card border-white/20 hover:border-primary/50 transition-colors">
                                Génie Logiciel
                            </Button>
                        </Link>
                    </div>

                    {/* Stats Bar */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-20 max-w-4xl mx-auto"
                    >
                        {[
                            { value: 'IA', label: 'Recherche Appliquée' },
                            { value: '12+', label: 'Parcours Experts' },
                            { value: 'Live', label: 'Design Système' },
                            { value: 'PRO', label: 'Cloud Native' },
                        ].map((stat) => (
                            <motion.div key={stat.label} variants={scaleIn} className="glass-card p-5 rounded-2xl flex flex-col justify-center border-white/10">
                                <div className="text-2xl font-black text-primary">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest font-bold opacity-60 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-50"
                >
                    <div className="w-6 h-12 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}
