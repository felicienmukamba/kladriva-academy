import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Courses } from '@/pages/Courses'
import { CourseDetail } from '@/pages/CourseDetail'
import { Projects } from '@/pages/Projects'
import { Mentorship } from '@/pages/Mentorship'
import { Profile } from '@/pages/Profile'
import { Dock } from '@/components/navigation/Dock'
import { StarfieldBackground } from '@/components/3d/StarfieldBackground'
import { AdaptiveThemeToggle } from '@/components/AdaptiveThemeToggle'

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <StarfieldBackground />
      <AdaptiveThemeToggle />
      <Dock />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}
