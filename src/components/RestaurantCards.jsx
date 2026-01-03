import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

function RestaurantCards(){
const {restaurants} = useContext(RestaurantContext);
return(

    <div>
        {restaurants.map((r)=>(
            <div key={r.restaurantID}>
                <h3>{r.restaurantName}</h3>
                <p>{r.address}</p>
                <p>{r.type}</p>
                <p>{r.parkingLot ? "Parking Available": "No Parking"}</p>
                <img src={r.image} alt="image" />
            </div>
        ))}
    </div>
)
}

export default RestaurantCards;