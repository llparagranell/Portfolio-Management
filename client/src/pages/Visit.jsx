import { useNavigate } from "react-router-dom";
import "./visit.css";
import bro from "../bro.png";
import logo from "../p&m.png";

function Visit() {
  const navigate = useNavigate();
  return (
    <div className="visit">

      <nav>
        <div>
          <img src={logo} alt="" height={80} />
        </div>
        <div>
          <button className="visit-login" onClick={() => navigate("/login")}>
            login
          </button>


        </div>
      </nav>
      <div className="visit-home">
        <img src={bro} alt="" id="visit-img" />
        <div className="visit-text">
          <h2>
            Welcome to our <span id="visit-head"> Portfolio Management </span>
            app.
          </h2>
          <p>
            An platform where you can monitor your investments <br /> and
            commnunicate with other in community page.
          </p>
          <button className="visit-login" onClick={() => navigate("/register")}>
            let's get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visit;
