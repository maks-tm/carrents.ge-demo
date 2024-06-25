const submit = document.querySelector('#submit-btn')
const nameField = document.querySelector('#name')
const emailField = document.querySelector('#email')
const passwordField = document.querySelector('#password')
const confirmField = document.querySelector('#confirm')

// This only test Not validate forms 
submit.addEventListener('click', (e) => {
    e.preventDefault()
    clearInputFields()
    alert('Message: You are registered successfully! Please Log In');
    window.location = '../pages/signin.html'
})

function clearInputFields() {
    nameField.value = ''
    emailField.value = ''
    passwordField.value = ''
    confirmField.value = ''
}
