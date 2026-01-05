import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: { en: string; fr: string; ar: string }
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
}

const Projects = () => {
  const { t, i18n } = useTranslation()

  const projects: Project[] = [
    {
      title: 'MarocAdsZone',
      description: {
        en: 'Full Stack classified ads platform built with React.js and Laravel 10. Includes Firebase Storage for secure image management.',
        fr: 'Plateforme Full Stack de petites annonces avec React.js et Laravel 10. Intègre Firebase Storage pour la gestion sécurisée des images.',
        ar: 'منصة إعلانات مبوبة Full Stack مبنية بتقنية React.js و Laravel 10. تتضمن Firebase Storage لإدارة الصور الآمنة.'
      },
      technologies: ['React.js', 'Laravel 10', 'MySQL', 'Firebase Storage', 'REST API'],
      image: '🛒',
      demoUrl: 'https://marocadszone.com/'
    },
    {
      title: 'Tricol-App',
      description: {
        en: 'Spring Boot REST API for digitizing professional clothing supply chain. Includes AI suggestions and advanced category management.',
        fr: 'API REST Spring Boot pour la digitalisation de la chaîne d\'approvisionnement en vêtements professionnels. Intègre des suggestions IA.',
        ar: 'واجهة برمجية REST بتقنية Spring Boot لرقمنة سلسلة توريد الملابس المهنية. يتضمن اقتراحات ذكاء اصطناعي.'
      },
      technologies: ['Spring Boot', 'Spring Data JPA', 'MapStruct', 'Liquibase', 'Swagger/OpenAPI'],
      image: '🏢',
      githubUrl: 'https://github.com/adilaitelhoucine1/tricol-app'
    },
    {
      title: 'MedCore',
      description: {
        en: 'Monolithic Java Web application (JAKARTA EE) for GP/Specialist coordination with Stream API for consultation management.',
        fr: 'Application Web Java monolithique (JAKARTA EE) pour la coordination MG/Spécialiste avec Stream API pour la gestion des consultations.',
        ar: 'تطبيق ويب جافا متكامل (JAKARTA EE) لتنسيق الطبيب العام/الأخصائي مع Stream API لإدارة الاستشارات.'
      },
      technologies: ['Jakarta EE', 'Hibernate', 'JPA', 'Stream API', 'Jira'],
      image: '🏥',
      githubUrl: 'https://github.com/adilaitelhoucine1/MedCore'
    },
    {
      title: 'Intranet CME',
      description: {
        en: 'Full digitalization platform for Evaluation Matrix Cards (CME) at Youcode Morocco using Laravel and React.',
        fr: 'Plateforme de digitalisation complète des Cartes de la Matrice d\'Évaluation (CME) chez Youcode Maroc avec Laravel et React.',
        ar: 'منصة رقمنة كاملة لبطاقات مصفوفة التقييم (CME) في Youcode المغرب باستخدام Laravel و React.'
      },
      technologies: ['Laravel', 'MySQL', 'TailwindCSS', 'Azure', 'Docker'],
      image: '📊'
    }
  ]

  const getDescription = (description: Project['description']) => {
    return description[i18n.language as keyof typeof description] || description.en
  }

  return (
    <div id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">{t('projects.title')}</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="group relative glass-card rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-8xl">
              <motion.div animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                {project.image}
              </motion.div>
            </div>

            <div className="relative p-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {getDescription(project.description)}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium glass-card rounded-full bg-gradient-to-r from-primary/10 to-secondary/10">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 text-xs font-medium glass-card rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('projects.viewDemo')}</span>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 btn-outline flex items-center justify-center space-x-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('projects.viewCode')}</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-16 px-4"
      >
        <motion.a
          href="https://github.com/adilaitelhoucine1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -5 }}
          className="inline-flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl shadow-2xl"
        >
          <span>{t('projects.viewMore')}</span>
          <Github className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Projects

