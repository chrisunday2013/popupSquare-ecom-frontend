import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">PopUp Square</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      <main className="mt-3">
        <div className="container">
          <h3 className="mb-4">Latest Products <a className="float-end btn btn-dark">View All Products <i class="fa-solid fa-arrow-right-long"></i></a> </h3> 
        <div className="row ">
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
        </div>
      </main>
    </>  
  );
}

export default App;
