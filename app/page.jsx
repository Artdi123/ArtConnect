import Navbar from '../components/Landing/Navbar';
import Hero from '../components/Landing/Hero';
import Showcase from '../components/Landing/Showcase';
import HowItWorks from '../components/Landing/HowItWorks';
import ForArtists from '../components/Landing/ForArtists';
import Testimonials from '../components/Landing/Testimonials';
import Footer from '../components/Landing/Footer';

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