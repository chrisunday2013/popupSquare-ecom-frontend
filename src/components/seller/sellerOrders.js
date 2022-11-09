import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import SellerSidebar from './setterSiderbar';


function SellerOrders(props){
       return(
             <div className="container mt-4">
                   <div className="row">
                          <div className="col-md-3 col-12 mb-2">
                              <SellerSidebar/>
                          </div>
                          <div className="col-md-9 col-12 mb-2">
                                <div className="row">
                                      <div className="table-responsive">
                                           <table className="table table-bordered">
                                                 <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/></Link>
                                                                <Link><p>Shirt</p></Link>
                                                            </td>
                                                            <td>#. 500</td>
                                                            <td><span className="text-success"><i className="fa fa-check-circle"></i>Completed</span></td>
                                                            <div class="btn-group" role="group">
                                                                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Change Status
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Aproved</a></li>
                                                                <li><a class="dropdown-item" href="#">Sent</a></li>
                                                                <li><a class="dropdown-item" href="#">Completed</a></li>
                                                                </ul>
                                                            </div>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/></Link>
                                                                <Link><p>Bag</p></Link>
                                                            </td>
                                                            <td>#. 500</td>
                                                            <td><span className="text-success"><i className="fa fa-check-circle"></i>Completed</span></td>
                                                            <div class="btn-group" role="group">
                                                                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Change Status
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Aproved</a></li>
                                                                <li><a class="dropdown-item" href="#">Sent</a></li>
                                                                <li><a class="dropdown-item" href="#">Completed</a></li>
                                                                </ul>
                                                            </div>
                                                        </tr>
                                                        
                                                </tbody>
                                            </table>

                                      </div>
                                </div>

                          </div>
                            
                    </div>
                  
             </div>
           
       )
}

export default SellerOrders;