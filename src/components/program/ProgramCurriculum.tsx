import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Code, Brain, Rocket, Box, Database, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

type Module = {
    id: number
    title: string
    icon: any
    topics: string[]
}

const juniorModules: Module[] = [
    {
        id: 1,
        title: "Introduction à l'IA Générative",
        icon: Brain,
        topics: ["Comprendre les LLMs & IA Génératives", "Prompt Engineering de base", "Outils d'assistance au code (Copilot, Cursor)", "Démos sur Replit & Colab"]
    },
    {
        id: 2,
        title: "Bonnes Pratiques Dev & Git",
        icon: Code,
        topics: ["Git & GitHub fondamentaux", "Clean Code principles", "Tests unitaires simples", "Collaboration & Revue de code"]
    },
    {
        id: 3,
        title: "Idéation & Mindset Entrepreneur",
        icon: rocketIcon,
        topics: ["Lean Canvas simplifié", "Identifier des problèmes locaux", "Mindset 'Side Project'", "Prototypage rapide"]
    },
    {
        id: 4,
        title: "Professionalisation & Portfolio",
        icon: Terminal,
        topics: ["Roadmap de carrière", "Création Portfolio GitHub", "CV Technique", "Présence en ligne (LinkedIn)"]
    },
    {
        id: 5,
        title: "Mini-Projet : App IA",
        icon: Box,
        topics: ["Création d'une To-Do list ou Chatbot", "Génération de code assistée par IA", "Déploiement sur Netlify/HuggingFace"]
    }
]

const advancedModules: Module[] = [
    {
        id: 1,
        title: "IA Avancée & Fine-Tuning",
        icon: Brain,
        topics: ["Prompt Engineering Avancé", "Fine-tuning (LoRA) sur Colab", "Intégration API IA (OpenAI, Anthropic)", "Intro au Machine Learning avec Python"]
    },
    {
        id: 2,
        title: "Cloud, DevOps & Infra",
        icon: CloudIcon,
        topics: ["AWS/Azure Free Tier", "Docker & Containerisation", "CI/CD avec GitHub Actions", "Microservices basiques"]
    },
    {
        id: 3,
        title: "Entrepreneuriat Tech",
        icon: rocketIcon,
        topics: ["Méthode Lean Startup", "Construction MVP", "Pitch Deck Professionnel", "Stratégies de financement"]
    },
    {
        id: 4,
        title: "Carrière Avancée",
        icon: UsersIcon,
        topics: ["Simulation d'entretiens techniques", "System Design basique", "Veille technologique efficace", "Mentoring"]
    },
    {
        id: 5,
        title: "Capstone Project",
        icon: StarIcon,
        topics: ["Conception solution complète Cloud/IA", "Développement MVP from scratch", "Présentation finale et Démos"]
    }
]

// Icons Wrappers
function rocketIcon(props: any) { return <Rocket {...props} /> }
function CloudIcon(props: any) { return <Database {...props} /> } // Reuse Database for cloud generic
function UsersIcon(props: any) { return <Terminal {...props} /> } // Reuse Terminal for career
function StarIcon(props: any) { return <Box {...props} /> } // Reuse Box for Project

export function ProgramCurriculum() {
    const [activeTab, setActiveTab] = useState<'junior' | 'advanced'>('junior')
    const [openModule, setOpenModule] = useState<number | null>(1)

    const modules = activeTab === 'junior' ? juniorModules : advancedModules

    return (
        <section id="programme" className="py-24 px-6 bg-slate-900/5 dark:bg-white/5 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Le Programme Détaillé</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Une structure progressive pour vous emmener de la découverte à la maîtrise.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="glass p-1 rounded-2xl flex gap-2">
                        <button
                            onClick={() => setActiveTab('junior')}
                            className={cn(
                                "px-8 py-3 rounded-xl font-bold transition-all",
                                activeTab === 'junior' ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25" : "hover:bg-white/5"
                            )}
                        >
                            Parcours Juniors
                        </button>
                        <button
                            onClick={() => setActiveTab('advanced')}
                            className={cn(
                                "px-8 py-3 rounded-xl font-bold transition-all",
                                activeTab === 'advanced' ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25" : "hover:bg-white/5"
                            )}
                        >
                            Parcours Avancés
                        </button>
                    </div>
                </div>

                {/* Modules List */}
                <div className="space-y-4">
                    {modules.map((module) => (
                        <div key={module.id} className="glass-card overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold",
                                        activeTab === 'junior' ? "bg-cyan-500" : "bg-purple-500"
                                    )}>
                                        <module.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest opacity-60 font-bold mb-1">Module {module.id}</div>
                                        <h3 className="text-xl font-bold">{module.title}</h3>
                                    </div>
                                </div>
                                <ChevronDown className={cn(
                                    "w-6 h-6 transition-transform duration-300",
                                    openModule === module.id ? "rotate-180" : ""
                                )} />
                            </button>

                            <AnimatePresence>
                                {openModule === module.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 border-t border-white/5">
                                            <ul className="grid sm:grid-cols-2 gap-3 pt-4">
                                                {module.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group">
                                                        <span className={cn(
                                                            "w-1.5 h-1.5 rounded-full mt-2 group-hover:scale-150 transition-transform",
                                                            activeTab === 'junior' ? "bg-cyan-500" : "bg-purple-500"
                                                        )} />
                                                        {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
