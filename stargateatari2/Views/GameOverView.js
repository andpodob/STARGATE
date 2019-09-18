
var GameOverView = function () {
    var miniMap = document.getElementById("miniMap");
    var miniMap_ctx = miniMap.getContext("2d");
    miniMap_ctx.clearRect(0,0,666,160);

    this.updateView = function (ctx) {
        var img;
        ctx.save();
        img = document.createElement("img");
        img.setAttribute("src", 'stargateatari2/img/game_over.png');
        ctx.drawImage(img, 0, 0);
        ctx.restore();
        for(i = 0; i < Control.eventList.length; i++){
            if(Control.eventList[i] == 13){
                root_view = new StartingView();
                root_view.initView();
            }
        }
    }
}