// Chamber view and create zone mode switcher functionality
$(document).ready(function(){
    $("#viewchamber").click(function(){
        $(this).text($(this).text() === 'Edit zones' ? 'view chambers' : 'Edit zones');
        $(".chamber").toggle();
    });
});

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var svg = d3.select(".zone"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    g = svg.append("g").attr("transform", "translate(32," + (height / 2) + ")"),
    map = d3.floorplan(); // initialize floor plan


const svg1 = d3.select(".chamber"),
            createrect= d3.floorplan.chamberplan();
var data = [
    [30,"red","c001","3e2dca8f-d64a-48f2-b525-30184a183323"],
    [45,"green","c002","53e86fca-ea98-490c-aca1-5747d7cbc9f7"],
    [60,"green","c003","e98439ee-ba4a-4a39-865c-09db0badf045"],
    [14,"green","c004","772bb692-c84e-47c7-98d2-cdc35639ba54"]
];
// Set data
var mapdata = {
   floors: [
      {
         id: "29dd9fe8-27b6-409a-8971-a5974b1490ab",
         name: "Floor 1",
         image: {
            url: "images/BLD36-FloorPlan_v3_outline.png",
            x: 0,
            y: 0,
            w: 960,
            h: 500
         },
         zones: [
            {
               id: "772bb692-c84e-47c7-98d2-cdc35639ba54",
               name: "OP-10",
               points: [
                  [
                     261,
                     232
                  ],
                  [
                     313,
                     232
                  ],
                  [
                     313,
                     284
                  ],
                  [
                     261,
                     284
                  ]
               ]
            },
            {
               id: "e98439ee-ba4a-4a39-865c-09db0badf045",
               name: "OP-20",
               points: [
                  [
                     375,
                     227
                  ],
                  [
                     428,
                     227
                  ],
                  [
                     428,
                     281
                  ],
                  [
                     375,
                     281
                  ]
               ]
            },
            {
               id: "53e86fca-ea98-490c-aca1-5747d7cbc9f7",
               name: "OP-30",
               points: [
                  [
                     453,
                     227
                  ],
                  [
                     506,
                     227
                  ],
                  [
                     506,
                     283
                  ],
                  [
                     453,
                     283
                  ]
               ]
            },
            {
               id: "3e2dca8f-d64a-48f2-b525-30184a183323",
               name: "OP-70",
               points: [
                  [
                     532,
                     228
                  ],
                  [
                     586,
                     228
                  ],
                  [
                     586,
                     281
                  ],
                  [
                     532,
                     282
                  ]
               ]
            },
            {
               id: "1be2359c-e67b-423e-ae92-a6ed2125a065",
               name: "ZONE - 8adf948e-a855-463b-b1a5-1eb10519675b",
               points: [
                  [
                     378,
                     325.09375
                  ],
                  [
                     431,
                     328.09375
                  ]
               ]
            },
            {
               id: "d8ea4595-b559-4450-8907-64972eefd0c3",
               name: "OP-20",
               points: [
                  [
                     377,
                     325
                  ],
                  [
                     430,
                     325
                  ],
                  [
                     430,
                     380
                  ],
                  [
                     377,
                     380
                  ]
               ]
            },
            {
               id: "35440417-36e4-43ff-b49e-ad7cdf226b02",
               name: "OP-30",
               points: [
                  [
                     452,
                     324
                  ],
                  [
                     506,
                     324
                  ],
                  [
                     506,
                     380
                  ],
                  [
                     452,
                     380
                  ]
               ]
            },
            {
               id: "15cd1bda-e7c9-4d1b-8867-f36c3767ca17",
               name: "OP-70",
               points: [
                  [
                     534,
                     326
                  ],
                  [
                     587,
                     326
                  ],
                  [
                     587,
                     380
                  ],
                  [
                     534,
                     380
                  ]
               ]
            },
            {
               id: "428ed7a1-b998-4253-9434-59c0d4d68608",
               name: "OP-10",
               points: [
                  [
                     571,
                     84
                  ],
                  [
                     623,
                     84
                  ],
                  [
                     623,
                     139
                  ],
                  [
                     571,
                     139
                  ]
               ]
            },
            {
               id: "308639ee-527a-4341-b4e8-eea515c85222",
               name: "BAY 2",
               points: [
                  [
                     660,
                     84
                  ],
                  [
                     712,
                     84
                  ],
                  [
                     712,
                     137
                  ],
                  [
                     660,
                     137
                  ]
               ]
            },
            {
               id: "f21cdce6-13de-4073-9dae-e104db2a6213",
               name: "BAY 7",
               points: [
                  [
                     730,
                     84
                  ],
                  [
                     780,
                     84
                  ],
                  [
                     780,
                     137
                  ],
                  [
                     730,
                     137
                  ]
               ]
            }
         ],
         "sensors": []
      }
   ]
};

data.map((data) => {
    mapdata.floors[0].zones.find(function(element) {
    if(element.id==data[3])
    {
        const rectwidth = element.points[1][0] - element.points[0][0];
        const rectheight = element.points[3][1] - element.points[0][1];
        const rectX = element.points[0][0]-5;
        const rectY = element.points[0][1]-12;
        createrect.drawchamber(svg1,[data],rectwidth,rectheight,rectX,rectY);
    }  
  });
}
)

// Load Floor image layers
map.imageLayers(svg, mapdata.floors);
// Load default polygons.
map.zonePolygons(svg, mapdata.floors[0].zones);

// Load and Draw sensors
mapdata.floors[0].sensors.forEach(function(sensor){
    new map.sensorImageLayer(svg, mapdata.floors[0], sensor);
});

// Draw Zone function
var drawZone = d3.select('#poly').on('click', function () {
    var zonePolyPoints = [];
    var zone = {
        id:uuid(),
        name: "ZONE - " + uuid(),
        points: zonePolyPoints
    };
    mapdata.floors[0].zones.push(zone);
    new map.drawZonePolygon(svg, zone);
});

// Draw Sensor Image function
var drawSensor = d3.select('#sensor').on('click', function () {
    var zonePolyPoints = [];
    var sensor = {
        id:  uuid(),
        name: "Sensor - " + uuid(),
        url: "images/bluetooth_logo.png",
        x: 50,
        y: 50,
        w: 32,
        h: 32
    };
    mapdata.floors[0].sensors.push(sensor);
    new map.sensorImageLayer(svg, mapdata.floors[0], sensor);
});

// Show data
$('#mapdata').html(library.json.prettyPrint(mapdata));

// Helper to automatically refresh data
var updateMapData = d3.select('#updateMapData').on('click', function () {
    // Reacalculate all coordinate points.
    mapdata.floors[0].sensors.forEach(function(sensor) {
       var cssAttribute = $("g.sensor-"+sensor.id).css('transform');
       var matrix = cssAttribute.replace(/[^0-9\-.,]/g, '').split(',');
       sensor.x += parseInt(matrix[4]);
       sensor.y += parseInt(matrix[5]);
    });
    $('#mapdata').html(library.json.prettyPrint(mapdata));
});

// Helper to splice json array
function findAndRemove(array, property, value) {
    array.forEach(function (result, index) {
        if (result[property] === value) {
            //Remove from array
            array.splice(index, 1);
        }
    });
}

// Helper to add uuids
function uuid() {
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
        }
        uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}


// Uncomment for testing
// Draw text
// map.drawText(g, alphabet);
// Grab a random sample of letters from the alphabet, in alphabetical order.
// d3.interval(function() {
//     map.drawText(g, d3.shuffle(alphabet)
//         .slice(0, Math.floor(Math.random() * 26))
//         .sort());
// }, 1500);
