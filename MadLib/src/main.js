var assn = 'Mad Libs';
var types = ['@ADJECTIVE','@NOUN','@ADVERB','@VERB'];
var rx = new RegExp(types.join('|'), 'g');
var defAdjs = ['yellow','giant','phony','pretty','crusty','selfish','careful','slothful','green','pukey'];
var defNouns = ['rock','car','person','bouncy ball','package','penguin','whisker','bullet','place','example'];
var defAdvs = ['shyly','slothfully','completely','grudgingly','abruptly','inadvertently','coyly','accidentally','awkwardly','never'];
var defVerbs = ['run','slaughter','caress','impale','enhance','permeate','climb','crawl'];
var uAdjs, uNouns, uAdvs, uVerbs;
var sTemplates = {Favorite:"I like @ADJECTIVE @NOUNs. I think of @NOUN as man's best friend so I really @VERB them. The best thing is that they are @ADJECTIVE. When I was young I would @ADVERB learn all about them. Some are @ADVERB designed, not general purpose. My @ADJECTIVEest one has no @NOUN. We @ADVERB played @ADJECTIVE games on it because it does have a joystick to @VERB things. Soon @NOUNs had more memory so we could @ADVERB @VERB our own programs with @ADJECTIVE @NOUNs and the games were more complex. I will always @VERB @NOUNs even when I grow @ADJECTIVE! So next time you @VERB online, @ADVERB consider the nostalgia of @VERBing one of those old computers.",
        Gaston:"Gaston is no ordinary @NOUN. His hands are @ADJECTIVE and he can @VERB like a @ADJECTIVE ox. From childhood he @ADVERB grew to the @ADJECTIVE @NOUN that he is. He eats 5 dozen @NOUN every morning and lifts 300 @NOUN to @ADVERB maintain such strength. Needless to say he does @VERB big shoes. Nobody @VERBs like Gaston, nobody @VERBs like Gaston, in fact nobody can even @ADJECTIVE @VERB like Gaston unless maybe they were @ADJECTIVE. Someday I @ADVERB hope I could at least @VERB like Gaston because I could @ADVERB walk the streeds with @NOUN.",
        Shopping:'Today I went shopping. When I arrived at the store I saw a @ADJECTIVE @NOUN, who upon noticing me @ADVERB said, "I need to @VERB". "Well, that was @ADJECTIVE" I thought to myself and walked in the store. The store had rearranged it\'s inventory, so I felt @ADVERB lost. I walked up to store clerk and said @ADVERB, "I am looking for a @ADJECTIVE @NOUN that doesn\’t @VERB as often as the last one I had." The store clerk looked at me with a @ADJECTIVE look in his eye and said, "What you are looking for can be found by the @NOUN, if you see a @NOUN that @ADVERB can @VERB, then you\'ve gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it on amazon.com; Their products seem to @VERB the perfect amount!"'};

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

function storyToPage(story) {
    // Insert into web page
    var ele = document.createElement('p').appendChild(document.createTextNode(story));
    var out = document.getElementById('story_out');
    out.innerHTML = '';         //clear old story
    out.appendChild(ele);       //add new story
}

function generateStory() {
    var form = document.forms.madlib_form;
    // Get the lists from user entry
    uAdjs = splitEntry(form.adjLst.value);
    uNouns = splitEntry(form.nounLst.value);
    uAdvs = splitEntry(form.advLst.value);
    uVerbs = splitEntry(form.verbLst.value);

    // find selected story title
    var stitle = form.story.value;

    // Replace labels
    var story = sTemplates[stitle].replace(rx, getWord);

    // Insert in web page
    storyToPage(story);

    return story;
}

function go() {
    // Set Title of this assignment
    document.title = assn;
    document.getElementById('title').innerHTML = assn;
}

go();
