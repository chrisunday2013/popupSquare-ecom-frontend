import {Routes as Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/head';
import Home from './components/home';
import Footer from './components/footer';
import Categories from './components/categories';


function App() {
  return (
    <>
      <Header/>
      <Switch>
           <Route path='/' element={<Home/>}/>
           <Route path='/categories' element={<Categories/>}/>
      </Switch>
      <Footer/>
      
    </>
  );
}

export default App;
