var canvas,backgroundImg,playerCount,database,form,game,player;
var gameState= 0;
var distance= 0;
var allPlayers;
var cars,car1,car2,car3,car4;
function setup(){
    database = firebase.database();
    createCanvas(displayWidth-600,displayHeight-300);
   game=new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");
    if(playerCount===4)
    {
        game.update(1)
    }
 if(gameState===1)
 {
     clear();
     game.play();
 } 
    
    
}
