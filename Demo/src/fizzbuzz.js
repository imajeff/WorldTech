// FIZZBUZZ

/**
 * Determine and return string to say for a specific number.
 */
function translateNumber(num, mode) {
  // mode 0 follows rules of normal game
  
  if(num < 1) {
    // only 1 and above are valid num
    return "Huh?";
  }

  var respond = "";
  if(num % 3 == 0) {
    // multiple of 3
    // say Fizz
    respond += "Fizz";
  }
  if(num % 5 == 0) {
    // multiple of 5
    // say Buzz which would be appended to the initial Fizz
    respond += "Buzz";
  }
  if(respond === "") {
    // default just says the original number
    respond = num;
  }

  return respond;
}

function go() {
  console.log("Playing");
  for(var i=1; i < 36; i++) {
    console.log(translateNumber(i,0));
  }
}

go();
