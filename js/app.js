const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const headerForm = document.querySelector(".header__input");
const headerInput = document.querySelector(".input");
const headerInputPlaceholder = headerInput.placeholder;
const textError = document.querySelector(".text__error");
const headerBtn = document.querySelector(".header__btn");

headerInput.addEventListener("focus", () => {
    headerInput.placeholder = " ";
});

headerInput.addEventListener("blur", () => {
    headerInput.placeholder = headerInputPlaceholder;
});

headerBtn.addEventListener("click", updateInput);

function validateEmail(email) {
    return EMAIL_REGEXP.test(email);
}

function updateInput() {
    if (validateEmail(headerInput.value) !== true) {
        headerInput.style.border = "1px solid #FF5466;";
        textError.classList.add("error");

        headerForm.addEventListener("submit", e => {
            e.preventDefault();
        });
    } else if (validateEmail(headerInput.value) || headerInput.value === "") {
        textError.classList.remove("error");
        console.log("Hi");
    }
}
