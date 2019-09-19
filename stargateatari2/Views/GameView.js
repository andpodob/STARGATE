

var GameView =  function (wave) {
    this.alive_check = new Array(); //tablica sluzaca do sprawdzenia czy jeszcze zyje jakis obiket z danej fali
    this.wave_counter = 0;
    this.wave = wave;
    this.initView = function () {
        console.log(this.wave)
        for(i = 0; i < this.wave.length; i++){
            for(j = 0; j < this.wave[i].length; j++){
                if(this.wave[i][j] != null){
                    this.alive_check.push(this.wave[i][j]);
                }
            }
        }

        Main_Character.lives = 5;
        Main_Character.alive = true;

        Model.objectList = new Array();
        Virtual_background.objectList = new Array();

        Virtual_background.objectList.push(Background1);
        Virtual_background.objectList.push(Background2);
        Model.objectList.push(Main_Character);
        var lander = new Lander(new Cords(3000,500));
        Model.objectList.push(lander);
        Virtual_background.objectList.push(lander);

        var inc = 783, temp = -4310, i = 0; //zmienne do ustawienia padow i humanoidow
        var pad = null, humanoid = null;
        for(i = 0; i < 10; i++) {
            temp += inc;
            pad = new Pad(new Cords(temp, 0.95 * canvas_height));
            humanoid = new Humanoid(new Cords(pad.cords.x + 10, pad.cords.y - 35), pad);
            Virtual_background.objectList.push(pad);
            Virtual_background.objectList.push(humanoid);
            Model.objectList.push(humanoid);
        }
        var temp = 0;
        var wave = this.wave;
        setInterval(function () {
            for(i = 0; i < wave.length; i++){
                if(wave[i].length > temp && wave[i][temp] != null){
                    console.log("stworzył się nowy: "+wave[i][temp].type )
                    Model.objectList.push(wave[i][temp]);
                    Virtual_background.objectList.push(wave[i][temp]);
                }
            }
            temp++;
        }, 1000);
    }


    this.updateView = function (ctx) {
        var i;
        var img, img2;
        var cords;
        var type;
        //sprawdzamy czy jeszcze zyje jakis obiekt z fali
        var temp = 0;
        //canvas do minimapki
        var miniMap = document.getElementById("miniMap");
        var miniMap_ctx = miniMap.getContext("2d");
        miniMap_ctx.clearRect(0,0,666,160);
        //
        for(i = 0; i < Model.objectList.length; i++){
            if(Model.objectList[i].type == "lander" || Model.objectList[i].type == "swamer" || Model.objectList[i].type == "pod" ||Model.objectList[i].type == "bomber"){
                if(Model.objectList[i].alive == true){
                    temp++;
                    break;
                }
            }
        }
        if(temp == 0){
            this.wave_counter++;
            var wave = JSON.parse(wave_1)
            console.log(wave.waves.length)
            if(wave.waves.length > this.wave_counter){
                wave = Waver.make_wave(wave.waves[this.wave_counter]);
                console.log(wave)
                root_view = new WaveView(this.wave_counter+1, wave);
            }
            else{ 
                root_view = new StartingView()
                root_view.initView();
            }
            
        }

        ctx.save();

        for (i = 0; i < Virtual_background.objectList.length; i++) {
            cords = Virtual_background.objectList[i].cords;
            type = Virtual_background.objectList[i].type;
            if(type == "background") {
                img = document.createElement("img");
                img.setAttribute("src", imageRootTabele[type]);
                ctx.drawImage(img, cords.x, cords.y);

                img2 = document.createElement("img");
                img2.setAttribute("src", imageRootTabele[type]);
                miniMap_ctx.drawImage(img2, (cords.x+1000)*0.2, 0, 0.2*4310,160);
            }
            else if(cords.x > 0 && cords.x < 1440){
                img = document.createElement("img");
                img.setAttribute("src", imageRootTabele[type]);
                ctx.drawImage(img, cords.x, cords.y);
            }
            if(cords.x > -1000 && cords.x < 2440){
                miniMap_ctx.beginPath();
                miniMap_ctx.lineWidth="6";
                miniMap_ctx.strokeStyle="green";
                miniMap_ctx.rect((cords.x+1000)*0.2, cords.y*0.2,7,7);
                miniMap_ctx.stroke();
            }
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";

            rect1 = document.createElement("img");
            rect1.setAttribute("src", 'stargateatari2/img/rect2.png');
            ctx.drawImage(rect1, 0, 0);


            rect2 = document.createElement("img");
            rect2.setAttribute("src", 'stargateatari2/img/rect.png');
            ctx.drawImage(rect2, 1062, 0);

            scanner = document.createElement("img");
            scanner.setAttribute("src", 'stargateatari2/img/skanner.png');
            ctx.drawImage(scanner, 590, 170);

            ctx.fillText("score: " + Main_Character.score + "",125,130); //score
            ctx.fillText("lives: " + Main_Character.lives + "",125,90); //lives
            ctx.fillText("humanoids: " + Model.humanoids_alive + "",125,50); //humanoids
        }

        //minimapka hehhehehe

        
        cords = Main_Character.cords;
        type = Main_Character.type;
        img = document.createElement("img");
        img.setAttribute("src", imageRootTabele[type]);
        ctx.drawImage(img, cords.x, cords.y);


        ctx.restore();
    }
}