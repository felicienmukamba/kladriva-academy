import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { ArrowRight, Terminal, Cloud, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProgramHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[100px] animate-float-slow" />
                <div className="absolute bottom-[20%] left-[10%] w-[25rem] h-[25rem] bg-purple-500/20 rounded-full blur-[100px] animate-float-delayed" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-indigo-500/30">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                        <span className="text-sm font-medium text-indigo-300">Format 100% à distance</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
                    >
                        Développement Logiciel, <br />
                        <span className="gradient-text">IA & Cloud</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
                    >
                        Maîtrisez l'intelligence artificielle, le cloud computing et le développement moderne.
                        Un programme conçu pour l'innovation et l'entrepreneuriat.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#programme" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                Découvrir le Programme
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </a>
                        <Link to="/mentorship" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto glass text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                Parler à un conseiller
                            </button>
                        </Link>
                    </motion.div>

                    {/* Stats / Highlights */}
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
                    >
                        {[
                            { icon: Terminal, label: "Développement", val: "Fullstack Modern" },
                            { icon: Brain, label: "Intelligence Artificielle", val: "GenAI & ML" },
                            { icon: Cloud, label: "Infrastructure", val: "Cloud & DevOps" },
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card p-6 flex items-center gap-4 text-left">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                                    <div className="font-bold text-lg">{item.val}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
