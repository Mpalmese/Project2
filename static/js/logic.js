// Create a map object
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoibXBhbG1lc2UiLCJhIjoiY2p2ZnJkZGp4MDAxZTRjcGFkN3d6N3l1ZSJ9.lv5kgB8CdkeBc1osf52juA").addTo(myMap);

  // Country data
var incomedata = incomedata;
var lifedata = lifedata;


  
  for (var i=0; i < incomedata.length; i++) {
    var color = "";
    if (incomedata[i].Income_Level === 'Low income') {
        color = "red";
    }
    else if (incomedata[i].Income_Level === 'Lower middle income') {
        color = "chocolate";
    }
    else if (incomedata[i].Income_Level === 'Low & middle income') {
        color = "goldenrod";
    }
    else if (incomedata[i].Income_Level === 'Middle Income') {
        color = "yellow";
    }
    else if (incomedata[i].Income_Level === 'Upper middle income') {
        color = "yellowgreen";
    }
    else if (incomedata[i].Income_Level === 'High income') {
        color = 'green';
    }
    else {
        color = "white";
    }
  
    if (lifedata[i].Yr2017 != ".."){

  L.circle([incomedata[i].Lat, incomedata[i].Lng], {
      fillOpacity: 0.75,
      color: color,
      fillColor: color,
      radius: lifedata[i].Yr2017 * 2000
  }).bindPopup("<h1>" + incomedata[i].Country_Name + "</h1> <hr> <h3>Life Expectancy: " + lifedata[i].Yr2017 + "</h3> <br> <h3>Income Level: " + incomedata[i].Income_Level).addTo(myMap);
  }}


  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (myMap) {
  
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [],
          labels = ['High Income (GNI per capita > $12,055)', 'Upper Middle Income (GNI per capita $3,896 and $12,055)', 'Lower Middle Income (GNI per capita $996 - $3,895)','Low Income (GNI per capita < $995)' ];
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < labels.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(labels[i]) + '"></i> ' +
              labels[i] +  '<br>';
      }
  
      return div;
  };
  
  function getColor(d) {
      
    return d === 'Low Income (GNI per capita < $995)'   ? 'red' :
            d === 'Upper Middle Income (GNI per capita $3,896 and $12,055)' ? 'yellowgreen' :
            d === 'Lower Middle Income (GNI per capita $996 - $3,895)' ? 'chocolate' :
           'green';
                      
}

  legend.addTo(myMap);