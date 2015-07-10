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
                   enemyRadiusSize: 10};

var enemies = [];

var populateEnemies = function(){
  for (var i = 0; i < gameOptions.numOfEnemies; i++){
    enemies.push(makeRandomEnemy(i));

  }
}

var makeRandomEnemy = function(key){
  var xPos = getRandomInt(50, gameOptions.width - 50);
  var yPos = getRandomInt(50, gameOptions.height - 50);
  var radius = gameOptions.enemyRadiusSize;
  return {
    xPos: xPos,
    yPos: yPos,
    radius: radius,
    key: key
  }
};

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var gameArea = d3.select(".container")
    .append('svg:svg')
    .attr('width', gameOptions.width)
    .attr('height', gameOptions.height)
    .attr('class', 'gameArea');


var update = function(data) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var currentEnemies = gameArea.selectAll('circle')
      .data(enemies, function(d){return d.key;});

  // UPDATE
  // Update old elements as needed.
  currentEnemies
      .attr("cx", function(d){return d.xPos;})
      .attr("cy", function(d){return d.yPos;});

  // ENTER
  // Create new elements as needed.
  currentEnemies.enter().append("circle")
      .attr("class", "enemy")
      .attr("fill", "red")
      .attr("cx", function(d){return d.xPos;})
      .attr("cy", function(d){return d.yPos;})
      .attr("r", function(d){return d.radius;});

// function(d) { return d; } Access elements like this...

  // ENTER + UPDATE
  // Appending to the enter selection expands the update selection to include
  // entering elements; so, operations on the update selection after appending to
  // the enter selection will apply to both entering and updating nodes.
  //currentEnemies.attr("x", function(d, i) { return i * 32; })

  // EXIT
  // Remove old elements as needed.
  // currentEnemies.exit().remove();
}

var updatePositions = function(){
  for (var i = 0; i < enemies.length; i++){
    // enemies[i].yPos = 
    // enemies[i].xPos = 
  }
  update(enemies);
}


populateEnemies();
update(enemies);

setInterval(function(){
  updatePositions();
}, 5000);
