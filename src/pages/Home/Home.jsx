import AboutOrFeatures from '@/components/Sections/AboutOrFeatures/AboutOrFeatures';
import Banner from '@/components/Sections/Banner/Banner';
import HowToBuy from '@/components/Sections/HowToBuy/HowToBuy';
import MemeGenerator from '@/components/Sections/MemeGenerator/MemeGenerator';
import OurWayMoon from '@/components/Sections/OurWayMoon/OurWayMoon';
import TokenInformation from '@/components/Sections/TokenInformation/TokenInformation';

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutOrFeatures />
      <TokenInformation />
      <HowToBuy />
      <MemeGenerator />
      <OurWayMoon />
    </div>
  );
};

export default Home;
