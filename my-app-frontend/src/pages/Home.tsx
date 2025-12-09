import React from "react";
import HeroSection from "../components/HeroSectionHome";
import AboutUs from "../components/AboutUsHome";
import SkillsSection from "../components/SkillsHome";
import ExperienceSection from "../components/MyExperience";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact";
import ServicesSection from "../components/ServiceSection";

const Home: React.FC = () => {
    return (
        <>
        <HeroSection></HeroSection>
        <AboutUs></AboutUs>
        
        
        <ServicesSection></ServicesSection>
        <ExperienceSection></ExperienceSection>
        <ProjectList></ProjectList>
        <Contact></Contact>
        </>
    );
};

export default Home;