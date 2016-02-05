var assn = 'Calculator';
//TODO https://gist.github.com/johndavedecano/3149185

function reFocus() {
    input.focus();
}

function selAll() {
    input.focus();
    input.setSelectionRange();
}

function doEval() {
    // get answer
    var calcResult = eval($('#eval').val());

    // update calculator output
    $('#ans').text(calcResult);
    console.log(calcResult);

    selAll();
}

$(function() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').textContent = assn;

    var input =  $('#eval');
    var answer = $('#ans');

    $('#exe').click(doEval);

    $('#k1,#k2,#k3,#k4,#k5,#k6,#k7,#k8,#k9,#k0').click(function() {
        // append key's text to input evaluation string
        input.val(input.val() + $(this).text());
        reFocus();
        input.setSelectionRange(input.val().length);
    });

    $('#clr').click(function() {
        input.val("");
        reFocus();
    });
});

