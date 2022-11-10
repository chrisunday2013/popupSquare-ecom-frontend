import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import AllProductS from './allProducts';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

    function Home(){
        
            
       
    const [products, setProducts] = useState([])
    

    useEffect(()=> {
        fetchData('http://127.0.0.1:8000/api/products/');
    },[])

    function fetchData(baseurl){
        fetch(baseurl)
       .then((response) => response.json())
       .then((data) => setProducts(data.results));
    }


    return(
       <>
       <main className="mt-3">
        <div className="container">
          {/* {latest product section} */}
          <h3 className="mb-4">Latest Products <Link to="/products" className="float-end btn btn-dark">View All Products <i className="fa-solid fa-arrow-right-long"></i></Link> </h3> 
        <div className="row mb-4 ">
            {products.map((product, index) =>
               <SingleProduct product={product}/>
            )}
       </div>
        {/* {end latest product section} */}

         {/* {Popular category section} */}
         <h3 className="mb-4">Popular Categories <Link to="/categories" className="float-end btn btn-dark">View All Categories <i className="fa-solid fa-arrow-right-long"></i></Link> </h3> 
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
         <h3 className="mb-4">Popular Products <a className="float-end btn btn-dark">View All Products <i className="fa-solid fa-arrow-right-long"></i></a> </h3> 
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
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i className="fa fa-heart"></i></button>
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
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i className="fa fa-heart"></i></button>
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
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i className="fa fa-heart"></i></button>
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
                        <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i className="fa fa-heart"></i></button>
                    </div>
                </div>
            </div>
          {/* {Popular Product Box End} */}
         
        </div>
        {/* {end Popular product section} */}


           {/* {Popular seller section} */}
           <h3 className="mb-4">Popular Sellers <a href="#" className="float-end btn btn-dark">View All Sellers <i className="fa-solid fa-arrow-right-long"></i></a> </h3> 
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

         {/* {start rating and reviews} */}
         <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="true">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                          <figure className="text-center">
                              <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <cite title="Source Title">Customer Name</cite>
                              </figcaption>
                          </figure>
                    </div>
                    <div className="carousel-item">
                          <figure className="text-center">
                              <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <cite title="Source Title">Customer Name</cite>
                              </figcaption>
                          </figure>
                    </div>
                    <div className="carousel-item">
                          <figure className="text-center">
                              <blockquote className="blockquote">
                                <p>A well-known quote, contained in a blockquote element.</p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                <i className='fa fa-star text-warning'></i>
                                <i className='fa fa-star text-warning'></i>
                                <cite title="Source Title">Customer Name</cite>
                              </figcaption>
                          </figure>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
          </div>

         {/* {end rating and reviews} */}
       
        </div>
      </main>
    </>  
    )
}

export default Home;