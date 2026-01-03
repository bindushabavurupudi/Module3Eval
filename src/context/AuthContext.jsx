import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
function AuthContextProvider({children}){
    const [auth, setAuth] = useState(
        JSON.parse(localStorage.getItem("auth")) || null
    );

    useEffect(()=>{
        localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);

    const login = (email, password) =>{
        if(email === "admin@gmail.com" && password === "admin1234"){
            setAuth({role: "admin"});
            return "admin";
        }
        if(email === "customer@gmail.com" && password === "customer1234"){
            setAuth({role: "customer"});
            return "customer";
        }
        return null;
    };
    // const logout
    return (
        <>
         <AuthContext.Provider value={{auth, login}}>{children}</AuthContext.Provider>
        </>
    );
}

export default AuthContextProvider;
