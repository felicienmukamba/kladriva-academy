import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Video, Clock, Star } from 'lucide-react'
import { fr } from 'date-fns/locale'

const mentors = [
  { id: 1, name: 'Sarah Chen', role: 'Experte Full-Stack', available: true, rating: 4.9, sessions: 127 },
  { id: 2, name: 'Marcus Johnson', role: 'Spécialiste Graphismes 3D', available: true, rating: 4.8, sessions: 89 },
  { id: 3, name: 'Elena Rodriguez', role: 'Designer UI/UX', available: false, rating: 5.0, sessions: 156 },
  { id: 4, name: 'David Kim', role: 'Lead Data Science', available: true, rating: 4.7, sessions: 94 },
]

export function Mentorship() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen pt-32 pb-40 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Portail de <span className="gradient-text dark:gradient-text">Mentorat</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connectez-vous avec des experts de l'industrie et accélérez votre apprentissage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="glass-card p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-6">Planifier une session</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={fr}
              className="rounded-xl border-0"
            />
            
            {/* Time slots */}
            <div className="mt-8 space-y-3">
              <h3 className="font-semibold mb-4 text-lg">Créneaux Disponibles</h3>
              {['09:00', '11:00', '14:00', '16:00'].map((time) => (
                <Button
                  key={time}
                  variant="outline"
                  className="w-full justify-start glass hover:glass-strong transition-all h-12"
                >
                  <Clock className="h-4 w-4 mr-3 text-primary" />
                  <span className="font-medium">{time}</span>
                  <span className="ml-auto text-xs text-muted-foreground">60 min</span>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Mentors */}
          <div className="space-y-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-6">Mentors Experts</h2>
              <div className="space-y-4">
                {mentors.map((mentor) => (
                  <Card key={mentor.id} className="glass-card p-6 hover:glass-strong transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-14 w-14 ring-2 ring-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-lg font-bold">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-lg">{mentor.name}</h3>
                            <p className="text-sm text-muted-foreground">{mentor.role}</p>
                          </div>
                          <Button size="sm" disabled={!mentor.available} className="shrink-0">
                            <Video className="h-4 w-4 mr-2" />
                            Réserver
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="text-sm font-medium">{mentor.rating}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {mentor.sessions} sessions
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                mentor.available ? 'bg-green-500' : 'bg-gray-500'
                              }`}
                            />
                            <span className="text-xs">
                              {mentor.available ? 'Disponible' : 'Occupé'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Sessions */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Prochaines Sessions</h2>
              <Card className="glass-card p-8">
                <div className="text-center text-muted-foreground py-4">
                  <Video className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="font-medium">Aucune session prévue</p>
                  <p className="text-sm mt-1">Réservez un mentor ci-dessus pour commencer.</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
