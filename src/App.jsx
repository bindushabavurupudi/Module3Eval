import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
   <BrowserRouter>
   <AuthContextProvider>
    <Routes>
      <Route path="/" element = {<Login/>}/>
    </Routes>
   </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;
