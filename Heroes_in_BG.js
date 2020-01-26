/* console.log(dataOriginal[1]['HeroID']);
var test = dataOriginal[1]['BanRate']; */

/* almost constant variables, initialization, functions*/
var numHero = 88;
var numShowingHero = 25;
var dataMap = [];
var dataMapRole = [];
var body = document.querySelector("body");
var tbl = document.querySelector("#tblGood");
var numSizeWin = 7;
var numSizePlay = 0.33;
var sltMap = document.querySelector("#sltMap");
var ipRatio = document.querySelector("#rgRatio");
var stdWinRate = 3.6;
var stdGame = 19;

function compaireFunc(key) {
  return function(a, b) {
    return b[key] - a[key];
  };
}

function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
    i,
    k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
}

function updatePage() {
  var currentMap = document.querySelector("#sltMap").value;
  var ratio = document.querySelector("#rgRatio").value;

  var idxStart = currentMap * numHero;
  var idxEnd = currentMap * numHero + numHero;
  dataMap = dataOriginal.slice(idxStart, idxEnd);

  for (var i = 0; i < 88; i++) {
    dataMap[i]["Point"] =
      (100 - ratio) * (dataMap[i]["WinRate"] / 50 / stdWinRate) +
      ratio *
        ((((dataMap[i]["PlayRate"] + dataMap[i]["BanRate"]) / 100) * 88) /
          16 /
          stdGame);
  }

  var dataSorted = dataMap.sort(compaireFunc("Point"));
  var dataSliced = dataSorted.slice(0, numShowingHero);

  console.log(ratio);

  if (tbl.rows.length > 1) {
    for (var i = 0; i < numShowingHero; i++) {
      tbl.deleteRow(1);
    }
  }

  for (var i = 0; i < numShowingHero; i++) {
    var row = tbl.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var rank = i + 1;
    cell1.innerHTML = "#" + rank;
    cell2.innerHTML =
      "<img src=" + "heroImages/" + dataSliced[i]["HeroID"] + ".png" + ">";
    cell3.innerHTML = dataSliced[i]["Difficulty"];

    console.log(dataSliced[3]["Difficulty"]);

    var Rect = document.createElement("div");
    var RectWidth = (dataSliced[i]["WinRate"] - 40) * numSizeWin;
    var RectHeight =
      (dataSliced[i]["PlayRate"] + dataSliced[i]["BanRate"]) * numSizePlay;
    Rect.style =
      "width:" +
      RectWidth +
      "px;height:" +
      RectHeight +
      "px; background: linear-gradient(200deg, rgba(105,245,168,1) 0%, rgba(17,226,97,1) 40%, rgba(17,226,97,1) 100%); ";
    /* followings don't work
        Rect.style.width = RectWidth + "px;" ;
        Rect.style.height = RectHeight + "px;" ;
        Rect.setAttribute("class", "boxWG");
        */
    cell4.appendChild(Rect);

    var txtGames = (100 / dataSliced[i]["PlayRate"]).toFixed(1);
    var txtWinRate = dataSliced[i]["WinRate"].toFixed(1);
    cell5.innerHTML = txtWinRate + "%" + "<br> 1 in " + txtGames;

    var txtPoint = dataSliced[i]["Point"].toFixed(1);
    cell6.innerHTML = txtPoint;
  }
}

updatePage();
sltMap.addEventListener("change", updatePage);
ipRatio.addEventListener("change", updatePage);
