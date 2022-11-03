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

      </section>
    );
  }
  
  export default Categories;
  