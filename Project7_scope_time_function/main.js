
// local var example
function add () {
    var X = 10
    X++
}
//global var example
var glob = "I am a global variable"


// function using if statements
function cond (numb){
    if ( numb > 10 ) {
        document.write("Your number works")
    } else {
        document.write("your number does not work")
    }
}
// time function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = 'It is evening time.;
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}