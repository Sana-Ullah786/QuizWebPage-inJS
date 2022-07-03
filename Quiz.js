// function to check the answer
function check() {
  // getting the value of the answer
  var mark1 = document.querySelector('input[name="q1"]:checked').value; 
  var mark2 = document.querySelector('input[name="q2"]:checked').value;
  var mark3 = document.querySelector('input[name="q3"]:checked').value;
  var mark4 = document.querySelector('input[name="q4"]:checked').value;
  var mark5 = document.querySelector('input[name="q5"]:checked').value;
  var answer1 = "if (i!= 5)"; 
  var answer2 = "function myFunction()";
  var answer3 = "onclick";
  var answer4 = 'alert("Hello World");';
  var answer5 = "Math.max(x, y)";
  var count = 0;
  // Validating answer for question 1
  if (mark1.localeCompare(answer1) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q1")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    // if answer is wrong
    document
      .getElementById("q1")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "if (i!= 5)" </div > '
      );
  }
  // Validating answer for question 2
  if (mark2.localeCompare(answer2) == 0) {
    // incrementing the count if the answer is correct
    document
      .getElementById("q2")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q2")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "function myFunction()" </div > '
      );
  }
  // Validating answer for question 3
  if (mark3.localeCompare(answer3) == 0) {
    document
      .getElementById("q3")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q3")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "onclick" </div > '
      );
  }
  // Validating answer for question 4
  if (mark4.localeCompare(answer4) == 0) {
    document
      .getElementById("q4")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q4")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "alert("Hello World");" </div > '
      );
  }
  // Validating answer for question 5
  if (mark5.localeCompare(answer5) == 0) {
    document
      .getElementById("q5")
      .insertAdjacentHTML(
        "afterend",
        '<div class="green-container"> Your Answer is Correct!" </div > '
      );
    count++;
  } else {
    document
      .getElementById("q5")
      .insertAdjacentHTML(
        "afterend",
        '<div class="red-container"> Your Answer is Not Correct!<br>The Correct Answer is "Math.max(x, y)" </div > '
      );
  }
  // disabling the button after it is clicked once
  var btn = document.getElementById("Button");
  btn.hidden = "true";
  const template = document.createElement("div");

  // creating the result page
  if (count == 5) {
    template.innerHTML = "Congratulations!<br>Your Obtained Score is " + count;
  } else if (count == 0) {
    template.innerHTML =
      "You Need A Lot of Improvement! <br>Your Obtained Score is " + count;
  } else if (count > 0 && count <= 2) {
    template.innerHTML =
      "Better Luck Next Time! <br>Your Obtained Score is " + count;
  } else if (count > 2) {
    template.innerHTML = "Good Job! <br>Your Obtained Score is " + count;
  }
  // appending the result page to the quiz
  template.setAttribute("id", "scores");
  document.body.appendChild(template);
  // creating the button to go back to the quiz
  var button = document.createElement("BUTTON");
  // creating the text for the button
  button.innerHTML =
    '<a href="./Quiz.html" style="text-decoration:none; color:black;">Retake</a>';
  button.setAttribute("id", "retake");
  // appending the button to the quiz
  document.body.appendChild(button);
  // creating the button to go back to the quiz
  queryForm.appendChild(document.createElement("br"));
  queryForm.appendChild(document.createElement("br"));
  queryForm.appendChild(document.createElement("br"));
  queryForm.appendChild(document.createElement("br"));
}
