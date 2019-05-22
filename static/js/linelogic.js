function buildCharts(country) {
    
    d3.json(`/api/v1.0/${country}`).then(function(response) {
    
    var years = ['1999', '2000', '2001', '2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017']
    var life_ex = [];
    var country_name = [];
    var incomelvl = [];
    life_ex.push(response[0].Yr1999);
    life_ex.push(response[0].Yr2000);
    life_ex.push(response[0].Yr2001);
    life_ex.push(response[0].Yr2002);
    life_ex.push(response[0].Yr2003);
    life_ex.push(response[0].Yr2004);
    life_ex.push(response[0].Yr2005);
    life_ex.push(response[0].Yr2006);
    life_ex.push(response[0].Yr2007);
    life_ex.push(response[0].Yr2008);
    life_ex.push(response[0].Yr2009);
    life_ex.push(response[0].Yr2010);
    life_ex.push(response[0].Yr2011);
    life_ex.push(response[0].Yr2012);
    life_ex.push(response[0].Yr2013);
    life_ex.push(response[0].Yr2014);
    life_ex.push(response[0].Yr2015);
    life_ex.push(response[0].Yr2016);
    life_ex.push(response[0].Yr2017);
    country_name.push(response[0].Country_Name);
    incomelvl.push(response[0].Income_Level);
    console.log(country_name[0]);

    var trace1 = {
        x: years,
        y: life_ex,
        type: "line",
        name: country_name[0] + " - " + incomelvl[0],
        line: {
            color: 'blue'
        }
    };

    
        d3.json('/api/v1.0/HIC').then(function(response) {
        
        var highlife_ex = [];
        
        highlife_ex.push(response[0].Yr1999);
        highlife_ex.push(response[0].Yr2000);
        highlife_ex.push(response[0].Yr2001);
        highlife_ex.push(response[0].Yr2002);
        highlife_ex.push(response[0].Yr2003);
        highlife_ex.push(response[0].Yr2004);
        highlife_ex.push(response[0].Yr2005);
        highlife_ex.push(response[0].Yr2006);
        highlife_ex.push(response[0].Yr2007);
        highlife_ex.push(response[0].Yr2008);
        highlife_ex.push(response[0].Yr2009);
        highlife_ex.push(response[0].Yr2010);
        highlife_ex.push(response[0].Yr2011);
        highlife_ex.push(response[0].Yr2012);
        highlife_ex.push(response[0].Yr2013);
        highlife_ex.push(response[0].Yr2014);
        highlife_ex.push(response[0].Yr2015);
        highlife_ex.push(response[0].Yr2016);
        highlife_ex.push(response[0].Yr2017);
        console.log(highlife_ex);
        

        var trace2 = {
            x: years,
            y: highlife_ex,
            type: "line",
            name: 'High Income',
            line: {
                color: 'green'
            }
        };
        
        
        
    
    

    
        d3.json('/api/v1.0/LIC').then(function(response) {
        
        var lowlife_ex = [];
        
        lowlife_ex.push(response[0].Yr1999);
        lowlife_ex.push(response[0].Yr2000);
        lowlife_ex.push(response[0].Yr2001);
        lowlife_ex.push(response[0].Yr2002);
        lowlife_ex.push(response[0].Yr2003);
        lowlife_ex.push(response[0].Yr2004);
        lowlife_ex.push(response[0].Yr2005);
        lowlife_ex.push(response[0].Yr2006);
        lowlife_ex.push(response[0].Yr2007);
        lowlife_ex.push(response[0].Yr2008);
        lowlife_ex.push(response[0].Yr2009);
        lowlife_ex.push(response[0].Yr2010);
        lowlife_ex.push(response[0].Yr2011);
        lowlife_ex.push(response[0].Yr2012);
        lowlife_ex.push(response[0].Yr2013);
        lowlife_ex.push(response[0].Yr2014);
        lowlife_ex.push(response[0].Yr2015);
        lowlife_ex.push(response[0].Yr2016);
        lowlife_ex.push(response[0].Yr2017);
        console.log(lowlife_ex);
        

        var trace5 = {
            x: years,
            y: lowlife_ex,
            type: "line",
            name: 'Low Income',
            line: {
                color: 'red'
            }
        };
        
        
        
    
    
        d3.json('/api/v1.0/UMC').then(function(response) {
        
        var umlife_ex = [];
        
        umlife_ex.push(response[0].Yr1999);
        umlife_ex.push(response[0].Yr2000);
        umlife_ex.push(response[0].Yr2001);
        umlife_ex.push(response[0].Yr2002);
        umlife_ex.push(response[0].Yr2003);
        umlife_ex.push(response[0].Yr2004);
        umlife_ex.push(response[0].Yr2005);
        umlife_ex.push(response[0].Yr2006);
        umlife_ex.push(response[0].Yr2007);
        umlife_ex.push(response[0].Yr2008);
        umlife_ex.push(response[0].Yr2009);
        umlife_ex.push(response[0].Yr2010);
        umlife_ex.push(response[0].Yr2011);
        umlife_ex.push(response[0].Yr2012);
        umlife_ex.push(response[0].Yr2013);
        umlife_ex.push(response[0].Yr2014);
        umlife_ex.push(response[0].Yr2015);
        umlife_ex.push(response[0].Yr2016);
        umlife_ex.push(response[0].Yr2017);
        console.log(umlife_ex);
        

        var trace3 = {
            x: years,
            y: umlife_ex,
            type: "line",
            name: 'Upper middle income',
            line: {
                color: 'yellowgreen'
            }
        };
        
        
        
    
    
        d3.json('/api/v1.0/LMC').then(function(response) {
        
        var lmlife_ex = [];
        
        lmlife_ex.push(response[0].Yr1999);
        lmlife_ex.push(response[0].Yr2000);
        lmlife_ex.push(response[0].Yr2001);
        lmlife_ex.push(response[0].Yr2002);
        lmlife_ex.push(response[0].Yr2003);
        lmlife_ex.push(response[0].Yr2004);
        lmlife_ex.push(response[0].Yr2005);
        lmlife_ex.push(response[0].Yr2006);
        lmlife_ex.push(response[0].Yr2007);
        lmlife_ex.push(response[0].Yr2008);
        lmlife_ex.push(response[0].Yr2009);
        lmlife_ex.push(response[0].Yr2010);
        lmlife_ex.push(response[0].Yr2011);
        lmlife_ex.push(response[0].Yr2012);
        lmlife_ex.push(response[0].Yr2013);
        lmlife_ex.push(response[0].Yr2014);
        lmlife_ex.push(response[0].Yr2015);
        lmlife_ex.push(response[0].Yr2016);
        lmlife_ex.push(response[0].Yr2017);
        console.log(lmlife_ex);
        

        var trace4 = {
            x: years,
            y: lmlife_ex,
            type: "line",
            name: 'Lower middle income',
            line: {
                color: 'chocolate'
            }
        };
        
        var data = [trace1, trace2, trace3, trace4, trace5];
    
        var layout = {
            title: "Life Expectancy vs Income Level",
            xaxis: {
                title: "Year"
            },
            yaxis: {
                title: "Life Expectancy",
                range: [40,90]
            }
        };

        Plotly.newPlot("line", data, layout, {responsive: true});
        });
    });
    });
    });
});
}



function init() {
    var selector = d3.select('#selDataset');

    lifedata.forEach(function(data) {
        selector
            .append("option")
            .text(data.Country_Name)
            .property("value", data.Country_Code)
    });

    
    // const firstchart = data[0].Country_Name;
    // buildCharts(firstchart);
    buildCharts('AFG');

};

function optionChanged(newdata) {
    
    buildCharts(newdata);
}

init();