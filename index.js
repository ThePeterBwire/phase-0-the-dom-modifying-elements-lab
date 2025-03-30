// Write your code here!
// Create a new div element and store it in a variable
const div = document.createElement('div');

// Append the div to the body of the document
document.body.appendChild(div);

// Create a ul element, add a class, and append it to the div
const ul = document.createElement('ul');
ul.className = 'pet-details';
div.appendChild(ul);

// Remove the 'square' class from the div (if it exists)
div.classList.remove('square');

// Set the position and zIndex styles on the div
div.style.position = 'fixed';
div.style.zIndex = '1000';

// Create an h1 element with id 'victory' and set its text content
const h1 = document.createElement('h1');
h1.id = 'victory';
h1.textContent = 'Alice is the champion'; // Replace 'Alice' with your name

// Append the h1 to the div
div.appendChild(h1);

// Remove the div from the DOM
div.remove();