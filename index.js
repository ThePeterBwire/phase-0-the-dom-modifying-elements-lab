// Remove the main#main element
document.getElementById('main').remove();

// Create a new h1 element with id 'victory' and set its text
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Alice is the champion'; // Replace 'Alice' with your name

// Append the new h1 element to the body
document.body.appendChild(newHeader);

// Change the background color of the body
document.body.style.backgroundColor = '#27647B';