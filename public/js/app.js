const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageError = document.querySelector('#messageError')
const messageLocation = document.querySelector('#messageLocation')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageError.textContent = 'Loading...'
    messageLocation.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageError.textContent = data.error
            } else {
                messageError.textContent = data.location
                messageLocation.textContent += data.forecast
            }
        })
    });
})