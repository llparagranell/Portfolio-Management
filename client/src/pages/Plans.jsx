import "./plans.css";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Plans() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="back" onClick={() => navigate("/")}>
        <BiArrowBack />
      </h1>
      <div className="center">
        <div className="columns">
          <ul className="price">
            <li className="header">Basic</li>
            <li className="grey">$ 19.99 / year</li>
            <li>10GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>1GB Bandwidth</li>
            <li class="grey">
              <button class="button">
                Buy Now
              </button>
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="header" style={{ backgroundColor: " #264b96" }}>
              Pro
            </li>
            <li className="grey">$ 24.99 / year</li>
            <li>25GB Storage</li>
            <li>25 Emails</li>
            <li>25 Domains</li>
            <li>2GB Bandwidth</li>
            <li className="grey">
              <button className="button">
                Buy Now
              </button>
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="header">Premium</li>
            <li className="grey">$ 49.99 / year</li>
            <li>50GB Storage</li>
            <li>50 Emails</li>
            <li>50 Domains</li>
            <li>5GB Bandwidth</li>
            <li className="grey">
              <button className="button">
                Buy Now
              </button>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Plans;
