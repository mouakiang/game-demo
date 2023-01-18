/* Imports */
import 
/* Get DOM Elements */
const villainsEl = document.getElementById('villains');
const playerHPEl = document.getElementById('player-hp');
const playerImgEl = document.getElementById('player-img');
const inputEl = document.getElementById('villain-input');
const buttonEl = document.getElementById('villain-button');
const defeatedCountEl = document.getElementById('defeated-count');
/* State */

const villains = [
    {
        name: 'Bowser',
        hp: 5,
    },
    {
        name: 'Goomba',
        hp: 3,
    },
    {
        name: 'Boo',
        hp: 2,
    },
];
/* Events */

/* Display Functions */
function displayVillains() {
    villainsEl.textContent = '';

    for (let villain of villains) {
        const newVillainEl = renderVillain(villain);
    }
}
