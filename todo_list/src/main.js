var assn = 'ToDo List';

function crossOffItem(item) {
    //console.log('-'+item.className+'-');
    if(item.className.length=='') {
        item.className = 'crossed';
    }
    else {
        item.className = '';
    }
}

function addItem(str) {
    var out = document.getElementById('list_out');
    var ele = document.createElement('li');
    ele.setAttribute("onclick","crossOffItem(this)");
    ele.appendChild(document.createTextNode(str));  //doesn't use markup
    out.appendChild(ele);
}

function updateList() {
    var form = document.forms['todo_form'];
    var entry = form.entry.value;
    if(entry.length==0) return;     //if entry blank, abort
    var entries = entry.split(',');
    console.log(entries);
    // Parse by commas and add each item
    for (var i=0; i < entries.length; i++) {
        addItem(entries[i].trim());
    }
    // reset input field
    form.entry.value = '';
}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;

}

go();
