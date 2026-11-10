import Hero from '@/components/home/Hero';
import BrandBar from '@/components/home/BrandBar';
import ProductSection from '@/components/home/ProductSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/common/Newsletter';

const Home = () => (
  <>
    <Hero />
    <BrandBar />
    <ProductSection
      title="NEW ARRIVALS"
      category="new_arrival"
      viewAllTo="/new-arrivals"
    />
    <ProductSection
      title="TOP SELLING"
      category="top_selling"
      viewAllTo="/top-selling"
    />
    <CategoryGrid />
    <Testimonials />
  </>
);

export default Home;
