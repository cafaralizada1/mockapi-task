const form = document.getElementById("form")
const username1 = document.getElementById("username")
const password1 = document.getElementById("password")
const address1 = document.getElementById("address")
const email1 = document.getElementById("email")
const country1 = document.getElementById("country")

function hello(event) {
    event.preventDefault()
    
    axios.post("https://655c83b725b76d9884fd6e89.mockapi.io/Students", {
        username: username1.value,
        email: email1.value,
        password: password1.value,
        address: address1.value,
        country: country1.value
 })
 
 .then(response => {
        console.log('Response:', response.data);
        })
}

form.addEventListener("submit",hello)