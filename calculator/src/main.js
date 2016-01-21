var assn = 'Calculator';
var calcResult;
//TODO https://gist.github.com/johndavedecano/3149185

$(document).ready(function(){
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').textContent = assn;

    $('button:submit').click(function() {
    	calcResult += ' = ' + eval( $("").val() );
    	// update calculation string in the text field
    	$('#exp').val(calcResult);
    	console.log(calcResult);
	});
});

