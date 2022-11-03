import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Categories() {
    return (
      <section className="container  mt-4">
    
         <h3 className="mb-4">All Categories</h3> 
        <div className="row mb-2">
          {/* {category Box} */}
            <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to="/category/electronics/1">Category title</Link></h4>
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
                      <h5 className="card-title"><Link to="">Category title</Link></h5>
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
                      <h5 className="card-title"><Link to="">Category title</Link></h5>
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
                      <h5 className="card-title"><Link to="">Category title</Link></h5>
                    </div>
                    <div className="card-footer">
                      Product Purchase: 234
                    </div>
                </div>
            </div>
            {/* {Category Box End} */}

        </div>

        <div className="row mb-2">
          {/* {category Box} */}
            <div className="col-md-3 mb-3">
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h4 className="card-title"><Link to="/category/python/1">Category title</Link></h4>
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
                      <h5 className="card-title"><Link to="">Category title</Link></h5>
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
                      <h5 className="card-title"><Link to="">Category title</Link></h5>
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
                      <h5 className="card-title"><Link to="">Category title</Link></h5>
                    </div>
                    <div className="card-footer">
                      Product Purchase: 234
                    </div>
                </div>
            </div>
            {/* {Category Box End} */}


        </div>
         {/* {pagination start} */}
         <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
             {/* {end pagination} */}

      </section>
    );
  }
  
  export default Categories;
  