import "./header.css";
import logo from "../assets/logo.svg";
import basket from "../assets/basket.svg";
import search from "../assets/Search.svg";
import person from "../assets/person.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav__logo">
            <img src={logo} alt="" />
            <h3 className="nav__title">Mohid</h3>
          </div>
          <div className="nav__links">
            <ul className="nav__collection">
              <li className="nav__list">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav__list">
                <a href="#">
                  <span>Brands</span>
                </a>
              </li>
              <li className="nav__list">
                <a href="#">
                  <span>Recent Products</span>
                </a>
              </li>
              <li className="nav__list">
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
              <li className="nav__list">
                <a href="#">
                  <span>About</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__icons">
            <img src={search} alt="" />
            <img src={person} alt="" />
            <img src={basket} alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
