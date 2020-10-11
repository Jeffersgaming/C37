class Game {
    constructor() {
    
    }
    getState() {
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state) {
        database.ref("/").update({
            gameState:state
        })

    }
    async start() {
      if(gameState===0) {
          player = new Player();
          var playercountref = await database.ref("playerCount").once("value")
          if(playercountref.exists()){
              playerCount = playercountref.val();
              player.getCount()
          }
          player.getCount();
          form = new Form();
          form.display();
      }
      car1 = createSprite(100, 200);
      car2 = createSprite(300, 200);
      car3 = createSprite(500, 200);
      car4 = createSprite(700, 200);
      cars = [car1, car2, car3, car4]
    }
    play() {
        form.hide()
        text("Gamestart", 120, 100)
        Player.getplayerinfo();
        if(allplayers!==undefined) {
            //var displaypos = 120;
            var index = 0, x = 0, y;
            for (var plr in allplayers) {
                index++;
                x=x+200;
                y = displayHeight-allplayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index) {
                   cars[index-1].shapeColor="red";
                   camera.position.x=displayWidth/2;
                   camera.position.y=cars[index-1].y   
                }
                //else
                //fill("black")

                //displaypos+=20
                //text(allplayers[plr].name+" " + allplayers[plr].distance,120,displaypos)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null) {
            player.distance+=10;
            player.update();

        }
        drawSprites();
    }
}