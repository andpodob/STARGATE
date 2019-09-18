var Control = {
    eventList: new Array(),

    addEvent: function (event) {
        if(this.eventList.indexOf(event) == -1){
            this.eventList.push(event)
        }
    },
    removeEvent: function (event) {
        var i = this.eventList.indexOf(event);
        this.eventList.splice(i, 1);
    }
}