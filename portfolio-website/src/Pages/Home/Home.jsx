import "../Home/Home.css";
import Projects from "../../Components/HomePage/Projects/Projects";
import Intro from "../../Components/HomePage/Intro/Intro";


function Home() {
  return (
    <div className="home-page-wrapper">
      <Intro/>
      <Projects/>
    </div>
  );
}
export default Home;
