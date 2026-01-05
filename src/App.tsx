import { useState } from 'react'
import Hero from './components/Hero'
import SimpleTechStack from './components/SimpleTechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ChooseYourPath from './components/ChooseYourPath'

function App() {
  const [showChoosePath, setShowChoosePath] = useState(true)

  const handleChoosePath = (isTechnical: boolean) => {
    if (isTechnical) {
      window.location.href = 'http://adilaitelhoucine.me/My-Portfolio-/'
    } else {
      setShowChoosePath(false)
    }
  }

  if (showChoosePath) {
    return <ChooseYourPath onChoose={handleChoosePath} />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br from-primary to-primary-dark opacity-20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br from-secondary to-secondary-dark opacity-20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-accent to-accent-dark opacity-20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float-fast"></div>
      </div>

      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="tech-stack">
          <SimpleTechStack />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm">
          © {new Date().getFullYear()} Adil Ait Elhoucine. Made with ❤️ and React
        </p>
      </footer>
    </div>
  )
}

export default App
