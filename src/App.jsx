import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AuthContextProvider from "./context/AuthContext";
import RestaurantContextProvider from "./context/RestaurantContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Admindashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import AddRestaurant from "./pages/AddRestaurant";
function App() {
  return (
   <BrowserRouter>
   <AuthContextProvider>
    <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path="/admin/dashboard" element={<ProtectedRoutes>
        <Admindashboard/>
      </ProtectedRoutes>}/>
      <Route path="/admin/restaurants/add" element={<ProtectedRoutes role="admin">
        <AddRestaurant/>
      </ProtectedRoutes>}/>
      <Route path="/customers/dashboard" element = {<ProtectedRoutes>
        <CustomerDashboard/>
      </ProtectedRoutes>}/>
    </Routes>
    <RestaurantContextProvider/>
   </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;
