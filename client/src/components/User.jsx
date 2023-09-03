import axios from "axios";
import "./user.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function User(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("https://portfolio-mangement.onrender.com/api/logout")
      .then((res) => alert(res.data));
    navigate("/ ");
  };
  return (
    <div className="user">
      <div className="user-details">
        <div className="user-circle">
          <li className="circle">
            <FaRegUserCircle style={{ fontSize: "80px", color: "lightgrey" }} />
          </li>
          <h2>{props.data}</h2>
        </div>

        <div className="list">
          <li onClick={() => navigate("/plans",{ state:{name:props.data,Uniquekey:props.Uniquekey}})}>Explore plan's</li>
          <li onClick={() => alert("Will Be Avilable soon.")}>Team</li>
          <div className="dropdown">
            <li className="dropbtn">User Settings</li>
            <div className="dropdown-content">
              <li>Change Password</li>
              <li>Change Photo</li>
              <li>Delete Account</li>
            </div>
          </div>
        </div>
      </div>

      <p className="settings" onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
}

export default User;
