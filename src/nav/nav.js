import { NavLink } from "react-router-dom";
import "./nav.css";
import { TbLogout } from "react-icons/tb";

export default function Nav() {
  return (
    <>
      <div className="verticle">
        <img src="./logo.png" alt="logo" height={90} />
        <div className="line"></div>
        <p className="head"> Activities</p>

        <div className="nav_items_container">
          <NavLink
            className={({ isActive }) => {
              if (isActive) return "option activity";
              else return "option";
            }}
            to={"/banking"}
          >
            Banking
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              if (isActive) return "option activity";
              else return "option";
            }}
            to={"/agriculture"}
          >
            Agriculture
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              if (isActive) return "option activity";
              else return "option";
            }}
            to={"/production"}
          >
            Production
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              if (isActive) return "option activity";
              else return "option";
            }}
            to={"/medical"}
          >
            Medical
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              if (isActive) return "option activity";
              else return "option";
            }}
            to={"/marketing"}
          >
            Marketing
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              if (isActive) return "option activity";
              else return "option";
            }}
            to={"/trades"}
          >
            Trades
          </NavLink>
        </div>

        <div className="line"></div>

        <a href="https://metashape.ai/" className="link">
          {" "}
          www.metashape.ai
        </a>
        <div
          className="logout"
          onClick={(e) => {
            alert("Logout Successful!");
          }}
        >
          <TbLogout size={24} />
          <p>Logout</p>
        </div>
      </div>
    </>
  );
}
