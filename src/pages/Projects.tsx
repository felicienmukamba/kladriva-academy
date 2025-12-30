import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { projects } from '@/data/projects'
import { ProgressOrbit } from '@/components/progress/ProgressOrbit'
import { Loader2, Rocket, Brain, Code2 } from 'lucide-react'

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
                <div className="h-[500px] mb-24 glass-card rounded-[2.5rem] overflow-hidden relative border-white/5 shadow-2xl">
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
                                <p className="text-muted-foreground mb-6">Le moteur de visualisation 3D a rencontré une erreur.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Project List */}
                <div className="mt-24">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold">Archives de l'Innovation</h2>
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
                                className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                            >
                                {/* Image Cover */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className={`p-2 rounded-xl backdrop-blur-md border border-white/20 ${project.category === 'IA' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-purple-500/20 text-purple-300'}`}>
                                            {project.category === 'IA' ? <Brain className="h-5 w-5" /> : <Code2 className="h-5 w-5" />}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                        <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 ${project.status === 'terminé'
                                            ? 'bg-emerald-500/20 text-emerald-300'
                                            : project.status === 'en-cours'
                                                ? 'bg-blue-500/20 text-blue-300'
                                                : 'bg-slate-500/20 text-slate-300'
                                            }`}>
                                            {project.status}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-2">
                                    <h3 className="font-black text-xl mb-3 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-medium line-clamp-3 h-[4.5em]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 h-[4.5rem] content-start">
                                        {project.skills.slice(0, 3).map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 bg-white/5 text-xs rounded-md font-bold text-muted-foreground border border-white/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {project.skills.length > 3 && (
                                            <span className="px-2.5 py-1 bg-white/5 text-xs rounded-md font-bold text-muted-foreground border border-white/5">
                                                +{project.skills.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                                                {project.studentName.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold text-foreground">{project.studentName}</span>
                                                <span className="text-[10px] text-muted-foreground">{project.completedAt || 'En cours'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
