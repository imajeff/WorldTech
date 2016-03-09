var assn = 'Calculator';

function reFocus() {
    input.focus();
}

function selAll() {
    input.focus();
    input.setSelectionRange();
}

// closure for calculator functionality
var nextKey = (function () {
	var digits = ".0123456789";
	var operators = ['+-', '*/'];
	var expectOperator = false;
	var afterDecimal = 0;   //example: 2 when next key will be hundredths place
	var curLevel = 0;       //operation level of precedence 1=add,2=mult,3=unary sign
	var curNumber = 0;      //constructing a number

    return function (key) {
        console.log("key "+key);
    	if(key === '=') {
    		// finish eval and update ans
    		console.log("answer "+ curNumber);
    		// Reset
    		curNumber = 0;
    	}
	    else if(expectOperator) {
	        ;
	    }
	    else {
	        // entering number or unary symbol
	        if(digits.includes(key)) {
	        	curNumber = curNumber * 10 + parseInt(key);
	        	$('#ans').text(curNumber);
	        }
	    }
    }
})();

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

    $('.key').click(function() {
        nextKey($(this).text());
    });

/*    $('#k1,#k2,#k3,#k4,#k5,#k6,#k7,#k8,#k9,#k0').click(function() {
        // append key's text to input evaluation string
        input.val(input.val() + $(this).text());
        reFocus();
        input.setSelectionRange(input.val().length);
    });

    $('#clr').click(function() {
        $('#eval').val("");
        reFocus();
    });
*/
});

