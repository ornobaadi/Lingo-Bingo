import AboutContact from "../components/AboutContact";
import AboutHero from "../components/AboutHero";
import AboutLearning from "../components/AboutLearning";
import AboutProjects from "../components/AboutProjects";

const About = () => {
    return (
        <div className="px-5 md:px-0">
            <AboutHero></AboutHero>
            <AboutProjects></AboutProjects>
            <AboutLearning></AboutLearning>
            <AboutContact></AboutContact>
        </div>
    );
};

export default About;