var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function(){
  var responseString = this.responseText;
  var station = JSON.parse(responseString)[0];

  showUI(station);
};

var showUI = function(station){
  var stationInfo = {
    name: station.stationName,
    mode: station.modeName,
    line: station.lineName,
    currentLocation: station.currentLocation,
    direction: station.direction,
    timeTo: station.timeToStation
  };

  var stationItem = new Station(stationInfo);
  
  var stationDiv = document.getElementById("station");
  // stationDiv.innerHTML = "";

  stationDiv.appendChild(stationItem.getHtml());

  stationDiv.classList.add("hasContent");
};

var app = function(){
  var url = "https://api.tfl.gov.uk/line/bakerloo/arrivals/?app_id=8ac40a50&app_key=4ebc35e45d7c9e23f0c5d95a94e1f1c6";

  makeRequest(url, requestComplete);

};


window.onload = app;