import { Link } from "react-router-dom"

function SellerSidebar(props){
    return (
            <div className="list-group">
                    <Link to="/seller-dashboard" className="list-group-item list-group-item-action active">Dashboard</Link>
                    <Link to="/seller-categories" className="list-group-item list-group-item-action">Manage Categories</Link>
                    <Link to="/seller-products" className="list-group-item list-group-item-action">Manage Products</Link>
                    <Link to="/add-products" className="list-group-item list-group-item-action">Add Products</Link>
                    <Link to="/manage-orders" className="list-group-item list-group-item-action">Orders</Link>
                    <Link to="/seller-customers" className="list-group-item list-group-item-action">Customers</Link>
                    <Link to="/reports" className="list-group-item list-group-item-action">Reports</Link>
                    <Link to="/seller-changePassWord" className="list-group-item list-group-item-action">Change Password</Link>
                    <Link to="#" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
    )
}

export default SellerSidebar