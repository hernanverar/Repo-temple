import './css/styles.css';
import menuService from './drinks.js';

// Business Logic

function getMenu(drinks) {
  menuService.getMenu(drinks)
    .then(function(response) {
      if (response.main) {
        printElements(response, drinks);
      } else {
        printError(response, drinks);
      }
    });
}


// UI Logic

function printElements(response, drinks) {
  document.querySelector('#ingredients').innerText = `The ingredients in ${drinks} is ${response}.
  The drink menu is ${response} at the bar.`;
}

function printError(error, drinks) {
  document.querySelector('#ingredients').innerText = `There was an error accessing the drinks menu data for ${drinks}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const drinks= document.querySelector('#drink-menu').value;
  document.querySelector('#drink-menu').value = null;
  getMenu(drinks);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
