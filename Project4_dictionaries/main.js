function myDictionary() {
    var dog = {
        Species: 'Animal',
        Color: "Grey",
        Age: 7,
    }
    delete(dog.Color)
    document.getElementById("dog").innerHTML = dog
}