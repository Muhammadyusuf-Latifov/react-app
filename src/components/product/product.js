import "./product.css";
import firstWatch from "../assets/productImg/watch1.png";
import secondWatch from "../assets/productImg/watch2.png";
import thirdWatch from "../assets/productImg/watch3.png";
import fourthWatch from "../assets/productImg/watch4.png";
import fifthWatch from "../assets/productImg/watch5.png";
import lastWatch from "../assets/productImg/watch6.png";
import star from "../assets/productImg/star.svg";
const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="product__title">
          <p>Find your favourite smart watch.</p>
          <h2> Our Latest Products</h2>
        </div>
        <div className="product__wrapper">
          <div className="card">
            <div className="card__img">
              <img src={firstWatch} alt="" />
            </div>

            <div className="card__body">
              <h3 className="card__title">Apple Smart I</h3>
              <div className="mark">
                <img src={star} alt="" />
              </div>
              <div className="cost">
                <s>$300.00</s> <strong>$255.00</strong>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={secondWatch} alt="" />
            </div>

            <div className="card__body">
              <h3 className="card__title">Apple Smart II</h3>
              <div className="mark">
                <img src={star} alt="" />
              </div>
              <div className="cost">
                <s>$300.00</s> <strong>$255.00</strong>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={thirdWatch} alt="" />
            </div>

            <div className="card__body">
              <h3 className="card__title">Apple Smart III</h3>
              <div className="mark">
                <img src={star} alt="" />
              </div>
              <div className="cost">
                <s>$300.00</s> <strong>$255.00</strong>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={fourthWatch} alt="" />
            </div>

            <div className="card__body">
              <h3 className="card__title">Apple Smart IV</h3>
              <div className="mark">
                <img src={star} alt="" />
              </div>
              <div className="cost">
                <s>$450.00</s> <strong>$399.00</strong>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={fifthWatch} alt="" />
            </div>

            <div className="card__body">
              <h3 className="card__title">Samsung Watch Pro</h3>
              <div className="mark">
                <img src={star} alt="" />
              </div>
              <div className="cost">
                <s>$300.00</s> <strong>$255.00</strong>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={lastWatch} alt="" />
            </div>

            <div className="card__body">
              <h3 className="card__title">Fitbit Max 1</h3>
              <div className="mark">
                <img src={star} alt="" />
              </div>
              <div className="cost">
                <strong>$155.00</strong>
              </div>
            </div>
          </div>
        </div>
        <button className="product__btn">View More</button>
      </div>
    </section>
  );
};

export default Product;
