import { FunctionComponent } from "react";
import Navbar from "../Sections/Home/NavbarPreLogin";
import HeroPage from "../Sections/Home/HeroPage";
import AboutServicePage from "../Sections/Home/AboutServicePage";
import TestimonialSection from "../Sections/Home/TestimonialSection";

const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeroPage />
      <AboutServicePage />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
