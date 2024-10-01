import Banner from "../../../components/ui/Banner/Banner";
import FeaturedFacilities from "../FeaturedFacility/FeaturedFacilities";

import TestimonialsSlider from "../Testimonial/Testimonial";

import Footer from "../../Footer/AppFooter";

import ScrollToTopButton from "../../../components/ui/ScrollToTop/ScrollToTop";
import HowItWorks from "../InfoGraphic/HowitWork";
import OurWorks from "../PromotionSection/OurWorks";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedFacilities />
      <HowItWorks />
      <OurWorks />
      <TestimonialsSlider />
      <ScrollToTopButton></ScrollToTopButton>

      <Footer />
    </div>
  );
};

export default Home;
