import "../Home/Home.css";
import image from "./Images/myImage.png";

function Home() {
  return (
    <div className="home-page-wrapper">
      <div className="intro-container">
        <div className="my_image">
          <img src={image} alt="my" />
        </div>
        {/* <h3 className="my-name">Adeyeye Boluwatife</h3>
        <p className="my-name">Frontend Developer</p> */}
        {/* <div className="my-image-wrapper"></div> */}
        <div className="short-intro-about-me">
          <h3>
            I Build <span className="digital">Scalable Digital</span> Products
            {/* <a href="">I'm Boluwatife Adeyeye</a> . */}
          </h3>
          <p>
        I'm a <span className="highlighted">Frontend
            developer</span> . I make all sort of stuff with Typescript, JavaScript,
            React and Vuejs. You can find my work on <a href="">GitHub</a>. I enjoy teaching and sharing about the things I build.
            Check out my <a href="">writing</a>.I help people learn more about web development.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
