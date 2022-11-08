import Sidebar from "./sidebar";


function AddAddress(){
    
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                <Sidebar/>
                </aside>
                <section className="col-md-9 col-12 mb-2">
                   <div className="card">    
                      <h5 className="card-header">Add Address</h5>
                      <div className="card-body">
                           
                            <div className="mb-3">
                                    <label for="addAddress" className="form-label">First Name</label>
                                    <textarea className="form-control" id="addAddress"></textarea>
                            </div>
                            <button  className="btn btn-primary">Submit</button>

                      </div>      
                   </div>      
                </section>
            </div>
        </div>
    )
}

export default AddAddress;