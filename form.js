class Form {
    constructor (){
        this.input = createInput ("Enter Name")
         this.button = createButton ('Play')
         this.Greet = createElement('h3')
    }
     hide (){
         this.Greet.hide()
         this.input.hide()
         this.button.hide()
     }

    display (){
        var title = createElement ('h2')
        title.html("Car Race")
        title.position(200,20)
       
        this.input.position(200,150)
       
        this.button.position(200,250)
        this.button.mousePressed (()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount = playerCount + 1
        player.update ()
        player.updateCount(playerCount)
       
        this.Greet.html("Hi"+ player.name)
        this.Greet.position(200,160)
        })
        
    }
}