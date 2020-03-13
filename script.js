const button = document.querySelector('.btn')
const form =document.querySelector('.form')

const errMsg = document.querySelector('.err-msg')
const iconError = document.querySelector('.icon-error')

let inputField = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = inputField.value
    
    let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if(inputValue === '' ||  !mailRegex.test(inputValue))  {
        errMsg.style.display = 'block'
        iconError.style.display = 'block'
        inputField.style.border = '2px solid red'
    } else {
        errMsg.style.display = 'none'
        iconError.style.display = 'none'
        inputField.style.border = '1px solid var(--desat-red)'
    }
})