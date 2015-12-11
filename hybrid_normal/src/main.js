var assn = 'Hybrid vs Normal';
var mainForm;
var blankValid = true;
var hyGalonsConsumed;
var hyOwningCost;

function isValidNum(num) {
    if(blankValid && num==="") {
        // to allow leaving focus on blank field until submit
        return true;
    }
    // false if not a number, or is not greater than zero
    return (!isNaN(num) && num > 0);
}

/*
 * Functions validating each field
 */
function isValidMi1() {
    field = mainForm.mi1;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Miles per year needs a number that is positive, greater than 0');
        field.focus();
        return false;
    }
}

function isValidPpg5() {
    field = mainForm.ppg5;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Price per galon needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidSale() {
    field = mainForm.sale;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Purchase cost of hybrid needs a positive number');
        field.focus();
        return false;
    }
}

function isValidMpg() {
    field = mainForm.mpg;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Efficiency of hybrid needs a positive number (mpg)');
        field.focus();
        return false;
    }
}

function isValidResale5() {
    field = mainForm.resale5;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Resale of hybrid needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidNormSale() {
    field = mainForm.normSale;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Cost of non-hybrid needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidNormMpg() {
    field = mainForm.normMpg;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Efficiency of non-hybrid needs a positive number');
        field.focus();
        return false;
    }
}

function isValidNormResale5() {
    field = mainForm.normResale5;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Resale value needs a number that is positive');
        field.focus();
        return false;
    }
}

function getGalonsConsumed(mi1, mpg) {
    return Math.round(mainForm.mi1.value*5 / mainForm.mpg.value * 100)/100;
}

function getOwningCost(galons, ppg5, depreciated) {
    return Math.round(mainForm.ppg5.value * galons + depreciated *100)/100;
}

function hyCalc() {
    // Galons consumed
    hyGalonsConsumed = getGalonsConsumed(mainForm.mi1.value, mainForm.mpg.value);
    hyOwningCost = getOwningCost(hyGalonsConsumed, mainForm.ppg5.value, );
    // Display
    console.log(hyGalonsConsumed + 'gallons of fuel consumed');
    console.log('$'+hyOwningCost + 'ownership cost');
}

function nhCalc() {
    // Calculate
    // Display
}


/*
 * Validate whole form on submit
 */
function submitHybridTestForm() {
	// Disallow blank fields
	blankValid = false;

    // final form validation
	isValidMi1();
	isValidPpg5();
	isValidSale();
	isValidMpg();
	isValidResale5();
	isValidNormSale();
	isValidNormMpg();
	isValidNormResale5();
	isValidNormResale5();

    var priority = mainForm.buyingCriterion.value;
    if(typeof priority != 'string' 
            || priority.length == 0) {
        alert("Please select your preferred buying criterion (priority)");
        return false;
    }

    // Ready for results
    hyCalc();
    nhCalc();

    // return false to avoid submitting to server; looks wierd with no server processing
	return false;

}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;

    // find form
    mainForm = document.forms['hybrid_test'];
}


go();

