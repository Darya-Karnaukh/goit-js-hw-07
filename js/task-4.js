const formRegister = document.querySelector(".login-form");

formRegister.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
    }
    
    const resultFormRegister = {
        email,
        password,
    }
    
    console.log(resultFormRegister);

    form.reset();
};