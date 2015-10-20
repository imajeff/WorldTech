var btnLabels = ["Red","Green","Blue","Purple","Brown","Orange","Yellow","Gray"];

function go() {
  var btnParent = document.getElementById("color-buttons");
  var optionParent = document.getElementById("color-options");
  var ele;
  var txt;
  var initialBtnCnt = 3;
  var i;

  // Add initial color buttons
  for(i=0; i<btnLabels.length; i++) {
    console.log(btnLabels[i]);
    var txt = document.createTextNode(btnLabels[i]);
    // Add option

    if(i < initialBtnCnt) {
      // Add button
    }
    var btn = document.createElement("button");
    ele.appendChild(txt);
    parent.appendChild(ele);
  }
}

go();
