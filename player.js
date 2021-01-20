class Player {
    constructor (){
this.name = null
this.distance = 0
this.index = null 
    }
    getCount(){
        var PcRef = database.ref('playerCount')
        PcRef.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update (){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }

static getPlayerInfo(){
var piref = database.ref('player')
piref.on("value",function(data){
    allPlayer = dala.val()
})

}




}
