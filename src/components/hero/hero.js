import "./hero.css";
import heroImg from "../assets/hero/clock.png";
import lupa from "../assets/hero/kok.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__context">
            <h2 className="hero__title">
              <span className="inner">Discover </span> Most Suitable Watches
            </h2>
            <p className="hero__desc">
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <div className="input__wrapper">
              <img src={lupa} alt="" />
              <input
                placeholder="Find the best brands"
                className="hero__inp"
                type="text"
              />
              <button className="hero__btn">Search</button>
            </div>
          </div>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
