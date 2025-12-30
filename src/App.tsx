import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Courses } from '@/pages/Courses'
import { CourseDetail } from '@/pages/CourseDetail'
import { Projects } from '@/pages/Projects'
import { Mentorship } from '@/pages/Mentorship'
import { ProgramLanding } from '@/pages/ProgramLanding'
import { Dock } from '@/components/navigation/Dock'
import { SimpleTechBackground } from '@/components/ui/SimpleTechBackground'
import { AdaptiveThemeToggle } from '@/components/AdaptiveThemeToggle'

export default function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-foreground transition-colors duration-300">
      <SimpleTechBackground />
      <AdaptiveThemeToggle />
      <Dock />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<ProgramLanding />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentorship" element={<Mentorship />} />
        </Routes>
      </main>
    </div>
  )
}
