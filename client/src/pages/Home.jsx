import { useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Form from "../components/Form";
import User from "../components/User";
import jwt_decode from "jwt-decode";
import Visit from "./Visit";
import { useState } from "react";

function Home() {
  const location = useLocation();
  const w = window.innerWidth;
  let condition = false;
  if(w > 770){
    // setDash(true);
    // setOpen(true);
    // setUser(true)
    condition = true;
  }
  // console.log(condition);

  const [ open, setOpen ] = useState(condition);
  const [ dash, setDash ] = useState(condition);
  const [ user, setUser ] = useState(condition); 

  const dashboard = () => {
    setDash(true);
    setOpen(false);
    setUser(false);
  }
  const userhandler = () => {
    setDash(false);
    setOpen(false);
    setUser(true);
  }
  const opener = () => {
    setDash(false);
    setOpen(true);
    setUser(false);
  }

  if (location.state === null) {
    return <Visit/>;
  } else {
    const token = location.state.tokenKey;
    const decoded = jwt_decode(token);
    return (
     <div>
      <div className="responsive">
      <p onClick={dashboard}>DashBoard</p>
      <p onClick={userhandler}>User</p>
      <p onClick={opener}>Stock</p>
      </div>
       <div className="flex">
        <div>
        {user?  <User data={decoded.name} Uniquekey={decoded.id} />:""}
        </div>
        <div className="dash">
        {dash?<Dashboard Uniquekey={decoded.id} />:""}
        </div>
        <div className="from">
         {open? <Form
            Uniquekey={decoded.id}
            name={decoded.name}
            token={location.state.tokenKey}
          />:""}
        </div>
      </div>
     </div>
    );
  }
}

export default Home;
