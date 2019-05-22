import React from "react"; 
import Chart from "react-apexcharts"; 
import lifedata from "../../utils/lifedata";



const BubbleChart = ({ xAxisCategories,data,height,}) => {
    const chartData = {
        options: {
            xaxis: {
                categories: xAxisCategories
                },

            title: {
            text: 'Life Spectancy vs Income level in the world',
            
                  },

            yaxis: {
            max: 90,
            min: 40,
 
                },
                 
            }
        
        }
        return (
            <Chart
              options={chartData.options}
              series={data}
              type="bubble" 
              height={height}
            />           
        );
    };   
    
    export default BubbleChart 