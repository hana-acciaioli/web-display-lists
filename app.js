// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';
import { plants } from './plants-data.js';
import { renderPlants } from './render-trees.js';
// initialize global state
const candyList = document.getElementById('candy-list');
const plantList = document.getElementById('plant-list');

function displayCandies() {
    candyList.innerHTML = '';
    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}

function displayPlants() {
    plantList.innerHTML = '';
    for (let plant of plants) {
        const plantEl = renderPlants(plant);
        plantList.append(plantEl);
    }
}
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

displayCandies();
displayPlants();
