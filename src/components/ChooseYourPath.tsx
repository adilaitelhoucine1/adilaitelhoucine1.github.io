import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Terminal } from 'lucide-react'

interface ChooseYourPathProps {
  onChoose: (isTechnical: boolean) => void
}

const ChooseYourPath = ({ onChoose }: ChooseYourPathProps) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const options = [
    {
      id: 'technical',
      title: '💻 Tech Mode',
      subtitle: 'I speak in code',
      description: 'VSCode-style portfolio for developers',
      icon: Terminal,
      color: 'from-green-500 to-emerald-600',
      keywords: ['React', 'Laravel', 'Spring Boot', 'APIs', 'Docker'],
      onClick: () => onChoose(true)
    },
    {
      id: 'business',
      title: '💼 Professional Mode',
      subtitle: 'Show me the results',
      description: 'Beautiful, recruiter-friendly portfolio',
      icon: TrendingUp,
      color: 'from-primary to-secondary',
      keywords: ['Projects', 'Experience', 'Skills', 'Contact'],
      onClick: () => onChoose(false)
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background-light to-gray-100 dark:from-background-dark dark:to-gray-900">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🤔
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Choose Your Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            How technical are you?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon
            const isHovered = hoveredOption === option.id

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredOption(option.id)}
                onHoverEnd={() => setHoveredOption(null)}
                onClick={option.onClick}
                className="relative cursor-pointer"
              >
                <div className="glass-card rounded-3xl p-8 h-full border-2 border-white/20 dark:border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <motion.div
                    animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${option.color} mb-6`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>

                  <h2 className="text-3xl font-bold mb-2">{option.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{option.subtitle}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{option.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {option.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium glass-card rounded-full bg-gradient-to-r from-primary/10 to-secondary/10"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    animate={isHovered ? { x: [0, 10, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex items-center space-x-2 text-primary font-semibold"
                  >
                    <span>Enter</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-600">
            💡 Psst... both lead to amazing experiences!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ChooseYourPath

