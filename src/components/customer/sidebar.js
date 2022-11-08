import { Link } from "react-router-dom"

function Sidebar(props){
    return (
            <div className="list-group">
                    <Link to="/customer-dashboard" className="list-group-item list-group-item-action active">Dashboard</Link>
                    <Link to="/order" className="list-group-item list-group-item-action">Orders</Link>
                    <Link to="/wishlist" className="list-group-item list-group-item-action">Wishlist</Link>
                    <Link to="/customer-profile" className="list-group-item list-group-item-action">Profile</Link>
                    <Link to="/customer-changePassWord" className="list-group-item list-group-item-action">Change Password</Link>
                    <Link to="#" className="list-group-item list-group-item-action">Addresses</Link>
                    <Link to="#" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
    )
}

export default Sidebar