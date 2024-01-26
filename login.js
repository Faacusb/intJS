const loginForm = document.querySelector(".formLogin");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const errorMessage = document.getElementById("form__error");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const saveToSessionStorage =(usuario) => {
    sessionStorage.setItem('activeUsuario', JSON.stringify(usuario))
}

// Funcion para validar que el campo no este vacio
const isEmpty = (input) => {
    return !input.value.trim().length;

};

// Funcion para validar que el mail existe
const isExistingEmail = (input) => {
    return usuarios.some((usuario) => usuario.email === input.value.trim());
};


// Funcion para validar la contra es correcta con la del registro
const isMatchingPass = (input) => {
    const usuario = usuarios.find((usuario) => usuario.email === emailInput.value.trim());

    return usuario.password === input.value.trim();
};

// Funcion para mostrar el error

const showError = (message) => {
    errorMessage.textContent = message;
}

// Funcion para validar los campos
const isValidAccount = () =>{
    let valid = false;

    if(isEmpty(emailInput)){
        showError("por favor, completa los campos");
        return;
    }

    if(!isExistingEmail(emailInput)){
        showError("El email ingresado no es valido");
        return;
    }

    if(isEmpty(passInput)){
        showError("Completa la contraseña");
        return;
    }

    if(!isMatchingPass(passInput)){
        showError("Los datos ingresados son incorrectos");
        loginForm.reset();
        return;
    }

    alert("Ya estas en linea")
    valid = true;
    errorMessage.textContent = "";
    return valid;
}


const login = (e) => {
    e.preventDefault();

    if(isValidAccount()){
        const usuario = usuarios.find((usuario) => usuario.email === emailInput.value.trim());
        saveToSessionStorage(usuario);
        window.location.href ="/index.html";
    }

};

const init = () => {
    loginForm.addEventListener('submit', login);

};

init ();