import { HeroSectionWith3DCanvas } from '@/components/sections/HeroSectionWith3DCanvas'
import { CourseGrid } from '@/components/courses/CourseGrid'
import { courses } from '@/data/courses'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { Brain, Code2, Sparkles } from 'lucide-react'
import { LearningPaths } from '@/components/sections/LearningPaths'
import { Link } from 'react-router-dom'

export function Home() {
    const aiCourses = courses.filter(c => c.category === 'IA')
    const seCourses = courses.filter(c => c.category === 'Génie Logiciel')

    return (
        <div className="min-h-screen">
            <HeroSectionWith3DCanvas />

            {/* AI Specialization Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
                    >
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <Brain className="h-5 w-5" />
                                <span>Spécialisation I</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-4">
                                Intelligence <span className="gradient-text">Artificielle</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Des grands modèles de langage à la vision par ordinateur.
                                Maîtrisez les outils qui redéfinissent le paysage technologique.
                            </p>
                        </div>
                        <div className="pb-2">
                            <div className="glass-card px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-yellow-500" />
                                Parcours IA en vedette
                            </div>
                        </div>
                    </motion.div>

                    <CourseGrid courses={aiCourses} />
                </div>
            </section>

            {/* Software Engineering Section */}
            <section className="py-32 px-6 bg-slate-900/5 dark:bg-white/5 border-y border-border/50">
                <div className="container mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
                    >
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 text-purple-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <Code2 className="h-5 w-5" />
                                <span>Spécialisation II</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900 dark:text-white">
                                Génie <span className="text-purple-500">Logiciel</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Architecturer le cœur des logiciels modernes. Construisez des écosystèmes
                                résilients, évolutifs et cloud-native avec précision.
                            </p>
                        </div>
                    </motion.div>

                    <CourseGrid courses={seCourses} />
                </div>
            </section>

            {/* Learning Paths Roadmap */}
            <LearningPaths />

            {/* CTA Section */}
            <section className="py-40 px-6 text-center">
                <div className="container mx-auto">
                    <div className="glass-card p-16 rounded-[3rem] max-w-5xl mx-auto relative overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-white/20">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-8">
                                Prêt à <span className="gradient-text">Innover ?</span>
                            </h2>
                            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium">
                                Rejoignez l'élite des architectes logiciel et IA.
                                Votre voyage vers l'excellence commence maintenant.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link to="/courses">
                                    <button className="bg-primary text-primary-foreground px-12 py-5 rounded-full font-black text-lg shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                                        Postuler Maintenant
                                    </button>
                                </Link>
                                <Link to="/mentorship">
                                    <button className="glass-strong text-foreground px-12 py-5 rounded-full font-black text-lg border-white/20 hover:bg-white/20 transition-all">
                                        Contacter un Conseiller
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Spacer for Dock */}
            <div className="h-32" />
        </div>
    )
}
