const submit = document.querySelector('#submit-btn')
const emailField = document.querySelector('#email')
const passwordField = document.querySelector('#password')
const passForgot = document.querySelector('#forgot-password')


// This only test Not validate forms 
submit.addEventListener('click', (e) => {
    e.preventDefault()
    clearInputFields()
    alert('Message: You are Logged successfully!');
    window.location = '/index.html'
})

passForgot.onclick = () => {
    alert('Message: Check your email!')
}

function clearInputFields() {
    emailField.value = ''
    passwordField.value = ''
}
