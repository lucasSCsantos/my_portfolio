import About from '../components/About';
import PageProgress from '../components/DefaultComponents/NavigationBars';
import ScrollButton from '../components/DefaultComponents/ScrollButton';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import projects from '../data/projects';

export default function Home() {
  return (
    <div>
      <PageProgress
        arr={[
          { width: 970 / 2, areaName: 'Home' },
          { width: 970 / 2 + 970, areaName: 'Sobre Mim' },
          { width: 970 / 2 + 970 * 2, areaName: 'Projetos' }
        ]}
      />
      <ScrollButton />
      <Header />
      <Hero />
      <About />
      <Projects arr={projects} />
    </div>
  );
}
