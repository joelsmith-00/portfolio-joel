import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';

import Skills from './sections/Skills';
import Projects from './sections/Projects';

import Hackathons from './sections/Hackathons';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-main)] min-h-screen selection:bg-primary selection:text-white font-sans relative overflow-x-hidden transition-colors duration-300">
      {/* Background is now static via CSS vars */}

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <About />
        <Education />

        <Skills />
        <Projects />
        <Hackathons />
        <Contact />
      </div>
    </div>
  );
}

export default App;
