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

var bodyElement = document.querySelector("body");
var blockContainer = document.querySelector("#block-container");
var topLeftBlock = document.querySelector("#block-container .block.top-left");
var topRightBlock = document.querySelector("#block-container .block.top-right");
var bottomLeftBlock = document.querySelector("#block-container .block.bottom-left");
var bottomRightBlock = document.querySelector("#block-container .block.bottom-right");
var logoContainer = document.querySelector("#logo-container");
var goBackLogoElement = document.querySelector(".go-back-logo");
var creativeSection = document.querySelector("#creative-section");
var transitionEndEvent = whichTransitionEndEvent();
var animationEndEvent = whichAnimationEndEvent();

topLeftBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-top-left");
});

topRightBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-top-right");
  creativeSection.classList.add("active");
  bodyElement.classList.remove("no-scroll");
});

bottomLeftBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-bottom-left");
});

bottomRightBlock.addEventListener("click", function() {
  blockContainer.classList.add("section-transition-bottom-right");
});

goBackLogoElement.addEventListener("click", function() {
  creativeSection.classList.remove("active");
  blockContainer.classList.remove("section-transition-top-right");
  bodyElement.classList.add("no-scroll");
});

// ScrollMagic

var creativeSectionHeroVideoElement = document.querySelector("#creative-section .hero-video");
var creativeSectionImageOneElement = document.querySelector("#creative-section .images-container .image.one");
var creativeSectionImageTwoElement = document.querySelector("#creative-section .images-container .image.two");
var creativeSectionImageThreeElement = document.querySelector("#creative-section .images-container .image.three");
var creativeSectionImageFourElement = document.querySelector("#creative-section .images-container .image.four");

var tweenTimeline = new TimelineMax();
tweenTimeline.add([
  TweenMax.to(creativeSectionImageOneElement, 1, {y:-200}),
  TweenMax.to(creativeSectionImageTwoElement, 1, {y:-150}),
  TweenMax.to(creativeSectionImageThreeElement, 1, {y:-200}),
  TweenMax.to(creativeSectionImageFourElement, 1, {y:-150}),
  // TweenMax.to(creativeSectionImagesMoveLessElements, 1, {y:-150})
]);

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  },
  addIndicators: false
});

new ScrollMagic.Scene({
  triggerElement: creativeSectionHeroVideoElement,
  duration: 700
})
.setTween(tweenTimeline)
// .addIndicators({name: "image parallax"})
.addTo(controller);

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
