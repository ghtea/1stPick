/* load data */
var rows;
d3.csv("data/Heroes - Map - Sheet1.csv", function(loadedRows) {
  rows = loadedRows;
  doSomethingWithRows();
});

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

/*
var entireRank = 10;
// ex addHero("#dRank03")
for (var i = 1; i <= entireRank; i++ ) {
    var formattedNumRank = ("0" + i ).slice(-2);
    addHero("#dRank"+ formattedNumRank);
}
*/

rowCreate();
function rowCreate() {
    var tbl = document.querySelector('#tblGood');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    
    var tbdy = document.querySelector('#tbdyGood');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.appendChild(document.createTextNode('#1'));
    tr.appendChild(td)
  
tbdy.appendChild(tr);
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}

/*
    var numSizeWin = 8;
    var numSizePlay = 5;

	var newRect = document.createElement("div");
	newRect.style = "width:" + Hero.BG.BG01.win * numSizeWin + "px;height:" +  Hero.BG.BG01.play * numSizePlay + "px; background:#1cd93c; position: absolute; left: 90px; top:18px;  z-index: 1;"
	cell3.appendChild(newRect);
	
    var test = rows[0];
    cell4.innerHTML= test;
*/






