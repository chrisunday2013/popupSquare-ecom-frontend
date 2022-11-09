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


// customer info
import Register from './components/customer/register';
import Login from './components/customer/login';
import Dashboard from './components/customer/dashboard';
import Orders from './components/customer/order';
import OrderSuccess from './components/customer/orderSuccess';
import OrderFailed from './components/customer/orderfailed';
import Wishlist from './components/customer/wishlist';
import Profile from './components/customer/profile';
import ChangePassword from './components/customer/changePwd';
import AddressList from './components/customer/addessList';
import AddAddress from './components/customer/addAddress';


// seller info
import SellerRegister from './components/seller/register';
import SellerLogin from './components/seller/login';
import SellerDashboard from './components/seller/sellerDashboard';
import SellerProducts from './components/seller/sellerProducts';
import AddProducts from './components/seller/addProduct';
import SellerOrders from './components/seller/sellerOrders';
import Customers from './components/seller/customer';
import Report from './components/seller/report';
import SellerChangePwd from './components/seller/changePassword';
import SellerProfile from './components/seller/profile';


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
            {/* customer */}
            <Route path='/customer-register' element={<Register/>}/>
            <Route path='/customer-login' element={<Login/>}/>
            <Route path='/customer-dashboard' element={<Dashboard/>}/>
            <Route path='/order' element={<Orders/>}/>
            <Route path='/order-success' element={<OrderSuccess/>}/>
            <Route path='/order-failed' element={<OrderFailed/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/customer-profile' element={<Profile/>}/>
            <Route path='/customer-changePassword' element={<ChangePassword/>}/>
            <Route path='/customer-addressList' element={<AddressList/>}/>
            <Route path='/customer-addAddress' element={<AddAddress/>}/>
            {/* {seller} */}
            <Route path='/seller-register' element={<SellerRegister/>}/>
            <Route path='/seller-login' element={<SellerLogin/>}/>
            <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
            <Route path='/seller-products' element={<SellerProducts/>}/>
            <Route path='/add-products' element={<AddProducts/>}/>
            <Route path='/seller-orders' element={<SellerOrders/>}/>
            <Route path='/customers' element={<Customers/>}/>
            <Route path='/reports' element={<Report/>}/>
            <Route path='/seller-profile' element={<SellerProfile/>}/>
            <Route path='/seller-changePwd' element={<SellerChangePwd/>}/>

      </Switch>
      <Footer/>
      
    </>
  );
}

export default App;
