import{Navigate} from "react-router-dom";
import { useContext } from "react";
import AuthContextProvider, { AuthContext } from "../context/AuthContext";
 
function ProtectedRoutes({children, role}){
const {auth} = useContext(AuthContext);
if(!auth) return <Navigate to="/"/>
if(role && auth.role !== role) return <Navigate to="/"/>
return children;
}

export default ProtectedRoutes;
