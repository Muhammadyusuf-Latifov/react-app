import "./category.css";
import stWatch from "../assets/categoryImg/watch1.png";
import ndWatch from "../assets/categoryImg/watch2.png";
import rdWatch from "../assets/categoryImg/watch3.png";

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <div className="category__wrapper">
          <div className="box">
            <div className="box__img">
              <img src={stWatch} alt="" />
            </div>
            <div className="box__body">
              <h3 className="box__title">Apple</h3>
              <p className="box__desc">
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="box__img">
              <img src={ndWatch} alt="" />
            </div>
            <div className="box__body">
              <h3 className="box__title">Xiaomi</h3>
              <p className="box__desc">
                Xiaomi smart watches are produced by MI company.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="box__img">
              <img src={rdWatch} alt="" />
            </div>
            <div className="box__body">
              <h3 className="box__title">FitBit</h3>
              <p className="box__desc">
                FitBit smart watches are best for there health and fitness
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
