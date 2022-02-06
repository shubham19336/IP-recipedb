anychart.onDocumentReady(function () {
    var accidents=[{day:2,hour:1,count:127},{day:4,hour:1,count:141},{day:1,hour:1,count:134},{day:5,hour:1,count:174},{day:3,hour:1,count:131},{day:6,hour:1,count:333},{day:7,hour:1,count:311},{day:2,hour:2,count:79},{day:4,hour:2,count:99},{day:1,hour:2,count:117},{day:5,hour:2,count:123},{day:3,hour:2,count:92},{day:6,hour:2,count:257},{day:7,hour:2,count:293},{day:2,hour:3,count:55},{day:4,hour:3,count:73},{day:1,hour:3,count:107},{day:5,hour:3,count:89},{day:3,hour:3,count:66},{day:6,hour:3,count:185},{day:7,hour:3,count:262},{day:2,hour:4,count:39},{day:4,hour:4,count:67},{day:1,hour:4,count:59},{day:5,hour:4,count:83},{day:3,hour:4,count:45},{day:6,hour:4,count:180},{day:7,hour:4,count:220},{day:2,hour:5,count:48},{day:4,hour:5,count:57},{day:1,hour:5,count:73},{day:5,hour:5,count:76},{day:3,hour:5,count:72},{day:6,hour:5,count:168},{day:7,hour:5,count:199},{day:2,hour:6,count:129},{day:4,hour:6,count:102},{day:1,hour:6,count:129},{day:5,hour:6,count:140},{day:3,hour:6,count:117},{day:6,hour:6,count:148},{day:7,hour:6,count:193},{day:2,hour:7,count:314},{day:4,hour:7,count:284},{day:1,hour:7,count:367},{day:5,hour:7,count:270},{day:3,hour:7,count:310},{day:6,hour:7,count:179},{day:7,hour:7,count:192},{day:2,hour:8,count:806},{day:4,hour:8,count:811},{day:1,hour:8,count:850},{day:5,hour:8,count:609},{day:3,hour:8,count:846},{day:6,hour:8,count:208},{day:7,hour:8,count:144},{day:2,hour:9,count:1209},{day:4,hour:9,count:1214},{day:1,hour:9,count:1205},{day:5,hour:9,count:960},{day:3,hour:9,count:1073},{day:6,hour:9,count:286},{day:7,hour:9,count:152},{day:2,hour:10,count:750},{day:4,hour:10,count:808},{day:1,hour:10,count:610},{day:5,hour:10,count:655},{day:3,hour:10,count:684},{day:6,hour:10,count:482},{day:7,hour:10,count:253},{day:2,hour:11,count:591},{day:4,hour:11,count:593},{day:1,hour:11,count:573},{day:5,hour:11,count:695},{day:3,hour:11,count:622},{day:6,hour:11,count:676},{day:7,hour:11,count:326},{day:2,hour:12,count:653},{day:4,hour:12,count:679},{day:1,hour:12,count:639},{day:5,hour:12,count:736},{day:3,hour:12,count:687},{day:6,hour:12,count:858},{day:7,hour:12,count:402},{day:2,hour:13,count:738},{day:4,hour:13,count:749},{day:1,hour:13,count:631},{day:5,hour:13,count:908},{day:3,hour:13,count:888},{day:6,hour:13,count:880},{day:7,hour:13,count:507},{day:2,hour:14,count:792},{day:4,hour:14,count:847},{day:1,hour:14,count:752},{day:5,hour:14,count:1033},{day:3,hour:14,count:942},{day:6,hour:14,count:983},{day:7,hour:14,count:636},{day:2,hour:15,count:906},{day:4,hour:15,count:1031},{day:1,hour:15,count:954},{day:5,hour:15,count:1199},{day:3,hour:15,count:1014},{day:6,hour:15,count:1125},{day:7,hour:15,count:712},{day:2,hour:16,count:1101},{day:4,hour:16,count:1158},{day:1,hour:16,count:1029},{day:5,hour:16,count:1364},{day:3,hour:16,count:1068},{day:6,hour:16,count:1062},{day:7,hour:16,count:736},{day:2,hour:17,count:1303},{day:4,hour:17,count:1426},{day:1,hour:17,count:1270},{day:5,hour:17,count:1455},{day:3,hour:17,count:1407},{day:6,hour:17,count:883},{day:7,hour:17,count:666},{day:2,hour:18,count:1549},{day:4,hour:18,count:1653},{day:1,hour:18,count:1350},{day:5,hour:18,count:1502},{day:3,hour:18,count:1507},{day:6,hour:18,count:830},{day:7,hour:18,count:652},{day:2,hour:19,count:998},{day:4,hour:19,count:1070},{day:1,hour:19,count:787},{day:5,hour:19,count:1027},{day:3,hour:19,count:1019},{day:6,hour:19,count:575},{day:7,hour:19,count:519},{day:2,hour:20,count:661},{day:4,hour:20,count:756},{day:1,hour:20,count:596},{day:5,hour:20,count:730},{day:3,hour:20,count:648},{day:6,hour:20,count:494},{day:7,hour:20,count:486},{day:2,hour:21,count:431},{day:4,hour:21,count:539},{day:1,hour:21,count:430},{day:5,hour:21,count:509},{day:3,hour:21,count:457},{day:6,hour:21,count:443},{day:7,hour:21,count:421},{day:2,hour:22,count:352},{day:4,hour:22,count:428},{day:1,hour:22,count:362},{day:5,hour:22,count:462},{day:3,hour:22,count:390},{day:6,hour:22,count:379},{day:7,hour:22,count:324},{day:2,hour:23,count:329},{day:4,hour:23,count:381},{day:1,hour:23,count:293},{day:5,hour:23,count:393},{day:3,hour:23,count:313},{day:6,hour:23,count:374},{day:7,hour:23,count:288},{day:2,hour:24,count:211},{day:4,hour:24,count:249},{day:1,hour:24,count:204},{day:5,hour:24,count:417},{day:3,hour:24,count:211},{day:6,hour:24,count:379},{day:7,hour:24,count:203}];
    var days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        times = d3.range(24);
    
    var margin = {
        top: 170,
        right: 50,
        bottom: 70,
        left: 50
    };
    
    var width = Math.max(Math.min(window.innerWidth, 1000), 500) - margin.left - margin.right - 20,
        gridSize = Math.floor(width / times.length),
        height = gridSize * (days.length+2);
    
    //SVG container
    var svg = d3.select('#heat_map')
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    //Reset the overall font size
    var colorScale = d3.scale.linear()
        .domain([0, d3.max(accidents, function(d) {return d.count; })/2, d3.max(accidents, function(d) {return d.count; })])
        .range(["#FFFFDD", "#3E9583", "#1F2D86"])
        //.interpolate(d3.interpolateHcl);
    
    var dayLabels = svg.selectAll(".dayLabel")
        .data(days)
        .enter().append("text")
        .text(function (d) { return d; })
        .attr("x", 0)
        .attr("y", function (d, i) { return i * gridSize; })
        .style("text-anchor", "end")
        .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
        .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });
    
    var timeLabels = svg.selectAll(".timeLabel")
        .data(times)
        .enter().append("text")
        .text(function(d) { return d; })
        .attr("x", function(d, i) { return i * gridSize; })
        .attr("y", 0)
        .style("text-anchor", "middle")
        .attr("transform", "translate(" + gridSize / 2 + ", -6)")
        .attr("class", function(d, i) { return ((i >= 8 && i <= 17) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });
    
    var heatMap = svg.selectAll(".hour")
        .data(accidents)
        .enter().append("rect")
        .attr("x", function(d) { return (d.hour - 1) * gridSize; })
        .attr("y", function(d) { return (d.day - 1) * gridSize; })
        .attr("class", "hour bordered")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .style("stroke", "white")
        .style("stroke-opacity", 0.6)
        .style("fill", function(d) { return colorScale(d.count); });
    
    //Append title to the top

    
    //Append credit at bottom
    svg.append("text")
        .attr("class", "credit")
        .attr("x", width/2)
        .attr("y", gridSize * (days.length+1) + 80)
        .style("text-anchor", "middle")
        .text("Based on Miles McCrocklin's Heatmap block");
    var countScale = d3.scale.linear()
        .domain([0, d3.max(accidents, function(d) {return d.count; })])
        .range([0, width])
    
    //Calculate the variables for the temp gradient
    var numStops = 10;
    countRange = countScale.domain();
    countRange[2] = countRange[1] - countRange[0];
    countPoint = [];
    for(var i = 0; i < numStops; i++) {
        countPoint.push(i * countRange[2]/(numStops-1) + countRange[0]);
    }//for i
    
    //Create the gradient
    svg.append("defs")
        .append("linearGradient")
        .attr("id", "legend-traffic")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "100%").attr("y2", "0%")
        .selectAll("stop") 
        .data(d3.range(numStops))                
        .enter().append("stop") 
        .attr("offset", function(d,i) { 
            return countScale( countPoint[i] )/width;
        })   
        .attr("stop-color", function(d,i) { 
            return colorScale( countPoint[i] ); 
        });
    
    ///////////////////////////////////////////////////////////////////////////
    ////////////////////////// Draw the legend ////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    
    var legendWidth = Math.min(width*0.8, 400);
    //Color Legend container
    var legendsvg = svg.append("g")
        .attr("class", "legendWrapper")
        .attr("transform", "translate(" + (width/2) + "," + (gridSize * days.length + 40) + ")");
    
    //Draw the Rectangle
    legendsvg.append("rect")
        .attr("class", "legendRect")
        .attr("x", -legendWidth/2)
        .attr("y", 0)
        //.attr("rx", hexRadius*1.25/2)
        .attr("width", legendWidth)
        .attr("height", 10)
        .style("fill", "url(#legend-traffic)");
        
    //Append title
    legendsvg.append("text")
        .attr("class", "legendTitle")
        .attr("x", 0)
        .attr("y", -10)
        .style("text-anchor", "middle")
        .text("Number of Accidents");
    
    //Set scale for x-axis
    var xScale = d3.scale.linear()
         .range([-legendWidth/2, legendWidth/2])
         .domain([ 0, d3.max(accidents, function(d) { return d.count; })] );
    
    //Define x-axis
    var xAxis = d3.svg.axis()
          .orient("bottom")
          .ticks(5)
          //.tickFormat(formatPercent)
          .scale(xScale);
    
    //Set up X axis
    legendsvg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (10) + ")")
        .call(xAxis);
    });