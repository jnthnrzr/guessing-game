function clickedNo() {
    document.getElementById("clicked").innerHTML = "Okay, take your time, but please hurry! I haven't gotten all day.";
}

function clickedYes() {
    document.getElementById("clicked").innerHTML = "Good! Now I'll start looking for your number.";
    loop();
}

function clickedLow() {
    low = guess()
    count += 1;
    addGuess();
}

function clickedHigh() {
    high = average(low, high);
    count += 1;
    addGuess();
}

function average(low, high) {
    avg = (low + high) / 2;
    return Math.floor(avg);
}

function guess() {
    return average(low, high);
}

function clickedCorrect() {
    var result = guess();
    var answer = document.createElement("div");
    var text = document.createTextNode("You chose " + result + ". I win!");
    answer.appendChild(text);
    document.body.appendChild(answer);
}

var count = 0;
var low = 0;
var high = 1000000;


function loop() {
    if (count < 20) {
        addGuess();
    }
}

function makeButton(label, func) {
    var btn = document.createElement("button");
    var text = document.createTextNode(label);
    btn.appendChild(text);
    btn.addEventListener("click", function() {
        func();
    });
    return btn;
}

function addGuess() {
    // Find new guess number
    var num = guess();
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Q" + (count + 1) + ". Is your number " + num + "?");
    newDiv.appendChild(newContent)

    // Make Lower button
    var low = makeButton(label = "Too Low", func = clickedLow);
    // var low = document.createElement("button");
    // var text = document.createTextNode("Too Low");
    // low.appendChild(text);
    // low.addEventListener("click", function() {
    //     clickedLow();
    // });

    // Make Higher button
    var high = makeButton(label = "Too High", func = clickedHigh);
    // var high = document.createElement("button");
    // var text = document.createTextNode("Too High");
    // high.appendChild(text);
    // high.addEventListener("click", function() {
    //     clickedHigh();
    // });

    // Make That's Correct button
    var correct = makeButton(label = "That's Correct", func = clickedCorrect);
    // var correct = document.createElement("button");
    // var text = document.createTextNode("That's Correct");
    // correct.appendChild(text);
    // correct.addEventListener("click", function() {
    //     clickedCorrect();
    // });

    // Add all the buttons to a div
    var buttons = document.createElement("div");
    buttons.appendChild(low);
    buttons.appendChild(high);
    buttons.appendChild(correct);
    newDiv.appendChild(buttons);

    var currentDiv = document.getElementById("question");
    currentDiv.appendChild(newDiv);
}
