import { useContext, useState } from "react";
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
 const [name, setName] = useState("");
 const [address, setAddress] = useState("");
 const [type, setType] = useState("");
 const [parking, setParking] = useState("");
  const handleChange = (e) =>{
    const 
  }
  return (
    <div>
        <h1>Add Restaurant</h1>

        <input type="text" placeholder="Name" onChange={{handleChange}} />
        <input type="text" placeholder="address" onChange={handleChange} />
        <select name="type" onChange={handleChange}>
            <option>Rajasthani</option>
            <option>Gujarati</option>
            <option>Mughlai</option>
            <option>Jain</option>
            <option>Thai</option>
            <option>North Indian</option>
            <option>South Indian</option>
        </select>

       <select name="parking">
        <option>True</option>
        <option>False</option>
       </select>

       <button onClick={handleSubmit}>Add</button>
    </div>
  )
}


export default AddRestaurant;