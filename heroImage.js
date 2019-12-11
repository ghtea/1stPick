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
for (var i = 1; i<entireRank+1; i++ ){
    var formattedNumRank = ("0" + numRank).slice(-2);
    addHero("#dRank"+ formattedNumRank);
}

function addHero(idCurrentRank) {
	var currentDiv = document.querySelector(idCurrentRank);
	currentDiv.style = "position: relative; height: 150px;"
	
	
	var newBadge = document.createElement("div");
	newBadge.style = "width:" + 80 + "px;height:" + 80 + "px; border-radius: 10%; background:#4af800; position: absolute; top:18px;  z-index: 9;"
	currentDiv.appendChild(newBadge);

	
	var newImage = document.createElement("img");
	newImage.src = "heroImages/hero01.jpg";
	newImage.style = "border: 8px solid #170039; border-radius: 15%; width: 100px; height = 100px; position: absolute; top:0; left:50px; z-index: 10;";
	
	// belows don't work...
	//newImage.style.boxShadow = "1px 1px 8px 50px #ffffff;";
	currentDiv.appendChild(newImage);


var www = 40;

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


var test = rows[0]
var divTest = document.querySelector("#divTest");
divTest.innerHTML="<p>" + test + "</p>";






