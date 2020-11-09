function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById('Height').value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//constructor for car
function Car(motor, speed, model,) {
    this.motorType = motor;
    this.topSpeed = speed;
    this.model = model;
  }

  //object is created from car constructor

  var suv = new Car("v8, 168, SUV")

// function for setting user name a name value
function User(name) {
    Name = name;

    //inner function to set user to active
    function active() {
        active = True;
    }

}



