/**
 * Created by Lidka on 2017-05-06.
 */

function check_Overlaping(rectangle1, rectangle2) {
    if(rectangle1.x > rectangle2.x && rectangle1.x < rectangle2.x+rectangle2.width && rectangle1.y > rectangle2.y && rectangle1.y < rectangle2.y + rectangle2.height){
        return true
    }
    if(rectangle1.x + rectangle1.width > rectangle2.x && rectangle1.x + rectangle1.width< rectangle2.x+rectangle2.width && rectangle1.y > rectangle2.y && rectangle1.y < rectangle2.y + rectangle2.height){

        return true
    }
    if(rectangle1.x > rectangle2.x && rectangle1.x < rectangle2.x+rectangle2.width && rectangle1.y + rectangle1.height > rectangle2.y && rectangle1.y + rectangle1.height < rectangle2.y + rectangle2.height){

        return true
    }
    if(rectangle1.x + rectangle1.width > rectangle2.x && rectangle1.x + rectangle1.width < rectangle2.x+rectangle2.width && rectangle1.y + rectangle1.height > rectangle2.y && rectangle1.y + rectangle1.height < rectangle2.y + rectangle2.height){

        return true
    }

    if(rectangle2.x > rectangle1.x && rectangle2.x < rectangle1.x+rectangle1.width && rectangle2.y > rectangle1.y && rectangle2.y < rectangle1.y + rectangle1.height){

        return true
    }
    if(rectangle2.x + rectangle2.width > rectangle1.x && rectangle2.x + rectangle2.width< rectangle1.x+rectangle1.width && rectangle2.y > rectangle1.y && rectangle2.y < rectangle1.y + rectangle1.height){

        return true
    }
    if(rectangle2.x > rectangle1.x && rectangle2.x < rectangle1.x+rectangle1.width && rectangle2.y + rectangle2.height > rectangle1.y && rectangle2.y + rectangle2.height < rectangle1.y + rectangle1.height){

        return true
    }
    if(rectangle2.x + rectangle2.width > rectangle1.x && rectangle2.x + rectangle2.width < rectangle1.x+rectangle1.width && rectangle2.y + rectangle2.height > rectangle1.y && rectangle2.y + rectangle2.height < rectangle1.y + rectangle1.height){

        return true
    }
    if(rectangle1.x < rectangle2.x && rectangle1.x + rectangle1.width > rectangle2.x && rectangle1.y > rectangle2.y && rectangle1.y < rectangle2.y + rectangle2.height){

        return true
    }
    if(rectangle1.x < rectangle2.x && rectangle1.x + rectangle1.width > rectangle2.x && rectangle1.y + rectangle1.height > rectangle2.y && rectangle1.y + rectangle1.height < rectangle2.y + rectangle2.height){

        return true
    }

    if(rectangle2.x < rectangle1.x && rectangle2.x + rectangle2.width > rectangle1.x && rectangle2.y > rectangle1.y && rectangle2.y < rectangle1.y + rectangle2.height){

        return true
    }
    if(rectangle2.x < rectangle1.x && rectangle2.x + rectangle2.width > rectangle1.x && rectangle2.y + rectangle2.height > rectangle1.y && rectangle2.y + rectangle2.height < rectangle1.y + rectangle1.height){

        return true
    }

    return false;
}

var Rectangle = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}