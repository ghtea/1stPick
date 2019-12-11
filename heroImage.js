
var widthEntire = window.screen.width * window.devicePixelRatio;
var widthContent = 0;


if (widthEntire > 700) {
	widthContent = 700;
} else {
	widthContent = widthEntire;
};


var body = document.querySelector("body");


addHero("#rank01");
addHero("#rank02");

function addHero(rankNum) {
	var currentDiv = document.querySelector(rankNum);
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


	var newRect = document.createElement("div");
	newRect.style = "width:" + Hero.BG.BG01.win * 10 + "px;height:" +  Hero.BG.BG01.play * 5 + "px; background:#1cd93c; position: absolute; left: 90px; top:18px;  z-index: 1;"
	currentDiv.appendChild(newRect);
	
}








