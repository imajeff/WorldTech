var assn = 'Calculator';
var calcResult;

function enterKey() {
    calcResult = '2 + 3';// +' * '+Math.random()*6;
    calcResult += ' = ' + eval(calcResult).toFixed(3);
    console.log(calcResult);
}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;

}

$(document).ready(function(){
    go();
});

