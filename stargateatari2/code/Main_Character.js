
//glowny bohater 

var Main_Character = {
    turn: "right",
    type:"starship_rigth",
    cords: new Cords(0.2*canvas_width, 0.5*canvas_height),
    rectangle: new Rectangle(0.2*canvas_width, 0.5*canvas_height, 132, 48),
    humanoid_list: new Array(),
    last_shoot_time: 0,
    speed_x: 15,
    speed_y: 15,
    score: 0,
    lives: 5,
    alive: true,

    shoot: function () {
        var date = new Date()
        var current = date.getTime();
        var projectile;
        if (Math.abs(current - this.last_shoot_time) > 100) {
            this.last_shoot_time = date.getTime();
            projectile = new Projectile(this.cords.x, this.cords.y + 20, this.turn);
            Model.objectList.push(projectile);
            Virtual_background.objectList.push(projectile);
        }
    },
    update: function (eventList) {
        var i;
        for(i = 0; i < eventList.length; i++){
            //strzalka w lewo
            if(eventList[i] == 37 && this.turn == "right"){
                this.turn = "left";
            }
            //strzalka w prawo
            if(eventList[i] == 39 && this.turn == "left"){
                this.turn = "right";
            }
            if(this.turn == "left" && eventList[i] == 37){
                Virtual_background.move(this.speed_x);
            }
            if(this.turn == "right" && eventList[i] == 39){
                Virtual_background.move(-this.speed_x);
            }
            //strzalka do gory
            if(eventList[i] == 38 && this.cords.y > 10){
                this.cords.y -= this.speed_y;
            }
            //strzalka w dol
            if(eventList[i] == 40 && this.cords.y < canvas_height*0.95){
                this.cords.y += this.speed_y;
            }
            if (eventList[i] == 32) {
                this.shoot();
            }
        }
        if(this.turn == "right" && this.cords.x > 0.2*canvas_width){
            this.cords.x -= this.speed_x;
            Virtual_background.move(-this.speed_x);
        }

        if (this.turn == "left" && this.cords.x < 0.8*canvas_width) {
            this.cords.x += this.speed_x;
            Virtual_background.move(this.speed_x);
        }

        if(this.humanoid_list.length == 0){
            this.type = this.type.substring(0,9) + this.turn;
        }else {
            this.type = this.type.substring(0,9) +"humanoid_"+this.turn;
        }

        if(this.cords.y > 0.85*canvas_height && this.humanoid_list.length > 0){
            var i;
            var humanoid;
            this.score += this.humanoid_list.length * 150;
            for(i = 0; i < this.humanoid_list.length; i++){
                humanoid = this.humanoid_list[i];
                humanoid.cords.x = humanoid.pad.cords.x + 10;
                humanoid.cords.y = humanoid.pad.cords.y - 35;
                humanoid.on_pad = true;
                humanoid.locked = false
                humanoid.taken = false;
                humanoid.speed_y = 0;
                Model.objectList.push(humanoid);
                Virtual_background.objectList.push(humanoid);
            }
            this.humanoid_list = new Array();
        }
        this.rectangle.x = this.cords.x;
        this.rectangle.y = this.cords.y;
        if(this.lives <= 0){
            this.alive = false;
        }
    }
}
