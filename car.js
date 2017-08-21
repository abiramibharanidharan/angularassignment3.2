// car class implement the interface drivable and include all the property
var car = (function () {
    function car(name) {
        this.name = name;
    }
    car.prototype.start = function () {
        console.log(this.name + " = is started");
    };
    car.prototype.drive = function () {
        console.log("Its drive fastly");
    };
    car.prototype.getPosition = function (position) {
        console.log(this.name + "  position is always   " + position);
    };
    return car;
}());
//instance of class object is created
var Adi = new car("Adi");
//through the object method is called
Adi.start();
Adi.drive();
Adi.getPosition("No:1");
//instance of class secound object is created
var Ford = new car("Ford Icon");
//through the object method is called
Ford.start();
Ford.drive();
Ford.getPosition("No:2");
