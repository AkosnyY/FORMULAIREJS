
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
    const addressRegex =/^[a-zA-Z0-9\s,'-]*$/



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
    if (!formData.size ) {
        errors.size = true;
        sizeError.style.display = 'block';
    }
    if (!formData.pizza ) {
        errors.pizza = true;
        pizzaError.style.display = 'block';
    }


    if (!Object.values(errors).includes(true)) {
        console.log(formData)
        contactForm.reset()
    } 
    
    

})



