import { Link } from "react-router-dom";
import Sidebar from "./sidebar";


function AddressList(){
    
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                  <Sidebar/>
                </aside>
                <section className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                              <Link to="/customer-addAddress" className="btn btn-outline-success mb-4 float-end"><i className="fa fa-plus-circle"></i>Add Address</Link>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                   <div className="card-body text-muted">
                                        <h6><i className="fa fa-check-circle text-success mb-2"></i><br/>
                                             No 20 Same Global Estate Abuja Nigeria
                                        </h6>
                                   </div> 
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                   <div className="card-body text-muted">
                                        <h6>
                                            <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                             No 20 Same Global Estate Abuja Nigeria
                                        </h6>
                                   </div> 
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                             <div className="card">
                                   <div className="card-body text-muted">
                                        <h6>
                                        <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                             No 20 Same Global Estate Abuja Nigeria
                                        </h6>
                                   </div> 
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                   <div className="card-body text-muted">
                                        <h6>
                                             <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                             No 20 Same Global Estate Abuja Nigeria
                                        </h6>
                                   </div> 
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                   <div className="card-body text-muted">
                                        <h6>
                                            <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                             No 20 Same Global Estate Abuja Nigeria
                                        </h6>
                                   </div> 
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                   <div className="card-body text-muted">
                                        <h6>
                                             <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                             No 20 Same Global Estate Abuja Nigeria
                                        </h6>
                                   </div> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddressList;