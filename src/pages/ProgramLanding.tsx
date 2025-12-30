import { ProgramHero } from '@/components/program/ProgramHero'
import { ProgramDetails } from '@/components/program/ProgramDetails'
import { ProgramCurriculum } from '@/components/program/ProgramCurriculum'
import { Check } from 'lucide-react'

export function ProgramLanding() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <ProgramHero />

            {/* Details (Vision, Audience, Methodology) */}
            <ProgramDetails />

            {/* Curriculum */}
            <ProgramCurriculum />

            {/* Evaluation & Requirements */}
            <section className="py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Conditions & Prérequis</h3>
                            <ul className="space-y-4">
                                {[
                                    "Ordinateur basique (2-4 Go RAM suffisent)",
                                    "Connexion internet stable",
                                    "Navigateur moderne (Chrome, Edge)",
                                    "Compte GitHub et Google (Gratuit)",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-green-500" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Certification & Évaluation</h3>
                            <ul className="space-y-4">
                                {[
                                    "Exercices pratiques continus",
                                    "Mini-projets de fin de module",
                                    "Projet final (Capstone) complet",
                                    "Présentation orale du projet"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                <div className="container mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">
                        Rejoignez la <span className="gradient-text">Révolution</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Les places sont limitées. Commencez votre transformation aujourd'hui.
                    </p>
                    <button className="bg-foreground text-background px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-transform">
                        Candidater Maintenant
                    </button>
                </div>
            </section>

            <div className="h-32" />
        </div>
    )
}
