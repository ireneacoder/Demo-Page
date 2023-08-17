import "./App.css";
import Nav from "./nav/nav";
import Card from "./card/card";
import { MdAccountCircle } from "react-icons/md";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    
    <div>

      <Nav />

      <div className="profile_container">
          <div className="profile" onClick={(e) => alert('profile clicked!')}>
            <MdAccountCircle size={32} color="#512E70" />
          </div>
      </div>

      <div className="right_container">
          <div className="outlet_container">
            <Outlet/>
          </div>       
      </div>
      
    </div>
  );
}
