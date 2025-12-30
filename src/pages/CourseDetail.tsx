import { courses } from '@/data/courses'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import {
    ArrowLeft,
    Clock,
    BookOpen,
    Brain,
    CheckCircle2,
    Users,
    Award,
    Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useParams, Link } from 'react-router-dom' // Kept as they are used in the component

export function CourseDetail() {
    const { id } = useParams<{ id: string }>()
    const course = courses.find((c) => c.id === Number(id))

    if (!course) {
        return (
            <div className="min-h-screen pt-40 px-6 text-center">
                <h1 className="text-4xl font-black mb-4">Formation non trouvée</h1>
                <Link to="/courses">
                    <Button variant="link">Retour au catalogue</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-32 pb-40 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Back Button */}
                <Link to="/courses" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
                    <div className="p-2 rounded-xl glass group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <ArrowLeft className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">Retour au catalogue</span>
                </Link>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 space-y-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="space-y-8"
                        >
                            <div className="flex flex-wrap items-center gap-4">
                                <Badge className="bg-primary/20 text-primary border-primary/30 py-1.5 px-4 rounded-full text-xs font-black uppercase tracking-widest">
                                    {course.category}
                                </Badge>
                                <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                    <div className={`h-2 w-2 rounded-full ${course.level === 'Avancé' ? 'bg-purple-500' : course.level === 'Intermédiaire' ? 'bg-blue-500' : 'bg-green-500'}`} />
                                    {course.level}
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black leading-tight">
                                {course.title.split('&').map((part, i, arr) => (
                                    <span key={part}>
                                        {part}
                                        {i < arr.length - 1 && <span className="gradient-text"> & </span>}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                                {course.longDescription}
                            </p>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { icon: Clock, label: 'Durée', value: course.duration },
                                    { icon: BookOpen, label: 'Contenu', value: '12 Modules' },
                                    { icon: Zap, label: 'Intensité', value: 'Élevée' },
                                    { icon: Award, label: 'Certification', value: 'Incluse' },
                                ].map((stat) => (
                                    <div key={stat.label} className="glass-card p-6 rounded-3xl border-white/5 space-y-2">
                                        <stat.icon className="h-5 w-5 text-primary opacity-60" />
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</div>
                                            <div className="text-lg font-bold">{stat.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Syllabus Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-white/10" />
                                <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                                    <BookOpen className="h-7 w-7 text-primary" />
                                    Programme d'Études
                                </h2>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="space-y-6">
                                {course.syllabus.map((module, idx) => (
                                    <motion.div
                                        key={module.title}
                                        whileHover={{ x: 10 }}
                                        className="glass-card p-8 rounded-[2rem] border-white/5 flex gap-8 items-start group hover:border-primary/20 transition-all duration-300"
                                    >
                                        <div className="h-14 w-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-2xl font-black group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed font-medium">{module.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="space-y-8">
                        {/* Enrollment Card */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="glass-card p-10 rounded-[3rem] border-primary/20 bg-gradient-to-br from-primary/10 to-purple-500/10 sticky top-32"
                        >
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <div className="text-primary font-black uppercase tracking-[0.2em] text-xs">Accès Illimité</div>
                                    <h3 className="text-3xl font-black">Prenez de l'avance</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        <span className="text-sm font-bold opacity-80">Projets industriels réels</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        <span className="text-sm font-bold opacity-80">Mentor d'élite dédié</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        <span className="text-sm font-bold opacity-80">Accès vitalice à vie</span>
                                    </div>
                                </div>

                                <Button className="w-full text-lg font-black h-16 rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
                                    S'inscrire Maintenant
                                </Button>

                                <p className="text-[10px] text-center uppercase tracking-widest opacity-40 font-bold">
                                    Garantie d'excellence académique
                                </p>
                            </div>

                            {/* Mentor Info in Sidebar */}
                            <div className="mt-12 pt-12 border-t border-white/10 space-y-6">
                                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-50">
                                    <Users className="h-4 w-4" /> Instructeur
                                </h4>
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xl shadow-lg">
                                        {course.mentor.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{course.mentor.name}</div>
                                        <div className="text-xs text-muted-foreground font-medium">{course.mentor.role}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Prerequisites */}
                            <div className="mt-12 space-y-4">
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-50 flex items-center gap-2">
                                    <Brain className="h-4 w-4" /> Prérequis
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {course.prerequisites.map(p => (
                                        <span key={p} className="text-[10px] font-bold bg-white/5 py-1.5 px-3 rounded-lg border border-white/10">
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
