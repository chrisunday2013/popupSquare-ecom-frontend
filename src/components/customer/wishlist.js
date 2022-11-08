import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';


function Wishlist(props){
       return(
             <div className="container mt-4">
                   <div className="row">
                          <div className="col-md-3 col-12 mb-2">
                              <Sidebar/>
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
                                                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/></Link>
                                                                <Link><p>Shoe</p></Link>
                                                            </td>
                                                            <td>#. 500</td>
                                                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/></Link>
                                                                <Link><p>Bag</p></Link>
                                                            </td>
                                                            <td>#. 500</td>
                                                        
                                                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <Link><img src={logo} className="img-thumbnail" width="80" alt="..."/></Link>
                                                                <Link><p>Book</p></Link>
                                                            </td>
                                                            <td>#. 500</td>
                                                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                                        
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

export default Wishlist;