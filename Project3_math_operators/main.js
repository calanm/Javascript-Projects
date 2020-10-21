function mathFunc() {
    var oper = (2+2-1) * 10 / 4
    document.getElementById("Math").innerHTML = "2 + 2 - 1 * 10 / 4 = " + oper
}

function add1() {
    var oper = 5
    oper++
    document.getElementById("add1").innerHTML = "5 + 1 = " + oper
}


function sub1() {
    var oper = 5
    oper--
    document.getElementById("sub1").innerHTML = "5 - 1 = " + oper
}

function random() {
document.write(window.alert(Math.random()))
}


