var heading = document.getElementById("title");
var myButton = document.getElementById("myButton");
var myButtonTwo = document.getElementById("myButtonTwo");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

var times = ["my favorite color is", "a color i wear a lot is", "one of my favorite things is the color", "nothing could be as wonderful as", "whenever i buy something it's always in the color"];

myButton.addEventListener("click", randomizerFunction);

function randomizerFunction() {
  var randomRed = Math.floor(Math.random() * 156);
  var randomGreen = Math.floor(Math.random() * 156);
  var randomBlue = Math.floor(Math.random() * 256);
  var colorOne = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue +")";
  console.log(colorOne);

  var randomRedTwo = Math.floor(Math.random() * 256);
  var randomGreenTwo = Math.floor(Math.random() * 256);
  var randomBlueTwo = Math.floor(Math.random() * 256);

  var colorTwo = "rgb(" + randomRedTwo + ", " + randomGreenTwo + ", " + randomBlueTwo +")";
  console.log(colorTwo);

  document.body.style.background = "linear-gradient(to right, " + colorOne + ", " + colorTwo + ")";
}


myButtonTwo.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
});

function generate(incUserInput){
  var randomIndex = Math.floor(Math.random() * times.length);
  console.log(randomIndex);
  var selectedRandomTimeText = times[randomIndex];
  outputParagraph.innerText = selectedRandomTimeText + " " + incUserInput;

}
