
function Stock(props) {
  const { buy, sell } = props;
  const styles = {
    Active: {
        backgroundColor: '#bf212f'
    },
    Inactive: {
        backgroundColor: '#006f3c'
    },
}

  return (
    <div className="stock">
      <div className="stock-container" style={sell - buy < 0 ? styles.Active : styles.Inactive } >
          <ul>{props.stock}</ul>
          <ul>{buy}</ul>
          <ul>{sell}</ul>
          <ul>{props.quantity}</ul>
          <ul>{props.day}</ul>
          <ul>{sell - buy}</ul>
      </div>
    </div>
  );
}

export default Stock;
