const passInput = document.querySelector('.pass-input');
const validatePassInput = document.querySelector('.validate-pass-input');

function validatePassword() {
    const passValue = passInput.value;
    const validatePassValue = validatePassInput.value;

if (passValue !== validatePassValue) {
    passInput.classList.add('unmatched')
    validatePassInput.classList.add('unmatched');
} else {
    passInput.classList.remove('unmatched');
    validatePassInput.classList.remove('unmatched');
}

}

passInput.addEventListener('input' , validatePassword);
validatePassInput.addEventListener('input' , validatePassword);

