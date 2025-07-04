import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Category from './components/category/category';
import Product from './components/product/product';
import About from './components/about/about';
import Last from './components/last/last';
import Footer from './components/footer/footer';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Product />
      <About/>
      <Last />
      <Footer/>
    </>
  );
}

export default App;
