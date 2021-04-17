class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(20)
    text ("Game Start", 100,100)
    Player.getPlayerInfo()
    if(allPlayers!== undefined){
      var yPosition= 130
      for(var plr in allPlayers){
      yPosition=yPosition+20
      text(allPlayers[plr].name+" : "+ allPlayers[plr].distance, 120,yPosition)
    }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance=player.distance+50
      player.update
    }

  }
}
