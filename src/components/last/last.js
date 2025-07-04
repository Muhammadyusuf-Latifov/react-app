import "./last.css";
import img from "../assets/productImg/watch1.png";
import lupa from "../assets/hero/kok.svg";

const Last = () => {
  return (
    <section className="last">
      <div className="container">
        <div className="last__wrapper">
          <div className="last__context">
            <h2 className="last__title">Subscribe To Newsletter</h2>
            <p className="last__desc">
              Get free guide about smart watches daily.{" "}
            </p>
            <div className="input__wrapper">
              <img src={lupa} alt="" />
              <input
                placeholder="Enter Email Address"
                className="hero__inp"
                type="email"
              />
              <button className="hero__btn last__btn">Subscribe</button>
            </div>
            <button className="songi">Subscribe</button>
          </div>
          <div className="last__img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Last;
