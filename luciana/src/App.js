import React from "react";
import "./App.css";
import BubbleChart from "./components/charts/BubbleChart";
import incomedata from "./utils/incomedata";
import lifedata from "./utils/lifedata";

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  console.log("series", series);
  return series;
}

function App() {
  // console.log("incomedata", incomedata);
  // console.log("lifedata", lifedata);

  const firstLifeData = lifedata[0];
  const { Country_Code, Country_Name, ...rest } = firstLifeData;
  const categories = Object.keys(rest).map($0 => $0.replace("Yr", ""));

  // console.log("rest", rest);

  const lifeExpectancyQuantityPerYear = {};

  lifedata.forEach($0 => {
    const { Country_Code, Country_Name: countryName, ...rest } = $0;

    Object.keys(rest).forEach(yearKey => {
      if (rest[yearKey] !== "..") {
        if (!lifeExpectancyQuantityPerYear[yearKey]) {
          lifeExpectancyQuantityPerYear[yearKey] = {};
        }

        const value = Math.floor(rest[yearKey]);

        if (!lifeExpectancyQuantityPerYear[yearKey][value]) {
          lifeExpectancyQuantityPerYear[yearKey][value] = 0;
        }

        const current = lifeExpectancyQuantityPerYear[yearKey][value];
        lifeExpectancyQuantityPerYear[yearKey] = {
          ...lifeExpectancyQuantityPerYear[yearKey],
          [value]: current + 1
        };
      }
    });
  });

  console.log("lifeExpectancyQuantityPerYear", lifeExpectancyQuantityPerYear);

  return (
    <div className="App">
      <BubbleChart
        xAxisCategories={categories}
        data={[
          {
            name: Country_Name,
            data: [
              [122, 24, 62],
              [469, 17, 57],
              [188, 35, 68],
              [198, 42, 35],
              [471, 19, 56],
              [303, 13, 41],
              [606, 36, 43],
              [151, 46, 60],
              [593, 22, 38],
              [612, 60, 44],
              [234, 59, 75],
              [624, 32, 61],
              [288, 53, 41],
              [676, 11, 71],
              [51, 16, 41],
              [277, 60, 44],
              [693, 34, 62],
              [663, 56, 19],
              [565, 55, 48],
              [523, 49, 67]
            ]
          }
        ]}
        height={300}
      />
    </div>
  );
}

export default App;
