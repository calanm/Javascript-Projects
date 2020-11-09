function full_Sentence() {
    var sec_1 = "I made ";
    var sec_2 = "a full sentence.";
    var whole_sentence = sec_1.concat(sec_2);
    document.getElementById("Concat").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "I am going to cut this sentence."
    var Section = Sentence.slice(8,12);
    document.getElementById("Slice").innerHTML = Section;
}

function precision_Method() {
    var X = 1234413435.213452345
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

function string_Method() {
    var X = 245
    document.getElementById("Numbers_to_string").innerHTML = X.toString(8);

}