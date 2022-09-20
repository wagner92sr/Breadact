import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Production } from "./components/Production";
import { Stock } from "./components/Stock";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/production" />}/>
          
          <Route path="/production">
            <Route path=":selectedProduct" element={<Production/>}/>
            <Route element={<Production/>} index/>            
          </Route>

          <Route 
             path="/stock"
             element={
              <ProtectedRoute >
                <Stock />
              </ProtectedRoute>
             } 
          />          

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
