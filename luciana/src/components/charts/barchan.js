import React from "react"; 
import Chart from "react-apexcharts"; 

const BarChart = ({ xAxisCategories,data,height,}) => {
const chartData = {
    options: {
        xaxis: {
            categories: xAxisCategories 

            }
        }
    }
    return (
        <Chart
          options={chartData.options}
          series={data}
          type="bar" 
          height={height}
        />           
    );
}; 


export default BarChart
