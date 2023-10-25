const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const headerForm = document.querySelector(".header__input");
const headerInput = document.querySelector(".input");
const headerInputPlaceholder = headerInput.placeholder;
const textError = document.querySelector(".text__error");
const headerBtn = document.querySelector(".header__btn");

headerInput.addEventListener("focus", e => {
    headerInput.placeholder = " ";
});

headerInput.addEventListener("blur", e => {
    headerInput.placeholder = headerInputPlaceholder;
});

headerInput.addEventListener("input", updateInput);

function validateEmail(email) {
    return EMAIL_REGEXP.test(email);
}

function updateInput() {
    while (validateEmail(headerInput.value) != true) {
        headerInput.style.borderColor = "border: 1px solid green;";
        
        if (validateEmail(headerInput.value)) {
            headerInput.style.borderColor = "border: 1px solid #FF5466;";
            textError.classList.add("error");
            break;
        }
    }
}

console.log(textError.className);