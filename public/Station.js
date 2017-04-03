var Station = function(stationInfo){
  this.name = stationInfo.name;
  this.mode = stationInfo.mode;
  this.line = stationInfo.line;
  this.currentLocation = stationInfo.currentLocation;
  this.direction = stationInfo.direction;
  this.timeTo = stationInfo.timeTo;
};

Station.prototype = {
  getHtml: function(){
    var wrapper = this.getDivWrapper();
    var name = this.getNameSection();
    var mode = this.getModeSection();
    var line = this.getLineSection();
    var location = this.getLocationSection();
    var direction = this.getDirectionSection();
    var timeTo = this.getTimeToSection();

    wrapper.appendChild(name);
    wrapper.appendChild(mode);
    wrapper.appendChild(line);
    wrapper.appendChild(location);
    wrapper.appendChild(direction);
    wrapper.appendChild(timeTo);

    return wrapper;

    },
    getDivWrapper: function(){
      return document.createElement('div');
    },
    getNameSection: function(){
      var h2 = document.createElement('h2');
      h2.innerText = this.name;
      return h2;
    },
    getModeSection: function(){
      var li1 = document.createElement('li');
      li1.innerText = this.mode;
      li1.setAttribute("class", "desc");
      
      return li1;
    },    
    getLineSection: function(){
      var li2 = document.createElement('li');
      li2.innerText = this.line;
      return li2;
    },
    getLocationSection: function(){
      var li3 = document.createElement('li');
      li3.innerText = this.currentLocation;
      return li3;
    },
    getDirectionSection: function(){
      var li4 = document.createElement('li');
      li4.innerText = this.direction;
      return li4;
    },
    getTimeToSection: function(){
      var li5 = document.createElement('li');
      li5.innerText = this.timeTo;
      return li5;
    }





    // var wrapper = document.createElement('div');

    // var h2 = document.createElement('h2');
    // h2.innerText = this.name;

    // var ul = document.createElement('ul');

    // var modeLi = document.createElement('li');
    // modeLi.innerText = this.mode;

    // var modeSpan = document.createElement('span');
    // modeSpan.innerText = "Mode: ";

    // var lineLi = document.createElement('li');
    // lineLi.innerText = "Line: " + this.line;

    // var currentLocationLi = document.createElement('li');
    // currentLocationLi.innerText = "Current location: " + this.currentLocation;

    // var directionLi = document.createElement('li');
    // directionLi.innerText = "Direction: " + this.direction;

    // var timeToLi = document.createElement('li');
    // timeToLi.innerText = "Time to destination: " + this.timeTo;


    // ul.appendChild(modeLi);
    // ul.appendChild(modeSpan);

    // ul.appendChild(lineLi);
    // ul.appendChild(currentLocationLi);
    // ul.appendChild(directionLi);
    // ul.appendChild(timeToLi);

    // wrapper.appendChild(h2);
    // wrapper.appendChild(ul);

    // return wrapper;
  // }
};