import { CourseGrid } from '@/components/courses/CourseGrid'
import { courses } from '@/data/courses'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { Search, Brain, Code2, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function Courses() {
    const [filter, setFilter] = useState<'TOUT' | 'IA' | 'GL'>('TOUT')

    const filteredCourses = courses.filter(c => {
        if (filter === 'TOUT') return true
        if (filter === 'IA') return c.category === 'IA'
        if (filter === 'GL') return c.category === 'Génie Logiciel'
        return true
    })

    return (
        <div className="min-h-screen pt-32 pb-40 px-6">
            <div className="container mx-auto">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        Curriculum <span className="gradient-text">Technique</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Découvrez nos programmes de formation de classe mondiale en IA et Génie Logiciel.
                        Axés sur l'industrie et les projets.
                    </p>

                    {/* Filters & Search */}
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 mb-12">
                        <div className="relative flex-1 group w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Rechercher des technologies, patterns ou modèles..."
                                className="pl-12 glass-card border-white/10 h-14 text-lg font-medium focus:ring-primary/50"
                            />
                        </div>

                        <div className="flex items-center glass-card p-1 rounded-2xl w-full md:w-auto">
                            {[
                                { label: 'Tout', value: 'TOUT', icon: Filter },
                                { label: 'IA', value: 'IA', icon: Brain },
                                { label: 'GL', value: 'GL', icon: Code2 },
                            ].map((item) => (
                                <button
                                    key={item.value}
                                    onClick={() => setFilter(item.value as any)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${filter === item.value
                                            ? 'bg-primary text-primary-foreground shadow-lg'
                                            : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <CourseGrid courses={filteredCourses} />
            </div>
        </div>
    )
}
