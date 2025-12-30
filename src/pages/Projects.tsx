import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { projects } from '@/data/projects'
import { ProgressOrbit } from '@/components/progress/ProgressOrbit'
import { Loader2, Rocket, Brain, Code2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Projects() {
    const [webglError, setWebglError] = useState(false)

    return (
        <div className="min-h-screen pt-32 pb-40 px-6">
            <div className="container mx-auto">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-4">
                        <div className="glass-card px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-primary/20">
                            <Rocket className="h-3.5 w-3.5" />
                            <span>Lab d'Innovation Étudiante</span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        Architectes du <span className="gradient-text">Futur</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                        Explorez la frontière de l'IA et du Génie Logiciel à travers les projets de rupture
                        et les prototypes techniques de nos étudiants.
                    </p>
                </motion.div>

                {/* 3D Constellation View */}
                <div className="h-[650px] glass-card rounded-[2.5rem] overflow-hidden relative border-white/5 shadow-2xl">
                    {!webglError ? (
                        <Canvas
                            camera={{ position: [0, 5, 12], fov: 50 }}
                            onCreated={({ gl }) => {
                                gl.domElement.addEventListener('webglcontextlost', () => {
                                    setWebglError(true)
                                })
                            }}
                        >
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.4} />
                                <pointLight position={[10, 10, 10]} intensity={2} />
                                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                                <ProgressOrbit projects={projects} />
                                <OrbitControls
                                    enableZoom={true}
                                    enablePan={false}
                                    maxDistance={25}
                                    minDistance={5}
                                />
                            </Suspense>
                        </Canvas>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 bg-slate-950/20 backdrop-blur-xl">
                            <div className="text-center max-w-md p-8">
                                <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-primary opacity-50" />
                                <h3 className="text-xl font-bold mb-2">Lien Neural Interrompu</h3>
                                <p className="text-muted-foreground mb-6">Le moteur de visualisation 3D a rencontré une erreur. Veuillez recharger la page ou parcourir les archives ci-dessous.</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                                >
                                    Reconnecter le Système
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Overlay info */}
                    <div className="absolute top-8 left-8 space-y-2 pointer-events-none">
                        <div className="glass-strong px-4 py-2 rounded-xl border-white/10 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Nœud de Recherche IA</span>
                        </div>
                        <div className="glass-strong px-4 py-2 rounded-xl border-white/10 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Nœud d'Infrastructure GL</span>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8 glass-card px-4 py-2 rounded-xl text-xs font-bold text-muted-foreground flex items-center gap-2">
                        <span className="opacity-60">Carte Interactive</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                </div>

                {/* Project List */}
                <div className="mt-24">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold">Archives de l'Innovation</h2>
                        <div className="flex gap-2">
                            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl text-sm font-bold opacity-60">
                                <Brain className="h-4 w-4" /> IA
                            </div>
                            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl text-sm font-bold opacity-60">
                                <Code2 className="h-4 w-4" /> GL
                            </div>
                        </div>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={staggerItem}
                                className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-primary/20 hover:glass-strong transition-all duration-500 group relative flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-3 rounded-2xl ${project.category === 'IA' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-purple-500/10 text-purple-500'}`}>
                                        {project.category === 'IA' ? <Brain className="h-6 w-6" /> : <Code2 className="h-6 w-6" />}
                                    </div>
                                    <div
                                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter ${project.status === 'terminé'
                                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                            : project.status === 'en-cours'
                                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                                            }`}
                                    >
                                        {project.status}
                                    </div>
                                </div>

                                <h3 className="font-black text-2xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-medium">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-white/5 text-xs rounded-lg font-bold opacity-80 group-hover:opacity-100 group-hover:bg-primary/10 group-hover:text-primary transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Architecte</span>
                                        <span className="text-sm font-bold">{project.studentName}</span>
                                    </div>
                                    <Link to="/projects">
                                        <button className="p-2 glass-strong rounded-full hover:scale-110 transition-transform">
                                            <ExternalLink className="h-4 w-4" />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
