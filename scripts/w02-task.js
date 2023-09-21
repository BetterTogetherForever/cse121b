/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Andre William dos Santos";
let currentYear = 2022;
let profilePicture = "images/aboutme.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('#year');
const imageElement = document.querySelector('picture img').src= profilePicture;
imageElement.alt = "Profile Picture";



/* Step 4 - Adding Content */
nameElement.innerHTML ='<strong>' + fullName + '</strong>';
yearElement.textContent = currentYear; 
imageElement.setAttribute('scr',profilePicture);
imageElement.setAttribute('alt','${profileImage}');

/* Step 5 - Array */
const favoritefood = ["Japanese Food", "Salad", "Cake", "Juice"];
let singleFavoriteFood = "Cheese";
favoritefood.push(singleFavoriteFood);
foodElement.textContent = "123";


