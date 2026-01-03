import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

function AddRestaurant(){
  const {addRestaurant} = useContext(RestaurantContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
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
 const [count, setCount] = useState(0);
 useState(()=>{
    const newForm = {
     restaurantName: name,
     address: address,
     type: type,
     parkingLot: parking,
     image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    };
    setForm([...form, newForm]);
 }, [count])
  function handleSubmit(){
    setCount(count+1);
    addRestaurant(form);
    alert("Restaurant added successfully");
    navigate("/admin/dashboard");

  };
  return (
    <div>
        <h1>Add Restaurant</h1>

        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="address" onChange={(e)=>setAddress(e.target.value)} />
        <select name="type" onChange={(e)=>setType(e.target.value)}>
            <option>Rajasthani</option>
            <option>Gujarati</option>
            <option>Mughlai</option>
            <option>Jain</option>
            <option>Thai</option>
            <option>North Indian</option>
            <option>South Indian</option>
        </select>

       <select name="parking" onChange={(e)=>setParking(e.target.value)}>
        <option>True</option>
        <option>False</option>
       </select>

       <button onClick={handleSubmit}>Add</button>
    </div>
  )
}


export default AddRestaurant;