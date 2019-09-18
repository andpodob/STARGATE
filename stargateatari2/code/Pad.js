/**
 * Created by Lidka on 2017-05-07.
 */
//konstruktor obiektow padow na ktorych sa automatycznie tworzone humanoidy, do konstrukotra podajemy wspozedne
var Pad = function (cords) {
    this.type = "pad";
    this.cords = new Cords(cords.x, cords.y);
    this.rectangle = new Rectangle(cords.x, cords.y, 50, 4);
}
