import CanvasJSReact from "@canvasjs/react-charts";
import { useEffect, useState } from "react";
import axios from "axios";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Comparison(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/stock/getstock")
      .then((res) => setData(res.data));
  }, [setData]);

  const dataPoints = [];
  {
    data.map((e) => {
      if (e.Uniquekey === props.Uniquekey) {
        dataPoints.push({ label: e.stock, y: Number(e.sell - e.buy) });
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
