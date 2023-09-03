import CanvasJSReact from "@canvasjs/react-charts";
import { useEffect, useState } from "react";
import axios from "axios";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Comparison(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-mangement.onrender.com/stock/getstock")
      .then((res) => setData(res.data));
  }, [setData]);

  const dataPoints = [];
  {
    data.map((e) => {
      if (e.Uniquekey === props.Uniquekey) {
       return dataPoints.push({ label: e.stock, y: Number(e.sell - e.buy) });
      }else{
        return <p>hello</p>
      }
    });
  }

  const options = {
    axisY: {
      includeZero: true,
      gridThickness: 0,
    },

    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line",
        color: "#264b96",
        dataPoints,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Comparison;
