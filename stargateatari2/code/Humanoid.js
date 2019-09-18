/**
 * Created by Lidka on 2017-05-07.
 */
//konstruktor obiektow humanoidow
var Humanoid = function (cords, pad) { //humanoidowi podajemy przy tworzeniu wspolzedne poczatkowe i background na ktorym sie znajduje
    this.type = "humanoid";
    this.cords = cords;
    this.rectangle = new Rectangle(this.cords.x, this.cords.y, 32, 32);
    this.pad = pad;
    this.locked = false;
    this.taken = false;
    this.speed_y = 0;
    this.on_pad = true;
    this.alive = true;

    this.update = function (eventList) { //w zaleznosci od backgounda na ktorym znajduje sie pad aktualizujemy pozycje humanoida
        if(this.taken == false) {
            this.cords.y += this.speed_y;
            if(check_Overlaping(this.rectangle, this.pad.rectangle) == true || this.cords.y > canvas_height){
                if(this.speed_y > 3.5){
                     // Model.objectList.splice(Model.objectList.indexOf(this), 1); //jezeli osiagna za duza predkosc to sie zabil
                     // Virtual_background.objectList.splice(Virtual_background.objectList.indexOf(this), 1);
                    this.alive = false;
                }
                if(this.speed_y != 0) {
                    console.log(this.speed_y)
                }
                this.speed_y = 0;
                this.on_pad = true;
            }else {
                this.speed_y += 0.1;
                this.on_pad = false;
            }
        }
        this.rectangle.x = this.cords.x;
        this.rectangle.y = this.cords.y;
    }
}
