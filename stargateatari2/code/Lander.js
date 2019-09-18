/**
 * Created by Lidka on 2017-05-07.
 */
//konstruktor obiektow Lander
var Lander = function (cords) {
    this.type = "lander";
    this.speed_x = 5;
    this.speed_y = 4;
    this.cords = cords;
    this.target = null;
    //this.target.locked = true;
    //this.target.cords.x = Math.floor(this.target.cords.x);
    this.rectangle = new Rectangle(this.cords.x, this.cords.y, 64, 42)
    this.over_target_flag = false;
    this.y_move_counter = -500;
    this.alive = true;
    


    this.update = function (eventList) {
        if (this.target != null && Model.objectList.indexOf(this.target) != -1) {
            if (this.over_target_flag == false) {
                if (this.cords.x > this.target.cords.x) {
                    this.cords.x -= this.speed_x;
                }
                if (this.cords.x < this.target.cords.x) {
                    this.cords.x += this.speed_x;
                }
                if (Math.abs(Math.floor(this.cords.x) - this.target.cords.x) == 0 ||
                    Math.abs(Math.floor(this.cords.x) - this.target.cords.x) == 1 ||
                    Math.abs(Math.floor(this.cords.x) - this.target.cords.x) == 2 ||
                    Math.abs(Math.floor(this.cords.x) - this.target.cords.x) == 3 ||
                    Math.abs(Math.floor(this.cords.x) - this.target.cords.x) == 4) {
                    this.over_target_flag = true;
                }
                if (this.cords.y > 0.6*canvas_height || this.cords.y < 0.3*canvas_height) {
                    this.speed_y = -this.speed_y;
                }
                this.cords.y += this.speed_y;
            }
            if (this.over_target_flag == true && this.target.taken == false) {
                this.cords.y += Math.abs(this.speed_y);
                this.rectangle.y = this.cords.y;
                if (check_Overlaping(this.rectangle, this.target.rectangle) == true) {
                    this.target.taken = true;
                }
            }
            if(this.target.taken == true){
                this.cords.y -= Math.abs(this.speed_y);
                this.target.cords.y = this.cords.y + 35;
                this.target.cords.x = this.cords.x + 10;
            }
            if(this.target.taken == true && this.cords.y < 0.5*canvas_height){
                this.target.taken = false; //upuszczamy humanoida
                this.target.locked = false;
                this.over_target_flag = false;
                this.target = null;
            }
        }else {
            for(j = 0; j < Model.objectList.length; j++){
                if(Model.objectList[j].type == "humanoid"){
                    if(Model.objectList[j].locked == false && Math.abs(Model.objectList[j].cords.x - this.cords.x) > 100){
                        Model.objectList[j].locked = true;
                        this.target = Model.objectList[j];
                        break;
                    }
                }
                this.target = null;
            }
        }
        this.rectangle.x = this.cords.x;
        this.rectangle.y = this.cords.y;
    }
}
