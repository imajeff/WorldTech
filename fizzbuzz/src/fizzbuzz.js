/* Play FizzBuzz from http://career.navanas.com/course/full-stack-web-development/24214/#/a/14178342/
*/

function getFizzBuzzType (i) {
  var type = 0;
//  return (i%3==0)?1:0 + (i%5==0)?2:0;
  if(i%3==0)
    type += 1;
  if(i%5==0)
    type += 2;
  return type;
}

/**
 * Determine and return string to say for a specific number.
 */
function translateToSay(num, mode) {
  // mode 0 follows rules of normal game
  
  if(num < 1) {
    // only 1 and above are valid num
    return "Huh?";
  }

  var say = "";
  if(num % 3 == 0) {
    // multiple of 3
    // say Fizz
    say += "Fizz";
  }
  if(num % 5 == 0) {
    // multiple of 5
    // say Buzz which would be appended to the initial Fizz
    say += "Buzz";
  }
  if(say === "") {
    // default just says the original number
    say = num;
  }
  if(say.length > 5)
    say += "!";

  return say;
}

/**
 * Add HTML tags to mark up the result of FizzBuzz.
 * say: text to display for this step
 * vmode:
 *   0 basic html, single colum of steps
 */
function addHtmlStep(i, vmode) {
  var type = getFizzBuzzType(i);
  var tag;            //will be appended to document
  
  // vmode controls how simple the HTML output
  switch (vmode) {
    case 0:           // simple html for each step
      var txt = document.createTextNode(translateToSay(i,0));
      tag = document.createElement("h2");
      if(type > 2) {
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
  document.getElementById("fizzbuzz").appendChild(tag);
  
  return tag;
}

function go() {
  console.log("Playing FizzBuzz");
  for(var i=1; i <= 50; i++) {
    //var say = translateNumber(i,0);
    console.log(i+": "+getFizzBuzzType(i));
    addHtmlStep(i, 0);
  }
}

go();
