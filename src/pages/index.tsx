import { useEffect } from 'react';
import AOS from 'aos';
import About from '../components/About';
import Contact from '../components/Contact';
import NavigationBars from '../components/DefaultComponents/NavigationBars';
import ScrollButton from '../components/DefaultComponents/ScrollButton';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import projects from '../data/projects';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <NavigationBars
        arr={[
          { width: 970 / 2, areaName: 'Home' },
          {
            width: 970 / 2 + 970,
            areaName: 'Sobre Mim'
          },
          {
            width: 970 / 2 + 970 * 2,
            areaName: 'Projetos',
            limit: 970 * 4 + 970 / 2
          },
          { width: 970 * 5 + 970 / 2, areaName: 'Contato', limit: 0 }
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
