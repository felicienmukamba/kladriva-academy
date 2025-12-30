import { motion } from 'framer-motion'
import type { Course } from '@/data/courses'
import { CourseCardFloating } from './CourseCardFloating'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface CourseGridProps {
    courses: Course[]
}

export function CourseGrid({ courses }: CourseGridProps) {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {courses.map((course, index) => (
                <motion.div key={course.id} variants={staggerItem}>
                    <CourseCardFloating course={course} delay={index * 0.1} />
                </motion.div>
            ))}
        </motion.div>
    )
}
