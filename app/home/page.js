import Navbar from '../../components/homepage/Navbar';
import WelcomeBanner from '../../components/homepage/WelcomeBanner';
import SearchFilter from '../../components/homepage/SearchFilter';
import RecommendedArtists from '../../components/homepage/RecommendedArtists';
import ActiveCommissions from '../../components/homepage/ActiveCommissions';
import CommunityEvents from '../../components/homepage/CommunityEvents';
import Footer from '../../components/homepage/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <main className="pt-20">
        <WelcomeBanner />
        <SearchFilter />
        <RecommendedArtists />
        <ActiveCommissions />
        <CommunityEvents />
      </main>
      <Footer />
    </div>
  );
}
