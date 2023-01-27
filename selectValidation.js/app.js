const form = document.getElementById('form');

let sizeSelectValid = false;
let recipeSelectValid = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!recipeSelectValid || !sizeSelectValid) {
        console.error("Veuillez remplir le formulaire correctement.");
    } else {
        console.log("Envoi effectué.");
    }

})

const sizesPrice = {
    small: 5,
    medium: 7,
    large: 9
}

const recipesPrice = {
    nordiste: 6,
    montagnard: 5,
    viande: 8
}

const sizeSelect = document.getElementById('taille');
const recipeSelect = document.getElementById('recette');

const totalLabel = document.getElementById('totalLabel');

let totalPrice = 0;

let sizePrice = 0;
let recipePrice = 0;

sizeSelect.addEventListener('change', () => {
    const sizeValue = sizeSelect.value;
    console.log(sizeValue)
    if (sizeValue && sizeValue.length > 0) {
        sizePrice = sizesPrice[sizeValue];
        sizeSelectValid = true;
    } else {
        sizePrice = 0;
        sizeSelectValid = false;
    }
    totalLabel.textContent = `Total = ${sizePrice + recipePrice} €`;
});

recipeSelect.addEventListener('change', () => {
    const recipeValue = recipeSelect.value;
    
    if (recipeValue && recipeValue.length > 0) {
        recipePrice = recipesPrice[recipeValue];
        recipeSelectValid = true;
    } else {
        recipePrice = 0;
        recipeSelectValid = false;
    }
    totalLabel.textContent = `Total = ${sizePrice + recipePrice} €`;

});