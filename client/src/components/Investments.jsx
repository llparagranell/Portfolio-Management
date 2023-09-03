import axios from "axios";
import Stock from "./Stock";
import "./investments.css";
import { useEffect, useState } from "react";
function Investments(props) {
//   console.log(props.Uniquekey);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://portfolio-mangement.onrender.com/stock/getstock")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="invetments">
      <div className="in">
        <ul>Stocks</ul>
        <ul>Buy Amount</ul>
        <ul>Sold Amount</ul>
        <ul>Quantity</ul>
        <ul>Days</ul>
        <ul>profit / loss</ul>
      </div>
      {data &&
        data.map((items) => {
          if (items.Uniquekey === props.Uniquekey) {
            return (
              <Stock
                stock={items.stock}
                buy={items.buy}
                sell={items.sell}
                quantity={items.quantity}
                day={items.days}
              />
              
            );
          }else{
            return <p></p>
          }
        })}
    </div>
  );
}

export default Investments;
