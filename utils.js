export function renderVillain(villain, playerHp) {
    const newVillainEl = document.createElement('button');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    nameEl.textContent = villain.name;
    hpEl.textContent = villain.hp;

    if (villain.hp > 0) {
        emojiEl.textContent = '⭐';
    } else {
        emojiEl.textContent = '👻';
    }
    if (playerHp <= 0) {
        newVillainEl.disabled = true;
        newVillainEl.classList.add('hide');
    }
    if (villain.hp <= 0) {
        newVillainEl.disabled = true;
        newVillainEl.classList.add('hide');
    }
    newVillainEl.classList.add('newVillain');

    newVillainEl.append(nameEl, hpEl, emojiEl);

    return newVillainEl;
}
