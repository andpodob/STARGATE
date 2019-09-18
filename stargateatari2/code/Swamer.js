
var Swamer = function (cords, wave) {
    this.type = "swamer";
    this.cords = new Cords(cords.x, cords.y);
    this.rectangle = new Rectangle(cords.x, cords.y, 40, 18);
    this.speed_x = 10;
    this.speed_y = 10;
    this.alive_check = wave
    this.alive = true;

    this.update = function (eventList) {
        var target_x = Main_Character.cords.x;
        var target_y = Main_Character.cords.y;

        if(target_x > this.cords.x){
            this.cords.x += this.speed_x;
        }else {
            this.cords.x -= this.speed_x;
        }
        if(target_y - this.alive_check > this.cords.y){
            this.speed_y = Math.abs(this.speed_y);
        }else if(target_y + this.alive_check < this.cords.y){
            this.speed_y = -Math.abs(this.speed_y);
        }

        this.cords.y += this.speed_y;

        this.rectangle.x = this.cords.x;
        this.rectangle.y = this.cords.y;

    }

}