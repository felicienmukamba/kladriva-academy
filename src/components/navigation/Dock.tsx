import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { iconMagnify } from '@/lib/animations'
import { Home, BookOpen, Layout, Users, Rocket } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const navItems = [
    { icon: Home, label: 'Accueil', path: '/' },
    { icon: Rocket, label: 'Programme', path: '/program' },
    { icon: BookOpen, label: 'Formations', path: '/courses' },
    { icon: Layout, label: 'Projets', path: '/projects' },
    { icon: Users, label: 'Mentorat', path: '/mentorship' },
]

export function Dock() {
    return (
        <TooltipProvider>
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 glass rounded-2xl flex items-center gap-2 shadow-2xl border border-white/10"
            >
                {navItems.map((item) => (
                    <Tooltip key={item.path}>
                        <TooltipTrigger asChild>
                            <NavLink to={item.path}>
                                {({ isActive }) => (
                                    <motion.div
                                        variants={iconMagnify}
                                        initial="rest"
                                        whileHover="hover"
                                        className={`p-3 rounded-xl transition-colors ${isActive
                                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                                            : 'text-muted-foreground hover:bg-white/10 hover:text-foreground'
                                            }`}
                                    >
                                        <item.icon className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </NavLink>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="glass border-white/10 text-xs font-bold uppercase tracking-widest">
                            {item.label}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </motion.nav>
        </TooltipProvider>
    )
}
