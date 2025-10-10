import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import HowItWorks from '../components/HowItWorks';
import ForArtists from '../components/ForArtists';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      <HowItWorks />
      <ForArtists />
      <Testimonials />
      <Footer />
    </div>
  );
}