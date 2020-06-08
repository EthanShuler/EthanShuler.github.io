var keys = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
var majMin = ["Major", "Minor"];
var sevenths = [
    "major seventh",
    "minor seventh",
    "dominant seventh",
    "half-diminished seventh",
    "fully-diminished seventh"
];
var modes = ["Lydian", "Mixolydian", "Dorian", "Phrygian", "Locrian"];

var setting = 3;
var inversion = false;

function generate() {
    var randNum = Math.floor(Math.random() * setting);
    switch (randNum) {
        case 0:
            triad();
            break;
        case 1:
            seventh();
            break;
        case 2:
            scale();
            break;
        case 3:
            iiVi();
            break;
        case 4:
            modal();
            break;
        default:
            document.getElementById("main").innerHTML = "error";
            break;
    }
}

function triad() {
    var key = keys[Math.floor(Math.random() * keys.length)];
    var mode = majMin[Math.floor(Math.random() * majMin.length)];
    document.getElementById("main").innerHTML = key + " " + mode + " triad";
}

function seventh() {
    var key = keys[Math.floor(Math.random() * keys.length)];
    var seventhChord = sevenths[Math.floor(Math.random() * sevenths.length)];
    document.getElementById("main").innerHTML =
        key + " " + seventhChord + " chord";
}

function scale() {
    var key = keys[Math.floor(Math.random() * keys.length)];
    var mode = majMin[Math.floor(Math.random() * majMin.length)];
    document.getElementById("main").innerHTML = key + " " + mode + " scale";
}

function setJazz() {
    setting = 5;
}

function setNoJazz() {
    setting = 3;
}

function iiVi() {
    var key = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById("main").innerHTML = "ii-V-I in the key of " + key;
}

function modal() {
    var key = keys[Math.floor(Math.random() * keys.length)];
    var mode = modes[Math.floor(Math.random() * modes.length)];
    document.getElementById("main").innerHTML = key + " " + mode + " scale";
}
