import {Routes as Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/head';
import Home from './components/home';
import Footer from './components/footer';
import Categories from './components/categories';
import CategoryProducts from './components/categoryProduct';
import AllProductS from './components/allProducts';
import ProductDetail from './components/productDetail';
import Checkout from './components/checkout';

function App() {
  return (
    <>
      <Header/>
      <Switch>
           <Route path='/' element={<Home/>}/>
           <Route path='/categories' element={<Categories/>}/>
           <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
           <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
           <Route path='/products' element={<AllProductS/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
      </Switch>
      <Footer/>
      
    </>
  );
}

export default App;
