
var Waver = {
    make_wave: function (JSON_array) {
        var ques = new Array(); //tablica z kolejkami
        //var JSON_array = JSON.parse(jason_text_path);
        for(var i = 0; i < JSON_array.length; i++){
            ques.push(new Array());
            while (JSON_array[i].amount > 0){
                switch (JSON_array[i].type){
                    case "lander":
                        ques[i].push(new Lander(new Cords(getRandomInt(-4000, 4000), 0.5*canvas_height)));
                        break;
                    case "bomber":
                        ques[i].push(new Bomber(new Cords(getRandomInt(-4000, 4000), 0.5*canvas_height)));
                        break;
                    case "pod":
                        ques[i].push(new Pod(new Cords(getRandomInt(-4000, 4000), getRandomInt(100, 600))));
                        break;
                }
                for(var j = 0; j < JSON_array[i].interval; j++){
                    ques[i].push(null);
                }
                JSON_array[i].amount -=1;
            }
        }

        return ques;
    }
}