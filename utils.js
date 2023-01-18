export function renderVillain(villain) {
    const newVillainEl = document.createElement('li');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    nameEl.textContent = villain.name;
    hpEl.textContent = villain.hp;

    if (villain.hp)
}
