
var StartingView = function () {
    this.counter = 0;
    this.index = 0;
    this.animationtabele = new Array();
    this.initView = function () {
        this.animationtabele.push('stargateatari2/img/intro1.png');
        this.animationtabele.push('stargateatari2/img/intro2.png');
        this.animationtabele.push('stargateatari2/img/intro3.png');
        Main_Character.score = 0;
    }
    this.updateView = function (ctx) {
        var img;
        if(this.counter == 15){
            this.index++;
            if(this.index == 3){
                this.index = 0;
            }
            this.counter = 0;
        }
        ctx.save();
        img = document.createElement("img");
        img.setAttribute("src", this.animationtabele[this.index]);
        ctx.drawImage(img, 0, 0);
        ctx.restore();
        //sprawdzamy czy ktos nie wcisnał entera
        for(i = 0; i < Control.eventList.length; i++){
            if(Control.eventList[i] == 13){
                Control.eventList = new Array()
                console.log(JSON.parse(wave_1));
                var wave = Waver.make_wave(JSON.parse(wave_1).waves[0]);
                root_view = new WaveView(1, wave);
                break;
            }
        }
        this.counter++;
    }
}