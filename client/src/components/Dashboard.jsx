import { useEffect, useState } from "react";
import Comparison from "./Comparison";
import Investments from "./Investments";
import "./dashboard.css";
import axios from "axios";
import Rate from "./Rate";
function Dashboard(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://portfolio-mangement.onrender.com/stock/getstock")
      .then((res) => setData(res.data));
  }, []);

  let revenue = 0;
  let profit = 0;
  let loss = 0;

  {
    data &&
      data.map((items) => {
        if (items.Uniquekey === props.Uniquekey) {
          profit += Number(items.sell - items.buy);
          revenue += Number(items.buy);
          loss += Number(items.buy - items.sell);
          return console.log("");
        }else{
          return <p>hello</p>
        }
      });
  }
  if (loss < 0) {
    loss = 0;
  }
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Rate profit={profit} revenue={revenue} loss={loss} />
      <div className="chart">
        <h2>Comparison</h2>
        <Comparison  Uniquekey={props.Uniquekey}/>{" "}
      </div>
      <div className="investments">
        <h2>Investments</h2>
        <Investments Uniquekey={props.Uniquekey} />
      </div>
    </div>
  );
}

export default Dashboard;
