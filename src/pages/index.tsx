import About from '../components/About';
import PageProgress from '../components/DefaultComponents/PageProgress';
import ScrollButton from '../components/DefaultComponents/ScrollButton';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <PageProgress arr={[970, 970 * 2]} />
      <ScrollButton />
      <Header />
      <Hero />
      <About />
    </div>
  );
}
