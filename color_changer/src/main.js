var btnLabels = [
'AliceBlue',
'AntiqueWhite',
'Aqua',
'Aquamarine',
'Azure',
'Beige',
'Bisque',
'Black',
'BlanchedAlmond',
'Blue',
'BlueViolet',
'Brown',
'BurlyWood',
'CadetBlue',
'Chartreuse',
'Chocolate',
'Coral',
'CornflowerBlue',
'Cornsilk',
'Crimson',
'Cyan',
'DarkBlue',
'DarkCyan',
'DarkGoldenRod',
'DarkGray',
'DarkGreen',
'DarkKhaki',
'DarkMagenta',
'DarkOliveGreen',
'DarkOrange',
'DarkOrchid',
'DarkRed',
'DarkSalmon',
'DarkSeaGreen',
'DarkSlateBlue',
'DarkSlateGray',
'DarkTurquoise',
'DarkViolet',
'DeepPink',
'DeepSkyBlue',
'DimGray',
'DodgerBlue',
'FireBrick',
'FloralWhite',
'ForestGreen',
'Fuchsia',
'Gainsboro',
'GhostWhite',
'Gold',
'GoldenRod',
'Gray',
'Green',
'GreenYellow',
'HoneyDew',
'HotPink',
'IndianRed',
'Indigo',
'Ivory',
'Khaki',
'Lavender',
'LavenderBlush',
'LawnGreen',
'LemonChiffon',
'LightBlue',
'LightCoral',
'LightCyan',
'LightGoldenRodYellow',
'LightGray',
'LightGreen',
'LightPink',
'LightSalmon',
'LightSeaGreen',
'LightSkyBlue',
'LightSlateGray',
'LightSteelBlue',
'LightYellow',
'Lime',
'LimeGreen',
'Linen',
'Magenta',
'Maroon',
'MediumAquaMarine',
'MediumBlue',
'MediumOrchid',
'MediumPurple',
'MediumSeaGreen',
'MediumSlateBlue',
'MediumSpringGreen',
'MediumTurquoise',
'MediumVioletRed',
'MidnightBlue',
'MintCream',
'MistyRose',
'Moccasin',
'NavajoWhite',
'Navy',
'OldLace',
'Olive',
'OliveDrab',
'Orange',
'OrangeRed',
'Orchid',
'PaleGoldenRod',
'PaleGreen',
'PaleTurquoise',
'PaleVioletRed',
'PapayaWhip',
'PeachPuff',
'Peru',
'Pink',
'Plum',
'PowderBlue',
'Purple',
'RebeccaPurple',
'Red',
'RosyBrown',
'RoyalBlue',
'SaddleBrown',
'Salmon',
'SandyBrown',
'SeaGreen',
'SeaShell',
'Sienna',
'Silver',
'SkyBlue',
'SlateBlue',
'SlateGray',
'Snow',
'SpringGreen',
'SteelBlue',
'Tan',
'Teal',
'Thistle',
'Tomato',
'Turquoise',
'Violet',
'Wheat',
'White',
'WhiteSmoke',
'Yellow',
'YellowGreen',];

function getCurrentColor() {
  return document.body.style.backgroundColor;
}

function getSelectColor() {
  // what color currently in the selection
  return document.getElementById('color-options').value;
}

function changeBG(color) {
  document.body.style.backgroundColor = color;
  console.log('color changed '+document.body.style.backgroundColor);
}

function findColorButton(color) {
  var parent = document.getElementById("color-buttons");
  var buttons = parent.getElementsByTagName('button');
  color = color.toUpperCase();

  //find the first with same color value
  for(var i=0; i < buttons.length; i++) {
    btn = buttons[i];
    if(btn.value.toUpperCase()===color) {
      // found
      return btn;
    }
  }
  return null;      //none found
}

function addButton(color) {
  if(color==="") {
    alert("Please select a color first");
  }
  else if(findColorButton(color)===null) {
    txt = document.createTextNode(color);
    // Add button according to color text
    ele = document.createElement("button");
    ele.value = color.toLowerCase();
    ele.setAttribute('onclick','changeBG(this.value)');
    ele.appendChild(txt);
    document.getElementById("color-buttons").appendChild(ele);
  }
  else {
    alert(color+' is already added');
  }
}

function removeButton() {
  var color = getCurrentColor();
  var parent = document.getElementById("color-buttons");
  var buttons = parent.getElementsByTagName('button');

  for(var i=0; i < buttons.length; i++) {
    var btn = buttons[i];
    if(btn.value === color) {
      console.log("rmv "+btn.innerHTML);
      changeBG('white');  //default color
      parent.removeChild(btn);
    }
  }
}

function addOption(color) {
  txt = document.createTextNode(color);
  ele = document.createElement("option");
  ele.setAttribute('value',color);
  // Add option
  ele.appendChild(txt);
  document.getElementById("color-options").appendChild(ele);
}

function go() {

  // Add initial color buttons
  for(var i=0; i<btnLabels.length; i++) {
    var color = btnLabels[i];
    //console.log(color);

/*    if(i < initialBtnCnt) {
      // initially add only first few buttons
      //console.log('(button too)');
      addButton(color);
    }
*/
    addOption(color);
  }
}

go();
