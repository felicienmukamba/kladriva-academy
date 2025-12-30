import { motion } from 'framer-motion'
import { MapPin, ChevronRight, Brain, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const learningPathData = [
    {
        category: 'Excellence en IA',
        icon: Brain,
        color: 'from-indigo-500 to-blue-600',
        description: 'Parcours spécialisé pour les futurs ingénieurs et chercheurs en IA.',
        milestones: [
            { title: 'Fondations Neurales', duration: '1 Mois', skills: ['Algèbre Linéaire', 'Python'] },
            { title: 'Maîtrise du Deep Learning', duration: '2 Mois', skills: ['PyTorch', 'CNNs', 'NLP'] },
            { title: 'Architectures Génératives', duration: '3 Mois', skills: ['LLMs', 'Diffusion', 'RAG'] },
        ]
    },
    {
        category: 'Architecture Logicielle',
        icon: Code2,
        color: 'from-purple-500 to-pink-600',
        description: 'Parcours spécialisé pour les architectes logiciel et leads cloud.',
        milestones: [
            { title: 'Full-Stack Avancé', duration: '1,5 Mois', skills: ['Go', 'TypeScript', 'Clean Code'] },
            { title: 'Design Système & Mesh', duration: '2 Mois', skills: ['Istio', 'Event-Driven', 'Kafka'] },
            { title: 'Cloud Enterprise', duration: '2,5 Mois', skills: ['AWS', 'Terraform', 'SRE'] },
        ]
    }
]

export function LearningPaths() {
    return (
        <section className="py-32 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex justify-center mb-4">
                        <div className="glass-card px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>Accélération Guidée</span>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        Feuilles de <span className="gradient-text">Route</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        Choisissez votre spécialisation et suivez notre feuille de route d'élite vers la maîtrise industrielle.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {learningPathData.map((path, idx) => (
                        <motion.div
                            key={path.category}
                            initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-1 pb-10 rounded-[3rem] border-white/5 relative overflow-hidden group"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${path.color} mb-12`} />

                            <div className="px-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-4 rounded-[1.5rem] bg-gradient-to-br ${path.color} text-white shadow-xl shadow-indigo-500/20`}>
                                        <path.icon className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black">{path.category}</h3>
                                        <p className="text-sm text-muted-foreground">{path.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {path.milestones.map((m, mIdx) => (
                                        <div key={m.title} className="glass p-6 rounded-2xl relative border-white/5 hover:glass-strong transition-all overflow-hidden group/milestone">
                                            <div className="flex items-center justify-between mb-3 relative z-10">
                                                <div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-60">Phase 0{mIdx + 1}</span>
                                                    <h4 className="font-bold text-lg">{m.title}</h4>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-bold opacity-40">{m.duration}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {m.skills.map(s => (
                                                    <span key={s} className="text-[10px] bg-white/5 px-2 py-1 rounded-md font-bold uppercase">{s}</span>
                                                ))}
                                            </div>

                                            {/* Progress line indicator */}
                                            {mIdx < path.milestones.length - 1 && (
                                                <div className="absolute left-[34px] bottom-[-24px] w-0.5 h-6 bg-primary opacity-20" />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <Link to="/courses" className="block w-full">
                                    <button className="w-full mt-10 py-5 rounded-2xl bg-white/5 hover:bg-white/10 text-sm font-bold flex items-center justify-center gap-2 transition-all">
                                        Démarrer le Parcours Spécialisé <ChevronRight className="h-4 w-4" />
                                    </button>
                                </Link>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
