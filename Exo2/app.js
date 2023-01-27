const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const addressInput = document.getElementById("address");
    const phoneInput = document.getElementById("phone");
    const sizeInput = document.getElementById("size");
    const pizzaInput = document.getElementById("pizza");


    const formData = {
        firstName: firstNameInput.value,
        address: addressInput.value,
        phone: phoneInput.value,
        size: sizeInput.value,
        pizza: pizzaInput.value,
    }

    const errors = {
        firstName: false,
        address: false,
        phone: false,
        size: false,
        pizza: false,
    }

    const firstNameError = document.getElementById('firstNameError');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');
    const sizeError = document.getElementById('sizeError');
    const pizzaError = document.getElementById('pizzaError');

    firstNameError.style.display = 'none';
    addressError.style.display = 'none';
    phoneError.style.display = 'none';
    sizeError.style.display = 'none';
    pizzaError.style.display = 'none';


    const nameRegex = /^[a-zA-Z ]+$/
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    const addressRegex = /^[a-zA-Z0-9\s,'-]*$/



    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
        errors.firstName = true;
        firstNameError.style.display = 'block';
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = true;
        phoneError.style.display = 'block';
    }
    if (!formData.address || !addressRegex.test(formData.address)) {
        errors.address = true;
        addressError.style.display = 'block';
    }
    if (!formData.size) {
        errors.size = true;
        sizeError.style.display = 'block';
    }
    if (!formData.pizza) {
        errors.pizza = true;
        pizzaError.style.display = 'block';
    }


    if (!Object.values(errors).includes(true)) {
        console.log(formData)
        contactForm.reset()
    }

    let sizeSelectValid = false;
    let recipeSelectValid = false;

    if (!recipeSelectValid || !sizeSelectValid) {
        console.error("Veuillez remplir le formulaire correctement.");
    } else {
        console.log("Envoi effectué.");
    }

})
const sizesPrice = {
    small: 9,
    medium: 15,
    large: 20,
    xxlarge: 40
}

const pizzasPrice = {
    BananePommeChocolat: 4,
    Fraises: 7,
    abricot: 12
}

const sizeSelect = document.getElementById('taille');
const pizzaSelect = document.getElementById('recette');
const totalLabel = document.getElementById('totalLabel');

let totalPrice = 0;
let sizePrice = 0;
let pizzaPrice = 0;

size.addEventListener('change', () => {
    const sizeValue = size.value;
    console.log(sizeValue)
    if (sizeValue && sizeValue.length > 0) {
        sizePrice = sizesPrice[sizeValue];
        sizesValid = true;
        console.log(sizePrice);
    } else {
        sizePrice = 0;
        sizesValid = false;
    }
    totalLabel.textContent = `Total = ${sizePrice + pizzaPrice} €`;
});

pizza.addEventListener('change', () => {
    const pizzaValue = pizza.value;
    console.log(pizzaValue)

    if (pizzaValue && pizzaValue.length > 0) {
        pizzaPrice = pizzasPrice[pizzaValue];
        pizzasValid = true;
    } else {
        pizzaPrice = 0;
        pizzaSelectValid = false;
    }
    totalLabel.textContent = `Total = ${sizePrice + pizzaPrice} €`;
});
