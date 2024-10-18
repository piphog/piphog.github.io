
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Experience from "../components/Experience";
import Events from "../components/Events";
import Projects from "../components/Projects";
import ContactUs from "../components/ContactUs";
const HomePage = () => {

    return (

        <div className="home-page">
            <HeroSection />
            <About />
            <Experience />
            <Events />
            <Projects />
            <ContactUs />
        </div>
    )
};

export default HomePage;