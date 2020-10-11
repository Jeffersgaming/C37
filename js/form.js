class Form{
    constructor() {
    this.title = createElement("h2");
    this.Input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h3");
    }
    hide() {
    this.greeting.hide();
    this.Input.hide();
    this.button.hide();
    }
    display() {
        this.title.html("CarRacing Game");
        this.title.position(displayWidth/2-50, 50);
        this.Input.position(displayWidth/2-50, displayHeight/2-40);
        this.button.position(displayWidth/2+40, displayHeight/2);
        this.button.mousePressed(()=>{
            this.Input.hide();
            this.button.hide();
            player.name = this.Input.value();
            playerCount++;
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)  
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2-50, displayHeight/4);  
        })
    }
}