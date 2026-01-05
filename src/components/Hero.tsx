import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="section-container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-3 md:mb-4"
          >
            {t('hero.greeting')} 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
          >
            <span className="gradient-text">{t('hero.name')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <div className="inline-flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 glass-card rounded-full backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="relative">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full"></div>
              </div>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-10 text-sm md:text-base px-4"
          >
            <div className="flex items-center space-x-2 justify-center">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="text-secondary font-semibold">{t('hero.status')}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-10 px-4"
          >
            <a href="#projects" className="btn-primary text-base md:text-lg w-full sm:w-auto flex items-center justify-center">
              <span>{t('hero.cta.primary')}</span>
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </a>
            <a href="/CV-Adil Ait Elhoucine.pdf" download className="btn-outline text-base md:text-lg w-full sm:w-auto flex items-center justify-center">
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span>{t('hero.cta.secondary')}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-4 md:space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/adilaitelhoucine1' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/adil-ait-el-houcine/' },
              { icon: Mail, href: 'mailto:adilaitelhoucine@gmail.com' }
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 md:p-4 glass-card rounded-xl md:rounded-2xl group overflow-hidden"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

