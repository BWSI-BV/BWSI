const authButton = document.getElementById("auth-button")
const registerButton = document.getElementById("register-button")

const formAuth = document.getElementById("login-form__auth")
const formRegister = document.getElementById("login-form__register")

function authClick() {
    registerButton.classList.remove('login-choice__button-active')
    authButton.classList.add('login-choice__button-active')
    formRegister.style.display = 'none'
    formAuth.style.display = 'block'
}

function registerClick() {
    authButton.classList.remove('login-choice__button-active')
    registerButton.classList.add('login-choice__button-active')
    formAuth.style.display = 'none'
    formRegister.style.display = 'block'
}