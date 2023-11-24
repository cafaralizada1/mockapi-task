const form = document.getElementById('form')
const title = document.getElementById("title")
const price = document.getElementById("price")
const description = document.getElementById("description")
const discount = document.getElementById("discount")
const stock = document.getElementById("stock")
const quality = document.getElementById("quality")
const country = document.getElementById("country")
const customersCount = document.getElementById("customersCount")
const category = document.getElementById("category")
const city = document.getElementById("city")


function hello(event) {
    event.preventDefault()
    axios.post("https://655c83b725b76d9884fd6e89.mockapi.io/Students", {
        title: title.value,
        price: price.value,
        description: description.value,
        discount: discount.value,
        stock: stock.value,
        quality: quality.value,
        country: country.value,
        customersCount: customersCount.value,
        catagory: category.value,
        city: city.value,
    }).then(response => {
        console.log('Response:', response.data);
    })
}

form.addEventListener("submit", hello)