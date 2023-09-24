/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Andre William dos Santos";
let currentYear = 2022;
let profilePicture = "images/aboutme.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.querySelector('#food');
const yearElement = document.getElementById('#year');
const imageElement = document.querySelector('picture img').src= profilePicture;

/* Step 5 - Array */
const favoritefood = ["Japanese Food", "Salad", "Cake", "Juice"];
foodElement.innerHTML += `<br>${favoritefood}`;
foodElement.textContent = favoritefood.join(", ");
let singleFavoriteFood = "Cheese";
favoritefood.push(singleFavoriteFood);
foodElement.textContent = favoritefood.join(", ");
favoritefood.shift();
foodElement.innerHTML += `<br>${favoritefood}`;
favoritefood.pop();
foodElement.innerHTML += `<br>${favoritefood}`;

/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong>${fullName}</strong>`;
foodElement.innerHTML = foodElement.innerHTML;
yearElement.textContent = currentYear; 
imageElement.alt = fullName;