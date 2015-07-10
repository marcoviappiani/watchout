// start slingin' some d3 here.

// init
  // generate X number of enemies
  // picks a number of enemies depending on size of svg 

  //  var enemy ={Xpos Ypos Xspeed Yspeed}
  // setInterval to move all enemies around
// <circle cx="20" cy="20" r="20" fill="red" transform="translate(100 300)"></circle> //cx cy random init

var gameOptions = {height: 450,
                   width: 700,
                   numOfEnemies: 30,
                   enemyRadiusSize: 10}

var enemies = [];

var populateEnemies = function(){
  for (var i = 0; i < gameOptions.numOfEnemies; i++){
    enemies.push(makeRandomEnemy());
  }
}

var makeRandomEnemy = function(){
  var xPos = getRandomInt(50, gameOptions.width - 50);
  var yPos = getRandomInt(50, gameOptions.height - 50);
  var radius = gameOptions.enemyRadiusSize;
  return {
    xPos: xPos,
    yPos: yPos,
    radius: radius
  }
}

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var gameArea = d3.select(".gameArea")
    .append('svg:svg')
    .attr('width', gameOptions.width)
    .attr('height', gameOptions.height);


populateEnemies();
console.log(enemies);


