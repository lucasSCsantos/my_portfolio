import About from '../components/About';
import Contact from '../components/Contact';
import NavigationBars from '../components/DefaultComponents/NavigationBars';
import ScrollButton from '../components/DefaultComponents/ScrollButton';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import projects from '../data/projects';

export default function Home() {
  return (
    <div>
      <NavigationBars
        arr={[
          { width: 970 / 2, areaName: 'Home' },
          {
            width: 970 / 2 + 970,
            areaName: 'Sobre Mim'
          },
          { width: 970 / 2 + 970 * 2, areaName: 'Projetos', limit: 970 * 4 },
          { width: 970 * 5, areaName: 'Contato', limit: 0 }
        ]}
      />
      <ScrollButton />
      <Header />
      <Hero />
      <About />
      <Projects arr={projects} />
      <Contact />
    </div>
  );
}
