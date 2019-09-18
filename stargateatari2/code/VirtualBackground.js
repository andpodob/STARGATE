
Virtual_background = {
    objectList: new Array(),

    move: function (move) {
        var i = 0;
        for(i = 0; i < this.objectList.length; i++){
            this.objectList[i].cords.x += move;
            if(this.objectList[i].cords.x > 4310){
                this.objectList[i].cords.x -= 8620;
            }
            if(this.objectList[i].cords.x < -4310){
                this.objectList[i].cords.x += 8620;
            }
            if(this.objectList[i].rectangle != undefined){
                this.objectList[i].rectangle.x = this.objectList[i].cords.x;
            }
        }
    }
}
