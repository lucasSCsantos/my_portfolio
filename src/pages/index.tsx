import About from '../components/About';
import PageProgress from '../components/DefaultComponents/NavigationBars';
import ScrollButton from '../components/DefaultComponents/ScrollButton';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <PageProgress arr={[970 / 2, 970 / 2 + 970]} />
      <ScrollButton />
      <Header />
      <Hero />
      <About />
    </div>
  );
}
