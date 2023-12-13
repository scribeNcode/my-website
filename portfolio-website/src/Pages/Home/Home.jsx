import "../Home/Home.css";
import image from "./Images/myImage.png"

function Home() {
  return (
    <div className="home-page-wrapper">
      <div className="intro-container">
      <div className="my_image">
              <img src={image} alt="my" />
            </div>
        {/* <div className="my-image-wrapper"></div> */}
        <div className="short-intro-about-me">
          <h2>
            I Build <span className="digital">Scalable Digital</span> Products
          </h2>
          <p>
            <a href="">I am Boluwatife Adeyeye</a> (scribeNcode). A frontend
            developer. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sit asperiores aut reprehenderit quia a, quidem quo dolores
            doloremque aperiam temporibus iure enim, quod atque! Laudantium
            veritatis voluptas quas sunt dolores!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
