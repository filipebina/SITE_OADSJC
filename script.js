// script.js
const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data); // Send data to server-side API
    // TO DO: Implement API call to store data in database
});