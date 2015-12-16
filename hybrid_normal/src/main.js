var assn = 'Hybrid vs Normal';
var mainForm;
var blankValid = true;
var hyGalonsConsumed;
var hyOwningCost;
var nhGalonsConsumed;
var nhOwningCost;

function ffillup() {
    //put in numbers
    mainForm.mi1.value = '4567';
    mainForm.ppg5.value = '2.5';
    mainForm.sale.value = '65000';
    mainForm.mpg.value = '61';
    mainForm.resale5.value = '45000';
    mainForm.normSale.value = '20000';
    mainForm.normMpg.value = '27';
    mainForm.normResale5.value = '13000';
    mainForm.buyingCriterion.value = 'save_gas';
}

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
    return Math.round(mi1*5 / mpg * 10)/10;
}

function getOwningCost(galons5, ppg5, sale, resale5) {
    return Math.round(galons5 * ppg5 + (sale - resale5) *100)/100;
}

function hyCalc() {
    // Galons consumed
    hyGalonsConsumed = getGalonsConsumed(mainForm.mi1.value, mainForm.mpg.value);
    hyOwningCost = getOwningCost(hyGalonsConsumed, mainForm.ppg5.value, mainForm.sale.value, mainForm.resale5.value);
    // Display
    console.log('hy: ' + hyGalonsConsumed + ' gallons of fuel in 5 years');
    console.log('$'+hyOwningCost + ' ownership cost');
}

function nhCalc() {
    // Galons consumed non-hybrid
    nhGalonsConsumed = getGalonsConsumed(mainForm.mi1.value, mainForm.normMpg.value);
    nhOwningCost = getOwningCost(nhGalonsConsumed, mainForm.ppg5.value, mainForm.normSale.value, mainForm.normResale5.value);
    // Display
    console.log('norm: ' + nhGalonsConsumed + ' gallons of fuel in 5 years');
    console.log('$'+nhOwningCost + ' ownership cost');
}

function updateResults() {
    var div = document.getElementById('results');
    var hyP = document.createElement('p');
    var nhP = document.createElement('p');
    hyP.appendChild(document.createTextNode('Hybrid uses '+hyGalonsConsumed+' galons and cost $'+hyOwningCost));
    nhP.appendChild(document.createTextNode('Non-hybrid uses '+nhGalonsConsumed+' galons and cost $'+nhOwningCost));
    // add results into HTML document
    div.innerHTML = '';
    if(mainForm.buyingCriterion.value == 'total_cost') {
        // NEED List lowest cost first
        div.appendChild(nhP);
        div.appendChild(hyP);
    }
    else {
        // List lowest gas consumption first
        div.appendChild(hyP);
        div.appendChild(nhP);
    }
    
}

/*
 * Validate whole form on submit
 */
function submitHybridTestForm() {
	// Disallow blank fields
	blankValid = false;
//TEMP fillup hack
    if(mainForm.mi1.value=='') {
        ffillup();
    }

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
    updateResults();

    // return false to avoid submitting to server (there is no server for this)
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

