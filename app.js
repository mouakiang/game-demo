/* Imports */
import { renderVillain } from './utils.js';
/* Get DOM Elements */
const villainsEl = document.getElementById('villains');
const playerHPEl = document.getElementById('player-hp');
const playerImgEl = document.getElementById('player-img');
const inputEl = document.getElementById('villain-input');
const buttonEl = document.getElementById('villain-button');
const defeatedCountEl = document.getElementById('defeated-count');

/* State */
let defeatedCount = 0;
let playerHp = 10;

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
buttonEl.addEventListener('click', () => {
    const villainName = inputEl.value;

    const newVillain = {
        name: villainName || `villain ${Math.ceil(Math.random() * 50)}`,
        hp: Math.ceil(Math.random() * 5),
    };

    villains.push(newVillain);

    inputEl.value = '';

    displayVillains();
});
/* Display Functions */

function displayVillains() {
    villainsEl.textContent = '';

    for (let villain of villains) {
        const newVillainEl = renderVillain(villain, playerHp);

        newVillainEl.addEventListener('click', () => {
            if (playerHp === 0) {
                alert('Mama Mia!');
                return;
            }
            if (Math.random() > 0.3) {
                alert('Lets a go! Mario hit' + ' ' + villain.name);
                villain.hp--;

                if (villain.hp === 0) {
                    defeatedCount++;
                    defeatedCountEl.textContent = `You have defeated ${defeatedCount} villains`;
                }
            } else {
                alert('You missed' + ' ' + villain.name);
            }
            if (Math.random() > 0.4) {
                alert('Bwuahaha!' + ' ' + villain.name + ' ' + 'hit you back!');
                playerHp--;

                if (playerHp === 0) {
                    playerImgEl.classList.add('dead');
                }
            } else {
                alert(
                    'You are gonna be koopatized!' +
                        ' ' +
                        villain.name +
                        ' ' +
                        'hit you back and missed'
                );
            }
            playerHPEl.textContent = playerHp;

            displayVillains();
        });
        villainsEl.append(newVillainEl);
    }
}

displayVillains();
