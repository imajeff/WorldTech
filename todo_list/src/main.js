var assn = 'ToDo List';

function updateList() {
    var form = document.forms['todo_form'];
}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;

}

go();
