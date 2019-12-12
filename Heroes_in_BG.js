/* load data */
var rows;
d3.csv("data/Heroes - Map - Sheet1.csv", function(loadedRows) {
  rows = loadedRows;
  doSomethingWithRows();
});



function doSomethingWithRows() {
  // do something with rows
}



var widthEntire = window.screen.width * window.devicePixelRatio;
var widthContent = 0;

if (widthEntire > 720) {
	widthContent = 720;
} else {
	widthContent = widthEntire;
};


var body = document.querySelector("body");


var entireRank = 10;
// ex addHero("#dRank03")
for (var i = 1; i <= entireRank; i++ ) {
    var formattedNumRank = ("0" + i ).slice(-2);
    addHero("#dRank"+ formattedNumRank);
}

function addHero(idCurrentRank) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "#1";
    cell2.innerHTML = "<img src='heroImages/hero02.jpg'>";

    

var Hero = {
	ID: "who",
    imgUrl: "",
	releaseNum: 0,
	role: "Healer",
	BG: {
		BG01: {
			win: 53.0,
			play: 10.0,
			ban: 10,
			rmPoint: 0
		}
	}
};

    
    var numSizeWin = 8;
    var numSizePlay = 5;

	var newRect = document.createElement("div");
	newRect.style = "width:" + Hero.BG.BG01.win * numSizeWin + "px;height:" +  Hero.BG.BG01.play * numSizePlay + "px; background:#1cd93c; position: absolute; left: 90px; top:18px;  z-index: 1;"
	currentDiv.appendChild(newRect);
	
}


var test = rows[0];
var divTest = document.querySelector("#divTest");
var pTest = document.querySelector("#pTest");
pTest.innerHTML= test;
divTest.style = "position: relative; height: 150px;"






