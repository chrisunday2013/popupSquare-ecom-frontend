import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/head';


function App() {
  return (
    <>
      <Header/>
      <main className="mt-3">
        <div className="container">
          {/* {latest product section} */}
          <h3 className="mb-4">Latest Products <a className="float-end btn btn-dark">View All Products <i class="fa-solid fa-arrow-right-long"></i></a> </h3> 
        <div className="row mb-4 ">
          {/* {Product Box} */}
            <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
           {/* {Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
           {/* {Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
           {/* {Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
           {/* {Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
           {/* {Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
           {/* {Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
           {/* {Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Product Box End} */}
       
        </div>
        {/* {end latest product section} */}

         {/* {Popular category section} */}
         <h3 className="mb-4">Popular Categories <a href="#" className="float-end btn btn-dark">View All Categories <i class="fa-solid fa-arrow-right-long"></i></a> </h3> 
        <div className="row mb-4">
          {/* {category Box} */}
            <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Category title</h5>
                    </div>
                    <div className="card-footer">
                      Product Purchase: 234
                    </div>
                </div>
            </div>
            {/* {Category Box End} */}
           {/* {category Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Category title</h5>
                    </div>
                    <div className="card-footer">
                      Product Purchase: 234
                    </div>
                </div>
            </div>
            {/* {Category Box End} */}
           {/* {category Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Category title</h5>
                    </div>
                    <div className="card-footer">
                      Product Purchase: 234
                    </div>
                </div>
            </div>
            {/* {Category Box End} */}
          {/* {category Box} */}
          <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Category title</h5>
                    </div>
                    <div className="card-footer">
                      Product Purchase: 234
                    </div>
                </div>
            </div>
            {/* {Category Box End} */}
          
        </div>
        {/* {end popular category section} */}


         {/* {Popular product section} */}
         <h3 className="mb-4">Popular Products <a className="float-end btn btn-dark">View All Products <i class="fa-solid fa-arrow-right-long"></i></a> </h3> 
        <div className="row mb-4">
          {/* {Popular Product Box} */}
            <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Popular Product Box End} */}
           {/* {Popular Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Popular Product Box End} */}
           {/* {Popular Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Popular Product Box End} */}
           {/* {Popular Product Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Product title</h5>
                      <h5 className="card-title text-muted">Price: #. 500</h5>
                    </div>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i class="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Popular Product Box End} */}
         
        </div>
        {/* {end Popular product section} */}


           {/* {Popular seller section} */}
           <h3 className="mb-4">Popular Sellers <a href="#" className="float-end btn btn-dark">View All Sellers <i class="fa-solid fa-arrow-right-long"></i></a> </h3> 
        <div className="row mb-4">
         {/* {seller Box} */}
         <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Seller Name</h5>
                    </div>
                    <div className="card-footer">
                      Categories: <a href="#">Clothes</a>,  Categories: <a href="#">Electronics</a>, 
                    </div>
                </div>
            </div>
          {/* {seller Box End} */}
          
           {/* {seller Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Seller Name</h5>
                    </div>
                    <div className="card-footer">
                      Categories: <a href="#">Cars</a>,  Categories: <a href="#">Shoes</a>, 
                    </div>
                </div>
            </div>
          {/* {seller Box End} */}
          
           {/* {seller Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Seller Name</h5>
                    </div>
                    <div className="card-footer">
                      Categories: <a href="#">Bags</a>,  Categories: <a href="#">Toys</a>, 
                    </div>
                </div>
            </div>
          {/* {seller Box End} */}
          
           {/* {seller Box} */}
           <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Seller Name</h5>
                    </div>
                    <div className="card-footer">
                      Categories: <a href="#">Food</a>,  Categories: <a href="#">Utensils</a>, 
                    </div>
                </div>
            </div>
          {/* {seller Box End} */}
          
        </div>
        {/* {end popular seller section} */}

        </div>
      </main>
    </>  
  );
}

export default App;
