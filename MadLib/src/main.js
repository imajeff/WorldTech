var assn = 'Mad Libs';
var types = ['@ADJECTIVE','@NOUN','@ADVERB','@VERB'];
var rx = new RegExp(types.join('|'), 'g');
var defAdjs = ['yellow','giant','phony','pretty','crusty','selfish','careful','slothful','green','pukey'];
var defNouns = ['rock','car','person','bouncy ball','package','penguin','whisker','bullet','place','example'];
var defAdvs = ['shyly','slothfully','completely','grudgingly','abruptly','inadvertently','coyly','accidentally','awkwardly','never'];
var defVerbs = ['run','slaughter','caress','impale','enhance','permeate','climb','crawl'];
var uAdjs = [];
var uNouns = [];
var uAdvs = [];
var uVerbs = [];
var sTemplates = {'Favorite Story':"I like @ADJECTIVE @NOUNs. I think of @NOUN as man's best friend so I really @VERB them. The best thing is that they are @ADJECTIVE. When I was young I would @ADVERB learn all about them. Some are @ADVERB designed, not general purpose. My @ADJECTIVEest one has no @NOUN. We @ADVERB played @ADJECTIVE games on it because it does have a joystick to @VERB things. Soon @NOUNs had more memory so we could @ADVERB @VERB our own programs with @ADJECTIVE @NOUNs and the games were more complex. I will always @VERB @NOUNs even when I grow @ADJECTIVE! So next time you @VERB online, @ADVERB consider the nostalgia of @VERBing one of those old computers.",
        'Go Shopping':"Another long story", gen_story:"yet another"};

function getWord(match) {
    var i, list, word;
    // Convert a random word based on match type
    switch (match) {
       case types[0]:
        //Adjs
        // queue default Adjs if empty
        if(uAdjs.length==0) {
            uAdjs = defAdjs.slice();
        }
        list = uAdjs;
        break;
       case types[1]:
        //Nouns
        if(uNouns.length==0) {
            uNouns = defNouns.slice();
        }
        list = uNouns;
        break;
       case types[2]:
        //Advs
        if(uAdvs.length==0) {
            uAdvs = defAdvs.slice();
        }
        list = uAdvs;
        break;
       case types[3]:
        //Verbs
        if(uVerbs.length==0) {
            uVerbs = defVerbs.slice();
        }
        list = uVerbs;
        break;
    }
    if(list.length==0)
                return "[out of words]";    //shouldn't run out
    // Take random element from list
    i = Math.floor(Math.random() * list.length);
    word = list[i].trim();
    //console.log(i+' '+word);
    // remove it from that list so it's not used again
    list.splice(i,1);

    return word;
}

function splitEntry(s) {
    s = s.trim();
    return (s.length>0)? s.split(',') : [];
}

function generateStory() {
    var form = document.forms.madlib_form;
    // Get the lists from user entry
    uAdjs = splitEntry(form.adjLst.value);
    uNouns = splitEntry(form.nounLst.value);
    uAdvs = splitEntry(form.advLst.value);
    uVerbs = splitEntry(form.verbLst.value);

    // Replace labels
    var story = sTemplates['Favorite Story'].replace(rx, getWord);
    return story;
}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;

}

go();
