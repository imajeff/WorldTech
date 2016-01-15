var assn = 'Calculator';
var calcResult;

$('button:submit').click(function() {
    calcResult = '2 + 3';// +' * '+Math.random()*6;
    calcResult += ' = ' + eval(calcResult).toFixed(3);
    // update calculation string in the text field
    $('input:text').val(calcResult);
    console.log(calcResult);
    return false;
});

$(document).ready(function(){
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').textContent = assn;
});

