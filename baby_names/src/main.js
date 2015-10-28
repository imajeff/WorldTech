var assn = 'Baby Name Generator';
var boyNames = ['Jefferson',
    'Lee', 
    'Jackson', 
    'Aiden', 
    'Liam', 
    'Lucas', 
    'Noah', 
    'Mason', 
    'Ethan', 
    'Caden', 
    'Jacob', 
    'Logan', 
    'Jayden', 
    'Elijah', 
    'Jack', 
    'Luke', 
    'Michael', 
    'Benjamin', 
    'Alexander', 
    'James', 
    'Jayce', 
    'Caleb', 
    'Connor', 
    'William', 
    'Carter', 
    'Ryan', 
    'Oliver', 
    'Matthew', 
    'Daniel', 
    'Gabriel', 
    'Henry', 
    'Owen', 
    'Grayson', 
    'Dylan', 
    'Landon', 
    'Isaac', 
    'Nicholas', 
    'Wyatt', 
    'Nathan', 
    'Andrew', 
    'Cameron', 
    'Dominic', 
    'Joshua', 
    'Eli', 
    'Sebastian', 
    'Hunter', 
    'Brayden', 
    'David', 
    'Samuel', 
    'Evan', 
    'Gavin', 
    'Christian', 
    'Max', 
    'Anthony', 
    'Joseph', 
    'Julian', 
    'John', 
    'Colton', 
    'Levi', 
    'Muhammad', 
    'Isaiah', 
    'Aaron', 
    'Tyler', 
    'Charlie', 
    'Adam', 
    'Parker', 
    'Austin', 
    'Thomas', 
    'Zachary', 
    'Nolan', 
    'Alex', 
    'Ian', 
    'Jonathan', 
    'Christopher', 
    'Cooper', 
    'Hudson', 
    'Miles', 
    'Adrian', 
    'Leo', 
    'Blake', 
    'Lincoln', 
    'Jordan', 
    'Tristan', 
    'Jason', 
    'Josiah', 
    'Xavier', 
    'Camden', 
    'Chase', 
    'Declan', 
    'Carson', 
    'Colin', 
    'Brody', 
    'Asher', 
    'Jeremiah', 
    'Micah', 
    'Easton', 
    'Xander', 
    'Ryder', 
    'Nathaniel', 
    'Elliot', 
    'Sean', 
    'Cole'];
var girlNames = ['Sophia', 
    'Emma', 
    'Olivia', 
    'Ava', 
    'Isabella', 
    'Mia', 
    'Zoe', 
    'Lily', 
    'Emily', 
    'Madelyn', 
    'Madison', 
    'Chloe', 
    'Charlotte', 
    'Aubrey', 
    'Avery', 
    'Abigail', 
    'Kaylee', 
    'Layla', 
    'Harper', 
    'Ella', 
    'Amelia', 
    'Arianna', 
    'Riley', 
    'Aria', 
    'Hailey', 
    'Hannah', 
    'Aaliyah', 
    'Evelyn', 
    'Addison', 
    'Mackenzie', 
    'Adalyn', 
    'Ellie', 
    'Brooklyn', 
    'Nora', 
    'Scarlett', 
    'Grace', 
    'Anna', 
    'Isabelle', 
    'Natalie', 
    'Kaitlyn', 
    'Lillian', 
    'Sarah', 
    'Audrey', 
    'Elizabeth', 
    'Leah', 
    'Annabelle', 
    'Kylie', 
    'Mila', 
    'Claire', 
    'Victoria', 
    'Maya', 
    'Lila', 
    'Elena', 
    'Lucy', 
    'Savannah', 
    'Gabriella', 
    'Callie', 
    'Alaina', 
    'Sophie', 
    'Makayla', 
    'Kennedy', 
    'Sadie', 
    'Skyler', 
    'Allison', 
    'Caroline', 
    'Charlie', 
    'Penelope', 
    'Alyssa', 
    'Peyton', 
    'Samantha', 
    'Liliana', 
    'Bailey', 
    'Maria', 
    'Reagan', 
    'Violet', 
    'Eliana', 
    'Adeline', 
    'Eva', 
    'Stella', 
    'Keira', 
    'Katherine', 
    'Vivian', 
    'Alice', 
    'Alexandra', 
    'Camilla', 
    'Kayla', 
    'Alexis', 
    'Sydney', 
    'Kaelyn', 
    'Jasmine', 
    'Julia', 
    'Cora', 
    'Lauren', 
    'Piper', 
    'Gianna', 
    'Paisley', 
    'Bella', 
    'London', 
    'Clara', 
    'Cadence', ];

function upperIze(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function getRand(top) {
    // random will be integer from 0 to less than top
    return Math.floor(Math.random() * top);
}

function getName(sx) {
    // randomly return one boy or girl's name from the appropriate array
    return (sx=='male')? boyNames[getRand(boyNames.length)] 
                        : girlNames[getRand(girlNames.length)];
}

function resetOut() {
    document.getElementById("baby_name").innerHTML='';
}

function generateName() {
    var form = document.forms['name_form'];
    //document.getElementById("name_form");
    var gender = form.gender.value;
    console.log("sx "+gender);
    console.log("lastname "+form.lname.value);
    if(!validateForm(form)) {
        resetOut();
        return false;
    }
    var fname = getName(gender);
    var mname = getName(gender);
    var lname = upperIze(form.lname.value);
    // add output
    document.getElementById("baby_name").innerHTML= fname+" "+mname+" "+lname;
}

function validateForm(form) {
    if(form.lname.value.length==0) {
        alert("Can't get a name until you enter your last name");
        return false;
    }
    if(form.gender.value !== "male" && form.gender.value !== "female") {
        alert("Need to tell first if it's a boy or girl");
        return false;
    }

    return true;
}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;

}

go();
