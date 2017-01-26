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
var topLeftBlock = document.querySelector("#block-container .block.top-left");
var topRightBlock = document.querySelector("#block-container .block.top-right");
var bottomLeftBlock = document.querySelector("#block-container .block.bottom-left");
var bottomRightBlock = document.querySelector("#block-container .block.bottom-right");
var logoContainer = document.querySelector("#logo-container");
var creativeSection = document.querySelector("#creative-section");
var transitionEndEvent = whichTransitionEndEvent();
var animationEndEvent = whichAnimationEndEvent();

topLeftBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-top-left");
});

topRightBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-top-right");
  creativeSection.classList.add("active");
});

bottomLeftBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-bottom-left");
});

bottomRightBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-bottom-right");
});

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
