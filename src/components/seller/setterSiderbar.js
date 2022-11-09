import { Link } from "react-router-dom"

function SellerSidebar(props){
    return (
            <div className="list-group">
                    <Link to="/seller-dashboard" className="list-group-item list-group-item-action active">Dashboard</Link>
                    <Link to="/seller-products" className="list-group-item list-group-item-action">Manage Products</Link>
                    <Link to="/add-products" className="list-group-item list-group-item-action">Add Products</Link>
                    <Link to="/seller-orders" className="list-group-item list-group-item-action">Orders</Link>
                    <Link to="/customers" className="list-group-item list-group-item-action">Customers</Link>
                    <Link to="/reports" className="list-group-item list-group-item-action">Reports</Link>
                    <Link to="/seller-profile" className="list-group-item list-group-item-action">Profile</Link>
                    <Link to="/seller-changePwd" className="list-group-item list-group-item-action">Change Password</Link>
                    <Link to="#" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
    )
}

export default SellerSidebar