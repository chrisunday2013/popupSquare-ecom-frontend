import Sidebar from "./sidebar";


function Profile(){
    
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                <Sidebar/>
                </aside>
                <section className="col-md-9 col-12 mb-2">
                   <div className="card">    
                      <h5 className="card-header">Update Profile</h5>
                      <div className="card-body">
                           
                            <div className="mb-3">
                                    <label for="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstname"/>
                                    
                            </div>
                            
                            <div className="mb-3">
                                    <label for="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastname"/>
                            </div>
                            <div className="mb-3">
                                    <label for="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username"/>
                            </div>
                            <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label for="profileImg" className="form-label">Profile Image</label>
                                    <input type="file" className="form-control" id="profileImg"/>
                                </div>
                            </div>
                            <button  className="btn btn-primary">Update</button>

                      </div>      
                   </div>      
                </section>
            </div>
        </div>
    )
}

export default Profile;