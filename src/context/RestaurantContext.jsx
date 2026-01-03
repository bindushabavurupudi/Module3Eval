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

    const addRestaurant = (restaurant) =>{
        const newRestaurant = {...restaurants, resTaurantID: Date.now()};
        setRestaurants([...restaurants, newRestaurant]);
    };

    const deleteRestaurant = (id) =>{
        const updated = restaurants.filter((item)=>{
            item.restaurantID != id
        });
        setRestaurants(updated);
    };

    const updateRestaurant = (id, updatedData)=>{
        const updated = restaurants.map((item)=> 
        item.restaurantID === id ? {...item, ...updatedData} : item
        );
        setRestaurants(updated);
    };
    return (

        <RestaurantContext.Provider value={{restaurants, addRestaurant, deleteRestaurant, updateRestaurant}}>
{children}
        </RestaurantContext.Provider>
    );

};

export default RestaurantContextProvider;