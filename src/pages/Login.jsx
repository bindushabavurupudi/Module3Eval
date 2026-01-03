import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = ()=>{
        const role = login(email, password);
        if(!role){
            alert("Invalid userName or Password");
            return;
        }
        if(role === "admin")
            navigate("/admin/dashboard");
        if(role === "customer")
            navigate("/customers/dashboard");
    };

    return (
        <div>
           <h2>Login Page</h2>
           <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} />
           <button onClick={handleLogin}>Login</button>
        </div>
    );

}

export default Login;