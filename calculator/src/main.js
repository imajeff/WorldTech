var assn = 'Calculator';
var calcResult;
//TODO https://gist.github.com/johndavedecano/3149185


$(document).ready(function(){
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').textContent = assn;


    $('#exe').click(function(){
    	// get answer
    	calcResult = eval($('#eval').val());
    	// update calculation string in the text field
    	$('#ans').val(calcResult);
    	console.log(calcResult);
	});
});

