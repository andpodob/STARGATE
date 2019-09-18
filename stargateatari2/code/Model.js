
var canvas_width = 1440;
var canvas_height = 810;



var Model = {
    objectList: new Array(), //lista obiektow do wyswietalnia
    humanoids_alive: 0,
    update: function () {
        var i = 0;
        var x = 0;
        //kolizje pociskow z elementami
        for (i = 0; i < this.objectList.length; i++) {
            this.objectList[i].update(Control.eventList);
            if(this.objectList[i].type == "projectile"){
                var projectile = this.objectList[i];
                for(var j = 0; j < this.objectList.length; j++){
                    if(this.objectList[j].type == "lander"){
                        var lander = this.objectList[j];
                        if(check_Overlaping(lander.rectangle, projectile.rectangle) == true){
                            if(lander.target != null){
                                lander.target.locked = false;
                                lander.target.taken = false;
                            }
                            this.objectList[i].alive = false;
                            this.objectList[j].alive = false;

                            Main_Character.score += 1000;
                            break;
                        }
                    }
                    if(this.objectList[j].type == "pod"){
                        var pod = this.objectList[j];
                        if(check_Overlaping(pod.rectangle, projectile.rectangle) == true){
                            pod.explode();
                            this.objectList[i].alive = false;
                            this.objectList[j].alive = false;
                            Main_Character.score += 1000;
                            break;
                        }
                    }
                    if(this.objectList[j].type == "swamer" || this.objectList[j].type == "bomber"){
                        if(check_Overlaping(this.objectList[j].rectangle, projectile.rectangle) == true){
                            this.objectList[i].alive = false;
                            this.objectList[j].alive = false;
                            Main_Character.score += 1000;
                            break;
                        }
                    }
                }
            }if(this.objectList[i].type == "humanoid" && this.objectList[i].alive == true){
                x++;
            }
        }
        this.humanoids_alive = x;
        //kolizje glownego bohatera z elementami
        for (i = 0; i < this.objectList.length; i++) {
            if (this.objectList[i].type.substring(0, 8) == "starship") {
                for (var j = 0; j < this.objectList.length; j++) {
                    if (this.objectList[j].type == "humanoid") {
                        if (check_Overlaping(this.objectList[j].rectangle, this.objectList[i].rectangle) == true &&
                            this.objectList[j].on_pad == false) {
                            this.objectList[i].humanoid_list.push(this.objectList[j]);
                            Virtual_background.objectList.splice(Virtual_background.objectList.indexOf(this.objectList[j]), 1);
                            this.objectList.splice(j, 1);
                        }
                    }
                    if( this.objectList[j].type == "lander" ||
                        this.objectList[j].type == "mine" ||
                        this.objectList[j].type == "swamer" ||
                        this.objectList[j].type == "bomber" ||
                        this.objectList[j].type == "pod"){

                        if(check_Overlaping(this.objectList[j].rectangle, this.objectList[i].rectangle) == true) {
                            this.objectList[j].alive = false;
                            if(this.objectList[j].type == "swamer"){
                                console.log("swamer")
                            }
                            Main_Character.lives -= 1;
                        }
                    }
                }
            }
        }

        //wykrywanie smierci obiektow
        var current_list = this.objectList;
        var new_list = new Array();
        for (i = 0; i < current_list.length; i++){
            if(current_list[i].alive == true){
                new_list.push(current_list[i]);
            }else if(current_list[i].alive == false && current_list[i].type.substring(0, 8) == "starship" || this.humanoids_alive == 0){
                root_view = new GameOverView();
            }
            else {
                Virtual_background.objectList.splice(Virtual_background.objectList.indexOf(current_list[i]),1);
            }
        }
        this.objectList = new_list;
        current_list = null;
    }
}




