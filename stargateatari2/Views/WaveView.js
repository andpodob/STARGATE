
var WaveView = function (wave_numb, wave_to_pass) {
    this.wave_to_pass = wave_to_pass;
    this.wave_numb = wave_numb;
    var miniMap = document.getElementById("miniMap");
    var miniMap_ctx = miniMap.getContext("2d");
    miniMap_ctx.clearRect(0,0,666,160);

    this.updateView = function (ctx) {
        var img;
        ctx.save();
        img = document.createElement("img");
        img.setAttribute("src", 'stargateatari2/img/wave.png');
        ctx.drawImage(img, 0, 0);
		
		ctx.font = "60px Georgia";
		var gradient=ctx.createLinearGradient(0,0,400,0);
		gradient.addColorStop("0","magenta");
		gradient.addColorStop("0.5","blue");
		gradient.addColorStop("1.0","red");
		ctx.fillStyle=gradient;
		ctx.fillText(this.wave_numb,780,400);
        ctx.restore();
        for(i = 0; i < Control.eventList.length; i++){
            if(Control.eventList[i] == 13){
                root_view = new GameView(this.wave_to_pass);
                root_view.initView();
                Control.eventList = new Array();
            }
        }
    }
}