const form = document.getElementById("form")
const name1 = document.getElementById("name")
const surname1 = document.getElementById("surname")
const age1 = document.getElementById("age")
const email1 = document.getElementById("email")

function hello(event) {
    event.preventDefault()
    axios.post("https://655c83b725b76d9884fd6e89.mockapi.io/Students", {
        name: name1.value,
        surname: surname1.value,
        age: age1.value,
        email: email1.value,

    }).then(response => {
        console.log(response.data);
        })
}

form.addEventListener("submit", hello)