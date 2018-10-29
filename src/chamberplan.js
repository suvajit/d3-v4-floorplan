
d3.floorplan.chamberplan = function() {
    
    function createrect(){
            return this;
        }

    createrect.drawchamber = function(svg1,data,rw,rh,rx,ry) {

            var width = rw;
            var height = rh;
            var x = rx;
            var y =ry;


       const abc = svg1 //Binding the DOM SVG Element with d3
                    .data(data)   //Binding the {data}
                    .append("g")  //To keep multiple parts in one group
                    .attr("width","auto")
                    .attr("height","auto")

            abc
                .append("rect")  //Adding Rectangle which displays the {color} and {build percentage(%)}
                .style("fill",function (d){ return d[1]})
                .style("fill-opacity",.35)
                .attr("x",x) //Getting X coordinates from Json
                .attr("y",y) //Getting Y coordinates from Json
                .attr("width",width+3)
                .attr("height",height+3)
            //Rectangle 1
            abc
                .append("rect")  //Adding Rectangle which displays the {color} and {build percentage(%)}
                .style("fill",function (d){ return d[1]})
                .attr("x",x) //Getting X coordinates from Json
                .attr("y",y) //Getting Y coordinates from Json
                .attr("width",width)
                .attr("height",height-height/4)


            abc // Adding a text to display the build percentage in Rectangle 1
                .append("text")
                .attr("x",x+(width/3))
                .attr("y",y+(height/2))
                .attr("font-size","15px")
                .text(function (d){ return d[0]+"%"})

            //Rectangle 2
            abc
                .append("rect") //Adding  Rectangle which displays the {Chamber number}
                .style("fill","yellow")
                .attr("x",x)
                .attr("y",y+height-height/4)
                .attr("width",width)
                .attr("height",height/4)

            abc
                .append("text") // Adding  text to display the {chamber Number}  in Rectangle 2
                .attr("x",x+(width/3))
                .attr("y",y+(height-height/4)+10)
                .text(function (d){ return d[2]})
                .attr("font-size","11px")
            

            }
    return createrect;
};

d3.floorplan.chamberplan.version = "0.1.0";