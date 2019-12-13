/* load data */
/*
var dataHeroInfo;
d3.csv("Heroes - Map - Hero Info.csv", function(loadedRows) {
  dataHeroInfo = loadedRows;
});
*/


var Hero2 = {
	id: "who",
    name: "who",
    imgUrl: "heroImages/hero02.jpg",
	role: "which"
    /*
	mapAPwin
    mapAPplay,
    mapAPban,
    mapAPpoint
    */
};

var Hero = [];

/*
for (var i = 1; i<=88; i++) {
    Hero[i].id = dataHeroInfo[i][1] 
    Hero[i].name = dataHeroInfo[i][0] 
    Hero[i].imgUrl = dataHeroInfo[i][0] 
    Hero[i].role = dataHeroInfo[i][2] 
}
*/




/*
var widthEntire = window.screen.width * window.devicePixelRatio;
var widthContent = 0;

if (widthEntire > 720) {
	widthContent = 720;
} else {
	widthContent = widthEntire;
};
*/

var body = document.querySelector("body");

/*
var entireRank = 10;
// ex addHero("#dRank03")
for (var i = 1; i <= entireRank; i++ ) {
    var formattedNumRank = ("0" + i ).slice(-2);
    addHero("#dRank"+ formattedNumRank);
}
*/

var test = rows[0];


var tbl  = document.querySelector('#tblGood');
var tbdy = tbl.querySelector('#tbdyGood');

tbl.style.width = '100%';
tbl.setAttribute('border', '1');

rowCreate();
function rowCreate() {
    var row = tbdy.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "#1";
    cell2.innerHTML=test;
};

/*
function rowCreate() {
    var tbl = document.querySelector('#tblGood');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    
    var tbdy = document.querySelector('#tbdyGood');
    var tr = document.createElement('tr');
    
    var td1 = document.createElement('td1');
    td1.appendChild(document.createTextNode('#1'));
    tr.appendChild(td1);
    
    var td2 = document.createElement('td2');
    td2.appendChild(document.createTextNode('#1'));
    tr.appendChild(td2);
    
    var td3 = document.createElement('td3');
    td3.appendChild(document.createTextNode('#1'));
    tr.appendChild(td3);
    
    var td4 = document.createElement('td4');
    td4.appendChild(document.createTextNode('#1'));
    tr.appendChild(td4);
    
    var td5 = document.createElement('td5');
    td5.appendChild(document.createTextNode('#1'));
    tr.appendChild(td5);
  
    tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}
*/

/*
    var numSizeWin = 8;
    var numSizePlay = 5;

	var newRect = document.createElement("div");
	newRect.style = "width:" + Hero.BG.BG01.win * numSizeWin + "px;height:" +  Hero.BG.BG01.play * numSizePlay + "px; background:#1cd93c; position: absolute; left: 90px; top:18px;  z-index: 1;"
	cell3.appendChild(newRect);
	
    var test = rows[0];
    cell4.innerHTML= test;
*/







