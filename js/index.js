/*******************************************************************************
index.js
*******************************************************************************/

function onLoad() {
  d3.selectAll(".click-zone")
  .on("mouseover", function() {
    d3.select(this).style('background-color', '#555');
  })
  .on("mouseout", function() {
    d3.select(this).style('background-color', '#333');
  });

  var dropArea = d3.select("body")
  .call(dnd.dropper()
    .on("dragover", function() {
      dropArea.classed("active", true);
      d3.select("#content").style("display", "none");
      d3.select("#drop-feedback").style("display", "block");
    })
    .on("drop", function() {
      dropArea.classed("active", false);
      d3.select("#content").style("display", "block");
      d3.select("#drop-feedback").style("display", "none");
    })
    .on("read", function(files) {
      console.log("hehehe");
    }));


  d3.select("#upload-data").on("click", function() {
    document.getElementById("loadfile").click();
  });

  d3.select("#loadfile").on("change", function() {
    var f = d3.event.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        contents = e.target.result;
        dataLoaded(contents);
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  });

  d3.select("#back").on("click", function() {
    location.reload();
  });

  d3.select("#open-vis").on("click", function() {
    sessionStorage.setItem("datatype", "custom");
    sessionStorage.setItem("data", contents);
    window.location = "aqua.html";
  });
}

function dataLoaded(d) {
  data = d3.csv.parseRows(d)
  .filter(function(d, i) { 
    return i < 2;
  });
  
  //Remove all children from content
  d3.select("#content").html("");

  //show the back and forward buttons
  d3.select("#progress-buttons").style('display', 'block');
  d3.select("#wrapper").style("height", "800px");
  d3.select("#content").style("height", "550px");
  
  //Create new svg element and populate with the data from the file
  svg = d3.select("#content").append("svg")
  .attr('width', 600)
  .attr('height', 500)
  .style('background-color', '#000')
  .style('margin', 'auto')
  .style('display', 'block');

  var temp = 0;
  for (var c = 0; c < 2; c++) {
    var l = data[c].length > 8 ? 8 : data[c].length;
    
    svg.append("text")
    .attr('class', 'sets')
    .attr('x', 25)
    .attr('y', 80 + temp * 20)
    .text("⇒");
    
    svg.append("text")
    .attr('class', 'sets')
    .attr('x', 50)
    .attr('y', 80 + temp * 20)
    .text(data[c][0]);

    svg.selectAll("text.elements"+c)
    .data(data[c].filter(function(d, i) { 
      return i > 0 && i < l;
    }))
    .enter()
    .append("text")
    .attr('class', 'elements'+c)
    .attr('x', 600)
    .attr('y', function(d, i) {
      return 80 + temp * 20 + i * 20;
    })
    .text(function(d) {
      return d;
    });

    svg.append("text")
    .attr('class', 'elements'+c)
    .attr('x', 600)
    .attr('y', 80 + temp * 20 + (l - 1) * 20)
    .text("...");

    temp += l + 2;
  }

  svg.append("text")
  .attr('class', 'sets')
  .attr('x', 25)
  .attr('y', 80 + temp * 20)
  .text("⇒");

  svg.append("text")
  .attr('class', 'sets')
  .attr('x', 50)
  .attr('y', 80 + temp * 20)
  .text("...");

  svg.append("text")
  .attr('class', 'elements0')
  .attr('x', 600)
  .attr('y', 80 + temp * 20)
  .text("...");

  svg.append("text").text("Sets")
  .attr('class', 'heading')
  .attr('x', 50)
  .attr('y', 50);

  svg.append("text").text("Elements")
  .attr('class', 'heading')
  .attr('x', 600)
  .attr('y', 50)
  .style('text-anchor', 'end');
}

