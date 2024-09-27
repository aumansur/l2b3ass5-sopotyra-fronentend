import React from "react";
import Banner from "../../../components/ui/Banner/Banner";
import FeaturedFacilities from "../FeaturedFacility/FeaturedFacilities";

import TestimonialsSlider from "../Testimonial/Testimonial";
import SeasonalPromotions from "../PromotionSection/PromotionSection";
import Footer from "../../Footer/AppFooter";
import HistoryMilestones from "../PromotionSection/PromotionSection";
import ScrollToTopButton from "../../../components/ui/ScrollToTop/ScrollToTop";
import HowItWorks from "../InfoGraphic/HowitWork";
import OurWorks from "../PromotionSection/PromotionSection";

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
