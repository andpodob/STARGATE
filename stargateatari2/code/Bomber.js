
var Bomber = function (cords) {
    this.type = "bomber";
    this.cords = new Cords(cords.x, cords.y);
    this.rectangle = new Rectangle(cords.x, cords.y, 37, 35);
    this.speed_x = 5;
    this.speed_y = 3;
    this.direction = (getRandomInt(0, 100)%2 == 0)?"right":"left"; //jeżeli wylosowana liczba jest parzysta to leci w prawo
    this.time_from_last_drop = 0;
    this.alive = true;

    this.update = function (eventList) {
        //ruch poziomy
        if(this.direction == "right"){
            this.cords.x += this.speed_x;
        }else {
            this.cords.x -= this.speed_x;
        }

        //falujacy ruch pionowy
        if(0.3*canvas_height > this.cords.y){
            this.speed_y = Math.abs(this.speed_y);
        }else if(0.7*canvas_height < this.cords.y){
            this.speed_y = -Math.abs(this.speed_y);
        }
        this.cords.y += this.speed_y;
        //zrzucanie min
        var time_now = new Date().getTime();

        if(Math.abs(time_now - this.time_from_last_drop) > 10000){
            this.drop_mine();
            this.time_from_last_drop = new Date().getTime();
        }

        this.rectangle.x = this.cords.x;
        this.rectangle.y = this.cords.y;
    }

    this.drop_mine = function () {
        var mine = new Mine(new Cords(this.cords.x, this.cords.y));
        Model.objectList.push(mine);
        Virtual_background.objectList.push(mine)
    }

}