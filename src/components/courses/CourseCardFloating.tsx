import { motion } from 'framer-motion'
import type { Course } from '@/data/courses'
import { Badge } from '@/components/ui/badge'
import { hoverLift } from '@/lib/animations'
import { Clock, BookOpen, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CourseCardFloatingProps {
    course: Course
    delay?: number
}

export function CourseCardFloating({ course, delay = 0 }: CourseCardFloatingProps) {
    return (
        <motion.div
            variants={hoverLift}
            initial="rest"
            whileHover="hover"
            className="h-full"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="glass-card group h-full flex flex-col overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl">
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden">
                    {/* Animated Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-700" />

                    {/* Abstract Pattern / Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-[120px] font-black text-white/5 select-none transition-all duration-500 group-hover:text-primary/10 group-hover:scale-125">
                            {course.title.charAt(0)}
                        </div>
                        {course.category === 'IA' ? (
                            <Sparkles className="absolute h-12 w-12 text-indigo-400/20 blur-sm group-hover:blur-none transition-all duration-500" />
                        ) : (
                            <div className="absolute h-12 w-12 rounded-full border-2 border-purple-400/20 blur-sm group-hover:blur-none transition-all duration-500" />
                        )}
                    </div>

                    {/* Badges Overlay */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                        <div className="glass-strong px-3 py-1 rounded-full border-white/10 flex items-center gap-2">
                            <div className={`h-1.5 w-1.5 rounded-full ${course.category === 'IA' ? 'bg-indigo-400' : 'bg-purple-400'}`} />
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{course.category}</span>
                        </div>

                        <Badge
                            variant="secondary"
                            className={`${course.level === 'Débutant' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                course.level === 'Intermédiaire' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                    'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                } backdrop-blur-md font-bold text-[10px] uppercase tracking-tighter`}
                        >
                            {course.level}
                        </Badge>
                    </div>

                    {/* Progress Bar (Subtle bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${course.progress}%` }}
                            className="h-full bg-gradient-to-r from-primary to-purple-500"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-black leading-tight group-hover:text-primary transition-colors duration-300">
                            {course.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80 line-clamp-2">
                            {course.description}
                        </p>

                        {/* Skills Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {course.skills.slice(0, 3).map((skill) => (
                                <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-xl text-[10px] font-bold uppercase tracking-wide text-primary/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Footer Stats & Button */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4 opacity-40" />
                                <span className="text-xs font-bold uppercase tracking-tighter">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <BookOpen className="h-4 w-4 opacity-40" />
                                <span className="text-xs font-bold uppercase tracking-tighter">12 Modules</span>
                            </div>
                        </div>

                        <Link to={`/courses/${course.id}`}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-primary text-primary-foreground rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all group/btn"
                            >
                                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
