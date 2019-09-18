
//konstruktor obiektow pociskow
var Projectile = function (x, y, turn) {
    this.speed_x = 50;
    this.type = "projectile";
    this.cords = new Cords(x, y);
    this.turn = turn;
    this.rectangle = new Rectangle(x, y, 453, 7);
    this.alive = true;

    this.update = function (eventList) {
        if(this.turn == "right"){
            this.cords.x += this.speed_x;
        }
        if(this.turn == "left"){
            this.cords.x -= this.speed_x;
        }
        if(this.cords.x > 2000 || this.cords.x < -2000){
            this.alive = false;
            console.log(Model.objectList.length)
            // Model.objectList.splice(Model.objectList.indexOf(this), 1);
            // Virtual_background.objectList.splice(Virtual_background.objectList.indexOf(this), 1);
        }
        this.rectangle.x = this.cords.x;
        this.rectangle.y = this.cords.y;
    }
}
