import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:adilaitelhoucine@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: Mail, label: t('contact.info.email'), value: 'adilaitelhoucine@gmail.com', link: 'mailto:adilaitelhoucine@gmail.com' },
    { icon: Phone, label: t('contact.info.phone'), value: '+212 648467492', link: 'tel:+212648467492' },
    { icon: MapPin, label: t('contact.info.location'), value: 'Morocco', link: null }
  ]

  return (
    <div id="contact" className="section-container bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">{t('contact.title')}</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-gray-600 text-sm font-semibold ml-4">📧 contact.js</span>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="text-purple-600">const</span> <span className="text-blue-600">name</span> <span className="text-gray-800">=</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="text-purple-600">const</span> <span className="text-blue-600">email</span> <span className="text-gray-800">=</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <span className="text-purple-600">const</span> <span className="text-blue-600">message</span> <span className="text-gray-800">=</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t('contact.form.message')}
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>{t('contact.form.send')}</span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-primary group">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1 text-lg">{info.label}</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1 text-lg">{info.label}</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/adil-ait-el-houcine/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center space-x-2 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 group"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-gray-800 dark:text-gray-200">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/adilaitelhoucine1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex-1 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center space-x-2 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-900 group"
            >
              <Github className="w-6 h-6 text-gray-800 dark:text-white" />
              <span className="font-bold text-gray-800 dark:text-gray-200">GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

