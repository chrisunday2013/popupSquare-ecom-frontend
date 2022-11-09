import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import SellerSidebar from './setterSiderbar';


function Customers(props){
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
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Mobile Number</th>
                                                            <th>Action</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>John Wick</td>
                                                            <td>johnwick@gmail.com</td>
                                                            <td>09098787654</td>
                                                            <td>
                                                                <button className="btn btn-primary btn-sm ">Orders</button>
                                                                <button className="btn btn-danger btn-sm ms-1">Remove from List</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>John Boyega</td>
                                                            <td>johnBoyega@gmail.com</td>
                                                            <td>09098781154</td>
                                                            <td>
                                                                <button className="btn btn-primary btn-sm ">Orders</button>
                                                                <button className="btn btn-danger btn-sm ms-1">Remove from List</button>
                                                            </td>
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

export default Customers;