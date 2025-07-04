import "./about.css";
import img1 from "../assets/aboutImg/img1.png";
import img2 from "../assets/aboutImg/img2.png";
import stars from "../assets/productImg/star.svg";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="   product__title">
          <p>Here are our some of the best clients.</p>
          <h2>What People Say About Us</h2>
        </div>

        <div className="about__wrapper">
          <div className="user">
            <div className="user__img">
              <img src={img1} alt="" />
            </div>
            <div className="user__context">
              <h3>Hamza Faizi</h3>
              <p className="comment">
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <div>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
          <div className="user">
            <div className="user__img">
              <img src={img2} alt="" />
            </div>
            <div className="user__context">
              <h3>Hafiz Huzaifa</h3>
              <p className="comment">
                I’ve been purchasing smart watches of Mohid for a long time. All
                the products are good quality.
              </p>
              <div>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
