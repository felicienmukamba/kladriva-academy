import { motion } from 'framer-motion'
import { useTheme } from '@/providers/theme-provider'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Monitor } from 'lucide-react'

export function AdaptiveThemeToggle() {
    const { theme, setTheme } = useTheme()

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark')
        else if (theme === 'dark') setTheme('system')
        else setTheme('light')
    }

    const getIcon = () => {
        if (theme === 'light') return <Sun className="h-5 w-5" />
        if (theme === 'dark') return <Moon className="h-5 w-5" />
        return <Monitor className="h-5 w-5" />
    }

    const getLabel = () => {
        if (theme === 'light') return 'Clair'
        if (theme === 'dark') return 'Sombre'
        return 'Système'
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed top-6 right-6 z-50"
        >
            <Button
                variant="outline"
                size="sm"
                onClick={cycleTheme}
                className="glass-card hover:glass-strong transition-all duration-300 border-white/20 gap-2 pr-4"
            >
                <motion.div
                    key={theme}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {getIcon()}
                </motion.div>
                <span className="text-sm font-medium">{getLabel()}</span>
            </Button>
        </motion.div>
    )
}
