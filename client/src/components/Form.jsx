import { useState } from "react";
import "./form.css";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import Stock from "./Stock";

function Form( props ) {
  const navigate = useNavigate();

    const  [ stock, setStock ] = useState('');
    const  [ buy, setBuy ] = useState(0);
    const  [ sell, setSell ] = useState(0);
    const  [ quantity, setQuantity ] = useState(0);
    const  [ days, setDays ] = useState(0);

    const data = {
      stock,
      buy,
      sell,
      quantity,
      days,
      Uniquekey:props.Uniquekey
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("https://portfolio-mangement.onrender.com/stock/stockdata",data).then((res)=>alert(res.data));
    }
    // console.log(props.token);
  return (
    <div>
      <div className="form">
      <h2>Stocks Details</h2>

      <form onSubmit={handlesubmit}>
        <label>Enter share name</label>
        <input type="text" name="stock" onChange={(e)=> setStock(e.target.value)} placeholder="Stock Name..." required />
        <label>Enter buy amount</label>
        <input type="number" name="buy" placeholder="Buy on" onChange={(e)=> setBuy(e.target.value)} required />
        <label>Enter sell amount</label>
        <input type="number" name="sell" placeholder="sell on" onChange={(e)=> setSell(e.target.value)} required/>
        <label>Enter Quantity</label>
        <input type="number" name="unit" placeholder="Quantity" onChange={(e)=> setQuantity(e.target.value)} required/>
        <label>Enter holding days</label>
        <input type="number" name="days" placeholder="Holding Days" onChange={(e)=> setDays(e.target.value)} required/>
        <button className="form-btn">Submit</button>
      </form>
    </div>
    <div className="comunity">
      <h2>Explore Community</h2>
      <p>Let's connect together.</p>
      <button className="comunity-navigator" onClick={()=>navigate('/community',{state:{name:props.name,Uniquekey:props.Uniquekey,token:props.token}})}>Learn More</button>
    </div>
    </div>
  );
}

export default Form;
