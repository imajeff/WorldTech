/* Play FizzBuzz from http://career.navanas.com/course/full-stack-web-development/24214/#/a/14178342/
*/

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

/**
 * Add HTML tags to mark up the result of FizzBuzz.
 * say: text to display for this step
 * vmode:
 *   0 basic html, single colum of steps
 */
function addHtmlStep(say, vmode) {
  var tag;            //will be appended to document
  
  // vmode controls how simple the HTML output
  switch (vmode) {
    case 0:           // simple html for each step
      var txt = document.createTextNode(say);
      tag = document.createElement("h3");
      if(say.length > 5) {
        // add umph
        var moremph = document.createElement("i");
        moremph.appendChild(txt);
        tag.appendChild(moremph);
      }
      else {
        tag.appendChild(txt);
      }
      break;
    default:
      // mode not implemented; add nothing
  }
  
  // append to the designated <div>
  document.getElementById("result").appendChild(tag);
  
  return tag;
}

function go() {
  console.log("Playing FizzBuzz");
  for(var i=1; i <= 50; i++) {
    //var say = translateNumber(i,0);
    //console.log(say);
    addHtmlStep(translateNumber(i,0), 0);
  }
}

go();
