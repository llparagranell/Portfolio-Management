function Rate(props) {

  
  
  return (
    <div className="card-container">
      <div className="card">
        <h3>Profit</h3>
        <p>₹ {props.profit}</p>
      </div>
      <div className="card">
        <h3>Revenue</h3>
        <p>₹ {props.revenue}</p>
      </div>
      <div className="card">
        <h3>Loss</h3>
        <p>₹ {props.loss}</p>
      </div>
    </div>
  );
}

export default Rate;
