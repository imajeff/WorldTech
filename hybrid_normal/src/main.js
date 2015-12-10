var assn = 'Hybrid vs Normal';
var hybridTestForm;
var blankValid = true;

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
    field = hybridTestForm.mi1;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Miles needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidPpg5() {
    field = hybridTestForm.ppg5;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Price per galon needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidSale() {
    field = hybridTestForm.sale;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Cost needs to be a positive number');
        field.focus();
        return false;
    }
}

function isValidMpg() {
    field = hybridTestForm.mpg;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Needs number of miles it could drive on a galon, more than 0');
        field.focus();
        return false;
    }
}

function isValidResale5() {
    field = hybridTestForm.resale5;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Resale of hybrid needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidNormSale() {
    field = hybridTestForm.normSale;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Cost of car needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidNormMpg() {
    field = hybridTestForm.normMpg;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Miles per galon needs a number that is positive');
        field.focus();
        return false;
    }
}

function isValidNormResale5() {
    field = hybridTestForm.normResale5;
    // must be valid number greater than zero
    if(!isValidNum(field.value)) {
        alert('Resale value needs a number that is positive');
        field.focus();
        return false;
    }
}

/*
 * Validate whole form on submit
 */
function validateHybridTestForm() {
	// Disallow blank fields
	blankValid = false;

	isValidMi1();
	isValidPpg5();
	isValidSale();
	isValidMpg();
	isValidResale5();
	isValidNormSale();
	isValidNormMpg();
	isValidNormResale5();
	isValidNormResale5();
	return false;
}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;

    // find form
    hybridTestForm = document.forms['hybrid_test'];
}

go();
