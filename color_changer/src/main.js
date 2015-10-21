
function addButton(color) {
  txt = document.createTextNode(color);
  // Add button according to color text
  ele = document.createElement("button");
  ele.value = color.toLowerCase();
  ele.setAttribute('onclick','changeBG(this.value)');
  ele.appendChild(txt);
  document.getElementById("color-buttons").appendChild(ele);
}

function addOption(color) {
  txt = document.createTextNode(color);
  ele = document.createElement("option");
  ele.setAttribute('value',color.toLowerCase());
  // Add option
  ele.appendChild(txt);
  document.getElementById("color-options").appendChild(ele);
}

function changeBG(color) {
  document.body.style.backgroundColor = color;
  console.log('color changed '+document.body.style.backgroundColor);
}

function getSelectedColor() {
  // what color currently in the selection
  return document.getElementById('color-options').value;
}

function go() {
  var initialBtnCnt = 3;

  // Add initial color buttons
  for(var i=0; i<btnLabels.length; i++) {
    var color = btnLabels[i];
    console.log(color);

    if(i < initialBtnCnt) {
      // initially add only first few buttons
      //console.log('(button too)');
      addButton(color);
    }

    addOption(color);
  }
}

go();

var btnLabels = ["Red","Green","Blue",
'Black',
'Navy',
'DarkBlue',
'MediumBlue',
'DarkGreen',
'Teal',
'DarkCyan',
'DeepSkyBlue',
'DarkTurquoise',
'MediumSpringGreen',
'Lime',
'SpringGreen',
'Aqua',
'Cyan',
'MidnightBlue',
'DodgerBlue',
'LightSeaGreen',
'ForestGreen',
'SeaGreen',
'DarkSlateGray',
'LimeGreen',
'MediumSeaGreen',
'Turquoise',
'RoyalBlue',
'SteelBlue',
'DarkSlateBlue',
'MediumTurquoise',
'Indigo',
'DarkOliveGreen',
'CadetBlue',
'CornflowerBlue',
'RebeccaPurple',
'MediumAquaMarine',
'DimGray',
'SlateBlue',
'OliveDrab',
'SlateGray',
'LightSlateGray',
'MediumSlateBlue',
'LawnGreen',
'Chartreuse',
'Aquamarine',
'Maroon',
'Purple',
'Olive',
'Gray',
'SkyBlue',
'LightSkyBlue',
'BlueViolet',
'DarkRed',
'DarkMagenta',
'SaddleBrown',
'DarkSeaGreen',
'LightGreen',
'MediumPurple',
'DarkViolet',
'PaleGreen',
'DarkOrchid',
'YellowGreen',
'Sienna',
'Brown',
'DarkGray',
'LightBlue',
'GreenYellow',
'PaleTurquoise',
'LightSteelBlue',
'PowderBlue',
'FireBrick',
'DarkGoldenRod',
'MediumOrchid',
'RosyBrown',
'DarkKhaki',
'Silver',
'MediumVioletRed',
'IndianRed',
'Peru',
'Chocolate',
'Tan',
'LightGray',
'Thistle',
'Orchid',
'GoldenRod',
'PaleVioletRed',
'Crimson',
'Gainsboro',
'Plum',
'BurlyWood',
'LightCyan',
'Lavender',
'DarkSalmon',
'Violet',
'PaleGoldenRod',
'LightCoral',
'Khaki',
'AliceBlue',
'HoneyDew',
'Azure',
'SandyBrown',
'Wheat',
'Beige',
'WhiteSmoke',
'MintCream',
'GhostWhite',
'Salmon',
'AntiqueWhite',
'Linen',
'LightGoldenRodYellow',
'OldLace',
'Fuchsia',
'Magenta',
'DeepPink',
'OrangeRed',
'Tomato',
'HotPink',
'Coral',
'DarkOrange',
'LightSalmon',
'Orange',
'LightPink',
'Pink',
'Gold',
'PeachPuff',
'NavajoWhite',
'Moccasin',
'Bisque',
'MistyRose',
'BlanchedAlmond',
'PapayaWhip',
'LavenderBlush',
'SeaShell',
'Cornsilk',
'LemonChiffon',
'FloralWhite',
'Snow',
'Yellow',
'LightYellow',
'Ivory',
'White'];
