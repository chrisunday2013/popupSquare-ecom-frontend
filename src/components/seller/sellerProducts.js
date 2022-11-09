
import { Link } from 'react-router-dom';

import SellerSidebar from './setterSiderbar';

function SellerProducts(props){
       return(
             <div className="container mt-4">
                  <div className="row">
                       <div className="col-md-3 col-12 mb-2">
                           <SellerSidebar/>
                       </div>
                       <div className="col-md-9 col-12 mb-2">
                       <div className="row">
                            <div className="col-md-12 mb-2">
                                <Link to="/add-products" className="btn btn-outline-primary mb-2 float-end"><i className="fa fa-plus-circle"></i>Add Product</Link>
                            </div>
                        </div>
                            {/* <h3><Link to="#" className="btn btn-primary mb-2"><i className="fa fa-plus-circle"></i>Add Product</Link></h3> */}
                            <div className="table-responsive">
                                  <table className="table table-bordered">
                                        <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Product Title</td>
                                                    <td>500</td>
                                                    <td>Published</td>
                                                    <td>
                                                        <Link to="#" className="btn btn-info">View</Link>
                                                        <Link to="#" className="btn btn-primary ms-2">Edit</Link>
                                                        <Link to="#" className="btn btn-danger ms-2">Delete</Link>
                                                    </td>
                                                </tr>
                                        </tbody>
                                  </table>
                            </div>
                       </div>
                  </div>
             </div>
       )
}

export default SellerProducts;