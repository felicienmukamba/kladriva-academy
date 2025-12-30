import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CheckCircle2, Target, Users, Layout, Zap } from 'lucide-react'

export function ProgramDetails() {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">

                {/* Context & Vision */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                            <Target className="h-4 w-4" />
                            <span>Vision du Programme</span>
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-6">
                            Une formation pour les <span className="gradient-text">Bâtisseurs de demain</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Ce programme intensif vise à combler le fossé entre la théorie académique et les exigences de l'industrie tech moderne.
                            Il est conçu pour être accessible à tous, quel que soit l'équipement, grâce à une approche 100% Cloud.
                        </motion.p>
                        <motion.ul variants={staggerContainer} className="space-y-4">
                            {[
                                "100% à distance avec sessions live et enregistrements",
                                "Outils gratuits et Open Source uniquement",
                                "Approche Cloud-first : Aucune machine puissante requise",
                                "Projets concrets pour votre portfolio GitHub"
                            ].map((item, idx) => (
                                <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-3xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold mb-6">Objectifs Clés</h3>
                        <div className="grid gap-4">
                            {[
                                { title: "Maîtrise Technique", desc: "Dev solide en Python/JS, IA générative, et architectures Cloud." },
                                { title: "Esprit Entrepreneurial", desc: "De l'idée au MVP : créez des solutions qui résolvent des vrais problèmes." },
                                { title: "Carrière & Visibilité", desc: "Construisez un portfolio, un CV pro et préparez vos entretiens." }
                            ].map((obj, i) => (
                                <div key={i} className="p-4 rounded-xl bg-background/50 border border-border/50">
                                    <h4 className="font-bold text-lg mb-1">{obj.title}</h4>
                                    <p className="text-sm text-muted-foreground">{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Public Cible */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Pour qui est ce programme ?</h2>
                        <p className="text-muted-foreground text-lg">Deux parcours adaptés à votre niveau d'expérience</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-3xl border-t-4 border-t-cyan-500 hover:shadow-2xl transition-all"
                        >
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500 mb-6">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-black mb-2">Parcours Juniors</h3>
                            <p className="text-sm font-bold text-cyan-500 mb-6 uppercase tracking-wider">Niveaux 1 à 3</p>
                            <p className="text-muted-foreground mb-6">
                                Pour les débutants ambitieux souhaitant acquérir les bases solides du développement moderne et
                                une première introduction à l'IA.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> Bases de la programmation</li>
                                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> Introduction IA Générative</li>
                                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> Premier projet web déployé</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-3xl border-t-4 border-t-purple-500 hover:shadow-2xl transition-all"
                        >
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-black mb-2">Parcours Avancés</h3>
                            <p className="text-sm font-bold text-purple-500 mb-6 uppercase tracking-wider">Niveaux 4 à 5</p>
                            <p className="text-muted-foreground mb-6">
                                Pour les développeurs ayant déjà des bases solides, souhaitant se professionnaliser
                                dans le Cloud, le DevOps et l'IA avancée.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-purple-500" /> architecture Microservices</li>
                                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-purple-500" /> Fine-tuning de modèles IA</li>
                                <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-purple-500" /> CI/CD & DevOps</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Methodology & Stack */}
                <div className="glass-strong rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]" />

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="flex-1">
                                <h3 className="text-3xl font-black mb-6">La Stack Technique <span className="text-primary">Cloud-First</span></h3>
                                <p className="text-muted-foreground mb-8">
                                    Nous avons sélectionné les meilleurs outils du marché qui proposent une offre gratuite généreuse.
                                    Vous apprendrez à utiliser les outils des professionnels.
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {['GitHub', 'Replit', 'Google Colab', 'HuggingFace', 'Netlify', 'Docker'].map((tool) => (
                                        <div key={tool} className="bg-background/40 backdrop-blur-sm border border-white/10 p-3 rounded-lg text-center font-semibold text-sm">
                                            {tool}
                                        </div>
                                    ))}
                                    <div className="col-span-2 sm:col-span-3 text-center text-xs text-muted-foreground mt-2 italic">
                                        + Notion, Miro, Railway, et plus...
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 border-l border-white/10 pl-0 md:pl-12 pt-8 md:pt-0">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Layout className="h-6 w-6 text-primary" />
                                    Méthodologie Active
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 text-primary bg-primary/10 rounded-full flex items-center justify-center font-bold">1</div>
                                        <div>
                                            <h4 className="font-bold">Sessions Live & Replay</h4>
                                            <p className="text-sm text-muted-foreground">Interagissez en direct ou apprenez à votre rythme.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 text-primary bg-primary/10 rounded-full flex items-center justify-center font-bold">2</div>
                                        <div>
                                            <h4 className="font-bold">Projets Guidés</h4>
                                            <p className="text-sm text-muted-foreground">On ne regarde pas le code, on l'écrit. Chaque module a son projet.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 text-primary bg-primary/10 rounded-full flex items-center justify-center font-bold">3</div>
                                        <div>
                                            <h4 className="font-bold">Projet Capstone</h4>
                                            <p className="text-sm text-muted-foreground">Un projet final complet pour valider toutes vos compétences.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
