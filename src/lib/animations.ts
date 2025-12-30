import type { Variants } from 'framer-motion'

// Floating animation for cards and UI elements
export const floatingVariant: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

// Glassmorphism fade-in
export const glassVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, backdropFilter: 'blur(0px)' },
    visible: {
        opacity: 1,
        scale: 1,
        backdropFilter: 'blur(12px)',
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}

// Warp speed zoom transition
export const warpSpeedVariant: Variants = {
    initial: { scale: 1, opacity: 1 },
    exit: {
        scale: 2,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: 'easeIn',
        },
    },
    enter: {
        scale: 0.8,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

// Stagger container for children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

// Stagger item
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}

// Hover lift effect
export const hoverLift: Variants = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -8,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
}

// Icon magnification (for dock)
export const iconMagnify: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.5,
        y: -10,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 17,
        },
    },
}

// Fade in up
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

// Scale in
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}
