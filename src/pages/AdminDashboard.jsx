import RestaurantCards from "../components/RestaurantCards";
import { Link } from "react-router-dom";
function Admindashboard(){
    return (

        <div>
            <h2>Admin Dashboard</h2>
            <Link to="/admin/restaurants/add">Add Restaurant</Link>
            <RestaurantCards/>
        </div>
    )
}

export default Admindashboard;