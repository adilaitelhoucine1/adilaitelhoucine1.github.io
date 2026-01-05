import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Server, Wrench, Sparkles } from 'lucide-react'

const SimpleTechStack = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Sparkles, gradient: 'from-purple-600 to-pink-600' },
    { id: 'frontend', name: 'Frontend', icon: Code2, gradient: 'from-blue-600 to-cyan-500' },
    { id: 'backend', name: 'Backend', icon: Server, gradient: 'from-green-600 to-emerald-500' },
    { id: 'tools', name: 'Tools & DevOps', icon: Wrench, gradient: 'from-orange-600 to-red-500' },
  ]

  const technologies = [
    { name: 'React', category: 'frontend', color: 'from-cyan-400 to-blue-500', level: 90, description: 'UI Library' },
    { name: 'TypeScript', category: 'frontend', color: 'from-blue-600 to-blue-700', level: 85, description: 'Type Safety' },
    { name: 'JavaScript', category: 'frontend', color: 'from-yellow-400 to-yellow-600', level: 95, description: 'Core Language' },
    { name: 'TailwindCSS', category: 'frontend', color: 'from-cyan-400 to-teal-500', level: 90, description: 'CSS Framework' },
    { name: 'HTML/CSS', category: 'frontend', color: 'from-orange-500 to-red-500', level: 95, description: 'Web Fundamentals' },
    { name: 'Laravel', category: 'backend', color: 'from-red-600 to-red-700', level: 90, description: 'PHP Framework' },
    { name: 'Spring Boot', category: 'backend', color: 'from-green-600 to-green-700', level: 85, description: 'Java Framework' },
    { name: 'PHP', category: 'backend', color: 'from-indigo-600 to-purple-600', level: 90, description: 'Server Language' },
    { name: 'Java', category: 'backend', color: 'from-orange-600 to-red-600', level: 85, description: 'OOP Language' },
    { name: 'MySQL', category: 'backend', color: 'from-blue-500 to-blue-700', level: 85, description: 'Database' },
    { name: 'Docker', category: 'tools', color: 'from-blue-400 to-blue-600', level: 80, description: 'Containerization' },
    { name: 'Git', category: 'tools', color: 'from-orange-500 to-red-600', level: 90, description: 'Version Control' },
    { name: 'Azure', category: 'tools', color: 'from-blue-500 to-cyan-500', level: 75, description: 'Cloud Platform' },
    { name: 'Firebase', category: 'tools', color: 'from-yellow-500 to-orange-600', level: 80, description: 'BaaS Platform' },
    { name: 'Linux', category: 'tools', color: 'from-gray-700 to-gray-900', level: 80, description: 'Operating System' },
    { name: 'Jira', category: 'tools', color: 'from-blue-600 to-indigo-600', level: 85, description: 'Project Management' },
  ]

  const filteredTechs = selectedCategory === 'all' ? technologies : technologies.filter(tech => tech.category === selectedCategory)

  return (
    <div id="tech-stack" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">{t('techStack.title')}</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">Cutting-edge technologies</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4">
        {categories.map((cat, index) => {
          const Icon = cat.icon
          const isActive = selectedCategory === cat.id
          
          return (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`relative px-4 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-sm md:text-lg transition-all duration-300 flex items-center space-x-2 md:space-x-3 overflow-hidden
                ${isActive ? `bg-gradient-to-r ${cat.gradient} text-white shadow-2xl` : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-xl border-2 border-gray-200 dark:border-gray-700'}`}
            >
              <Icon className="w-4 h-4 md:w-6 md:h-6 relative z-10" />
              <span className="relative z-10">{cat.name}</span>
            </motion.button>
          )
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto px-4">
        <AnimatePresence mode="popLayout">
          {filteredTechs.map((tech, index) => {
            const isHovered = hoveredTech === tech.name
            
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
                        {tech.name}
                      </h3>
                      <motion.div
                        animate={isHovered ? { rotate: 360 } : {}}
                        transition={{ duration: 0.6 }}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white text-sm md:text-base font-bold shadow-lg`}
                      >
                        {tech.level}
                      </motion.div>
                    </div>

                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3 md:mb-4 font-medium">
                      {tech.description}
                    </p>

                    <div className="relative">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span className="font-semibold">Proficiency</span>
                        <span className="font-bold">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 text-center px-4"
      >
        <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl md:rounded-2xl border-2 border-white/20 dark:border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {filteredTechs.length}
            </div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600" />
          <div className="block sm:hidden w-12 h-px bg-gray-300 dark:bg-gray-600" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {Math.round(filteredTechs.reduce((acc, tech) => acc + tech.level, 0) / filteredTechs.length)}%
            </div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
              Avg Proficiency
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SimpleTechStack

