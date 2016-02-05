var assn = 'Calculator';
//TODO https://gist.github.com/johndavedecano/3149185

function doEval() {
    // get answer
    var calcResult = eval($('#eval').val());

    // update calculator output
    $('#ans').text(calcResult);
    console.log(calcResult);
}

$(function() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').textContent = assn;

    var input =  $('#eval');
    var answer = $('#ans');

    $('#exe').click(doEval);

    $('#0,#1').click(function() {
        // append key's text to input evaluation string
        input.append(this.text());
    });
});

