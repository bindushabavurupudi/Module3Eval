import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

function AddRestaurant(){
  const {addRestaurant} = useContext(RestaurantContext);
  const navigate = useNavigate();
  const [form, setForm] = useStae({
    restaurantName: "",
    address : "",
    type: "Rajasthani",
    parkingLot: "true",
    image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  });

  return (
    
  )
}


export default AddRestaurant;