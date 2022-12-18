import Calculator from './weekday.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



//UI logic
function handleForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const calculator = new Calculator;
  let userInput = document.getElementById("input-date").value;
  const response = calculator.dayOfWeek(userInput);
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#user-input").addEventListener("submit", handleForm);
});


