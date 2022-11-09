
import SellerSidebar from "./setterSiderbar";

function SellerChangePwd(){

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                <SellerSidebar/>
                </aside>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h5 className="card-header">Change Password</h5>
                        <div className="card-body">
                            
                           {/* <form> */}
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">New Password</label>
                                    <input type="password" name="password" className="form-control" id="pwd"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Confirm Password</label>
                                    <input type="password" name="password" className="form-control" id="cpwd" />
                                </div>

                                <button type="submit"  className="btn btn-primary">Send</button>
                            {/* </form> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerChangePwd;