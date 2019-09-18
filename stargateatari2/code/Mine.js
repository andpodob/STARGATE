
var Mine = function (cords) {
    this.type = "mine";
    this.cords = new Cords(cords.x, cords.y);
    this.rectangle = new Rectangle(cords.x, cords.y, 73, 47);
    this.creation_time = new Date().getTime();
    this.alive = true;

    this.update = function (eventList) {
        var time_now = new Date().getTime();
        if(Math.abs(this.creation_time - time_now) > 30000){
            this.alive = false;
        }
    }
}