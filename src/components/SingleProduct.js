import logo from '../logo.svg';

function SingleProduct(props){
       return(

          <div className="col-md-3 mb-3">
          <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-title text-muted">Price: #. 500</h5>
              </div>
              <div className="card-footer">
                  <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
                  <button title="Add to Wishlist" className="btn btn-danger ms-1 btn-sm"><i className="fa fa-heart"></i></button>
              </div>
          </div>
      </div>
    
       )
}

export default SingleProduct;