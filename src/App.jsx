import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, BubblesCanvas } from './components'

const App= () => {  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0 transition-all duration-700 beige-blue-gradient">
          <Contact />
          <BubblesCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
