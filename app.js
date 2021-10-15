import { food } from './food.js';

const foodName = document.getElementById('food-name');

function render(food) {
    const foodCard = document.createElement('div');
    foodCard.classList.add('card');
    const foodNames = document.createElement('h2');
    foodNames.textContent = food.name;
    const foodImage = document.createElement('img');
    foodImage.src = food.img;
    const foodType = document.createElement('h3');
    foodType.textContent = food.type;
    foodCard.append(foodNames, foodImage, foodType);
    return foodCard;
}

for (let foods of food) {
    const foodElements = render(foods);
    foodName.appendChild(foodElements);
}