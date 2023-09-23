import React, { useEffect, useRef } from "react";
import * as echarts from "echarts"



function BarChart() {
  const chartRef = useRef(null);
  const myChart = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      myChart.current = echarts.init(chartRef.current);

      const options = {
        title: {
          text: "Sample Bar Chart",
        },
        xAxis: {
          type: "category",
          data: ["Category A", "Category B", "Category C", "Category D", "Category E"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: "bar",
          },
        ],
      };

      myChart.current.setOption(options);
    }

    // Clean up the chart when the component unmounts
    return () => {
      if (myChart.current) {
        myChart.current.dispose();
      }
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }}></div>;
}

export default BarChart;
