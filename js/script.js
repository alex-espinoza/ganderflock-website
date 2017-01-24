// Functions from David Walsh: http://davidwalsh.name/css-animation-callback
function whichTransitionEndEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

function whichAnimationEndEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var blockContainer = document.querySelector("#block-container");
var logoContainer = document.querySelector("#logo-container");
var transitionEndEvent = whichTransitionEndEvent();
var animationEndEvent = whichAnimationEndEvent();

// startButton.addEventListener("click", function() {
//   startButton.addEventListener(transitionEndEvent, function() {
//     startIntroduction();
//   }, {once: true});

//   startButton.className += " hide";
// });

// function startIntroduction() {
//   terminal.className += " show";

//   setTimeout(function() {
//     var firstTerminalLine = "Booting up: ";
//     var currentDateString = new Date().toString().split(" ").slice(0, -2).join(" ");
//     firstTerminalLine += currentDateString;
//     terminal.innerHTML += firstTerminalLine;
//   }, 1000);

//   setTimeout(function() {
//     setupStartupTerminalOutput();
//   }, 2200);
// }
