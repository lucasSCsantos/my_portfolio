import About from '../components/About';
import ScrollButton from '../components/DefaultComponents/ScrollButton';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <ScrollButton />
      <Header />
      <Hero />
      <About />
      <About />
    </div>
  );
}
