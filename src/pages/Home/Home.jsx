import AboutOrFeatures from '@/components/Sections/AboutOrFeatures/AboutOrFeatures';
import Banner from '@/components/Sections/Banner/Banner';
import MemeGenerator from '@/components/Sections/MemeGenerator/MemeGenerator';
import OurWayMoon from '@/components/Sections/OurWayMoon/OurWayMoon';

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutOrFeatures />
      <MemeGenerator />
      <OurWayMoon />
    </div>
  );
};

export default Home;
