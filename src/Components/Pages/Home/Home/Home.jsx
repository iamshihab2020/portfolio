import AboutUs from "../AboutUs/AboutUs";
import HomeContent from "../HomeContent/HomeContent";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <HomeContent />
      <Skills/>
      <AboutUs />
      <Projects/>

    </div>
  );
};

export default Home;
