import document from "document";
import * as messaging from "messaging";
import {memory} from "system";

let background = document.getElementById("background");
let yodaButton = document.getElementById("yodaButton");
let quote = document.getElementById("quoteDisplay")

// Yoda quotes array
var quotes = [
    "Do or do not. There is no try.",
    "You must unlearn what you have learned...",
    "Excitement. Heh. A Jedi craves not these things. You are reckless.",
    "Named must be your fear before banish it you can.",
    "Fear is the path to the dark side.",
    "The greatest teacher, failure is.",
    "Pass on what you have learned.",
    "A Jedi uses the Force for knowledge and defense, never for attack.",
    "Already know you that which you need.",
    "Luminous beings we are, not this crude matter.",
    "Once you start down the dark path, consume you it will.",
    "In a dark place we find ourselves & a little more knowledge lights our way.",
    "Patience you must have, my young padawan.",
    "When nine hundred years old you reach, look as good you will not.",
    "Adventure. Excitement. A Jedi craves not these things.",
    "Truly wonderful, the mind of a child is.",
    "If no mistake have you made, yet losing you are. A different game you should play.",
    "Judge me by my size, do you?",
    "Control, control, you must learn control!",
    "To be Jedi is to face the truth, and choose.",
    "Feel the Force!",
    "The dark side clouds everything. Impossible to see, the future is.",
    "Train yourself to let go of everything you fear to lose.",
    "Careful you must be for the dark side looks back.",
    "You will find only what you bring in.",
    "Difficult to see. Always in motion is the future…",
    "Smaller in number are we, but larger in mind.",
    "Wars not make one great.",
    "Mudhole? Slimy? My home this is!",
    "Save them we must. They are our last hope.",
    "Unlearn what you have learned.",
    "Fought I did consumed by fear, I was, though see it I did not.",
    "Clear your mind must be, if you are to find the villains behind this plot.",
    "There..is...another..Sky-walk-er... \(Yoda dies)\.",
    "Luke: I cannot believe it. Yoda: That is why you fail.",
    "Yes a Jedi's strength flows from the Force. But beware of the dark side.",
    "Fear of loss is a path to the dark side.",
    "Anger, fear, aggression, the dark side of the Force are they.",
    "Powerful you have become. The dark side I sense in you.",
    "You will know \(the good from the bad)\ when you are calm, at peace...",
    "What know you of ready? For 8 hundred years have I trained Jedi.",
    "Your weapons. You will not need them.",
    "Stay for some soup you must.",
    "You will find only what you bring in.",
    "Pass on what you have learned.",
];

// Quote button
yodaButton.onactivate = function randomQuote() {
    var rand = quotes[Math.floor(Math.random() * quotes.length)];
    quote.text = rand;
    //console.log("Function  requested.");
    //console.log("JS Memory: " + memory.js.used + "/" + memory.js.total);
}

// Message socket opens
messaging.peerSocket.onopen = () => {
    //console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
    //console.log("App Socket Closed");
};
