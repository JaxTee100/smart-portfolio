import AboutSection from "../components/sections/about-section/AboutSection"
import ContactSection from "../components/sections/contact-section/ContactSection";
import FeaturedProjects from "../components/sections/featured-projects/FeaturedProjects";
import ProfileSection from "../components/sections/profile-section/ProfileSection"
import SkillsSection from "../components/sections/skills-section/SkillsSection"



export default function Home() {
  return (
    <div className=" p-2 lg:p4">
      
      <ProfileSection />


      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
    </div>
  );
}
