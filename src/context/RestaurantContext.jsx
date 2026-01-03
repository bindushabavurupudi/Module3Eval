import { createContext, useContext, useEffect, useState } from "react";

export const RestaurantContext = createContext();

function RestaurantContextProvider({children}){
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
       const data = JSON.parse(localStorage.getItem("evalData")) || [];
       setRestaurants(data);
    }, []);

    useEffect(()=>{
      localStorage.setItem("evalData", JSON.stringify(restaurants));
    }, [restaurants]);

    const addRestaurant = 

}

export default RestaurantContextProvider;