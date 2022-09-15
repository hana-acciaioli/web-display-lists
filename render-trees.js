export function renderPlants(plant) {
    const li = document.createElement('li');
    li.classList.add('plant-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = plant.name;

    const pEl = document.createElement('p');
    pEl.textContent = plant.fruit + ' ' + plant.type;

    li.append(headerEl, pEl);

    return li;
}
