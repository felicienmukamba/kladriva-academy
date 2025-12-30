import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Trophy, Target, Zap, Award, TrendingUp, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Profile() {
    return (
        <div className="min-h-screen pt-32 pb-40 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <Avatar className="h-28 w-28 mx-auto mb-6 ring-4 ring-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-4xl font-bold">
                            JD
                        </AvatarFallback>
                    </Avatar>
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">John Doe</h1>
                    <p className="text-lg text-muted-foreground mb-4">Étudiant en Génie Logiciel</p>
                    <div className="flex items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Membre depuis Déc 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-green-500 font-medium">En progression</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {[
                        { icon: Trophy, label: 'Formations Terminées', value: '3', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
                        { icon: Target, label: 'En Cours', value: '2', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
                        { icon: Zap, label: 'Compétences Maîtrisées', value: '12', color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
                        { icon: Award, label: 'Certificats', value: '3', color: 'text-green-500', bgColor: 'bg-green-500/10' },
                    ].map((stat) => (
                        <motion.div key={stat.label} variants={staggerItem}>
                            <Card className="glass-card p-6 text-center hover:glass-strong transition-all duration-300">
                                <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                </div>
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Learning Progress */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="glass-card p-8 rounded-3xl"
                    >
                        <h2 className="text-2xl font-bold mb-6">Parcours d'Apprentissage</h2>
                        <div className="space-y-6">
                            {[
                                { course: 'Génie Logiciel Full-Stack', progress: 65, color: 'bg-indigo-500' },
                                { course: 'Génie de l\'IA Générative', progress: 30, color: 'bg-purple-500' },
                                { course: 'Architecture Logicielle Moderne', progress: 45, color: 'bg-pink-500' },
                            ].map((item) => (
                                <div key={item.course}>
                                    <div className="flex justify-between mb-3">
                                        <span className="font-medium text-sm md:text-base">{item.course}</span>
                                        <span className="text-sm font-semibold text-primary">{item.progress}%</span>
                                    </div>
                                    <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className={`absolute inset-y-0 left-0 ${item.color} rounded-full transition-all duration-500`}
                                            style={{ width: `${item.progress}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button className="w-full mt-8" size="lg">
                            Continuer l'Apprentissage
                        </Button>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="glass-card p-8 rounded-3xl"
                    >
                        <h2 className="text-2xl font-bold mb-6">Succès Récents</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Premier Projet',
                                    desc: 'Projet initial terminé avec succès',
                                    icon: '🎯',
                                    date: '15 Déc, 2024'
                                },
                                {
                                    title: 'Apprenant Rapide',
                                    desc: 'A terminé un cours en un temps record',
                                    icon: '⚡',
                                    date: '10 Déc, 2024'
                                },
                                {
                                    title: 'Esprit d\'Équipe',
                                    desc: 'A collaboré sur 5 projets',
                                    icon: '🤝',
                                    date: '05 Déc, 2024'
                                },
                            ].map((achievement) => (
                                <Card key={achievement.title} className="glass p-5 hover:glass-strong transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl">{achievement.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="font-bold mb-1">{achievement.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-2">{achievement.desc}</p>
                                            <p className="text-xs text-muted-foreground">{achievement.date}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
