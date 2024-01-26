const registerForm = document.querySelector("#register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

const saveToLocalStorage = () => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

/*--------Funciones Auxiliares ------*/
// funcion para chequear que el campo esta vacio
const isEmpty = (input) => {
    return !input.value.trim().length;
};

// Funcion para validar si el largo del input esta entre un numero y otro
const isBetween = (input, min, max) => {
    return input.value.length >= min && input.value.length <=max;
}

// Regex para validar el email
const isEmailValid = (input) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    //  Testear
    // console.log(re.test(input.value.trim()))
    return re.test(input.value.trim());
    
};



// Funcion para revisar si el email lo tenemos guardado 
const emailExiste = (input) => {
    return usuarios.some((usuario)=> usuario.email ===input.value.trim());
};


// Funcion para verificar la contraseña
const isPassSecure = (input) => {
    const re = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    // console.log(re.test(input.value.trim()))
    return re.test(input.value.trim());;

};

const isPhoneValid = (input) => {
    const re = /^[0-9]{10}/;
    return re.test(input.value.trim());
};

//Funcion para mostrar el error al validar el input
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector('small');
    error.style.display = "block";
    error.textContent = message;
    
};

// Funcion para cuando todo esta ok
const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = "";
};


// Funcion para validar inputs


// Funcion para validar el nombre

const checkInput = (input) =>{
    
    let valid = false;
    const MIN_CHARACTERS = 3;
    const MAX_CHARACTERS =25;


    if(isEmpty(input)){
        showError(input, "Este campo es obligatorio");
        return
    }

    if(!isBetween(input, MIN_CHARACTERS, MAX_CHARACTERS)){
        showError(input, `Este campo debe tenrer entre ${MIN_CHARACTERS} y ${MAX_CHARACTERS} caracteres`);
        return
    };

showSuccess(input);
valid = true;
return valid;
};

// Funcion para validar el Email

const checkEmail = (input) => {
    let valid = false;
    if(isEmpty(input)){
        showError(input, "El email es obligatorio");
        return;
    }
    if(!isEmailValid(input)){
        showError(input, "El email no es valido");
        return;
    }
    if(emailExiste(input)){
        showError(input, "El email ya esta registrado");
        // console.log(isExistingEmail.value.trim())
        // console.log(isExistingEmail)
        return;
    }

    showSuccess(input);
    valid = true;
    return valid;
};

// Funcion para validar la pass
const checkPassword = (input) => {
    let valid = false;

    if(isEmpty(input)){
        showError(input, 'La contraseña es obligatoria')
        return;
    }

    if(!isPassSecure(input)){
        showError(input, 'La contraseña debe tener al menos 8 caracteres, una mayuscula, un numero y un simbolo');
        return;
    }

    showSuccess(input);
    valid = true;
    return valid;
};

// Funcion para validar el telefono
const checkPhone = (input) => {
    let valid = false;

    if(isEmpty(input)){
        showError(input, 'El telefono es obligatorio');
        return;
    }

    if(!isPhoneValid(input)){
        showError(input, 'El telefono es invalido');
        return;
    }
    showSuccess(input);
    valid = true;
    return true;
};

// Funcion para validar el formulario
const validateForm = (e) => {
    e.preventDefault();

    let isNameValid = checkInput(nameInput);
    let isLastNameValid = checkInput(lastNameInput);
    let isEmailValid = checkEmail(emailInput);
    let ispasswordValid = checkPassword(passInput);
    let isPhoneValid = checkPhone(phoneInput);

    let isValidForm = isNameValid && isLastNameValid && isEmailValid && ispasswordValid && isPhoneValid;

    if(isValidForm){
        usuarios.push({
            name: nameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passInput.value,
            phone: phoneInput.value

        });
        saveToLocalStorage(usuarios)
        alert("Te has registrado correctamente")
        window.location.href = "login.html";
    }
    
}




// Funcion init
const init = () => {
    nameInput.addEventListener('input', () => checkInput(nameInput));
    lastNameInput.addEventListener('input', ()=> checkInput(lastNameInput));
    emailInput.addEventListener('input', () => checkEmail(emailInput));
    passInput.addEventListener('input', () => checkPassword(passInput))
    phoneInput.addEventListener('input', () => checkPhone(phoneInput));
    registerForm.addEventListener('submit', validateForm);
};

init();