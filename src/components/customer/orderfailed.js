
import { Link } from 'react-router-dom';

function OrderFailed(props){
       return(
             <div className="container mt-4">
                  <div className="row">
                       <div className="col-md-8 offset-2">
                            <div className="card">
                                  <div className="card-body text-center">
                                       <p><i className="fa fa-times-circle text-danger fa-3x"></i></p>
                                       <h3 className="text-danger">Something went wrong... Order Failed</h3>
                                       <p className="mt-4">
                                           <Link className="btn btn-primary" to="/">Home</Link>
                                           <Link className="btn btn-secondary ms-2" to="/customer-dashboard">Dashboard</Link>
                                        </p>
                                  </div>
                            </div>
                       </div>
                  </div>
             </div>
       )
}

export default OrderFailed;