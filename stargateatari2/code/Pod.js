

var Pod = function (cords) {
    this.type = "pod";
    this.cords = new Cords(cords.x, cords.y);
    this.rectangle = new Rectangle(cords.x, cords.y, 67, 38);
    this.alive = true;

    this.explode = function () {
        var swamer_1 = new Swamer(new Cords(this.cords.x, this.cords.y-30), 30);
        var swamer_2 = new Swamer(new Cords(this.cords.x, this.cords.y),60);
        var swamer_3 = new Swamer(new Cords(this.cords.x, this.cords.y+30), 90);

        Model.objectList.push(swamer_1);
        Model.objectList.push(swamer_2);
        Model.objectList.push(swamer_3);

        Virtual_background.objectList.push(swamer_1);
        Virtual_background.objectList.push(swamer_2);
        Virtual_background.objectList.push(swamer_3);
    }
    this.update = function () {

    }
}