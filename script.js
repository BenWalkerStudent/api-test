//get card elements
const headers = document.querySelectorAll('.card-header')

const imgs = document.querySelectorAll('.card-img')

const address = document.querySelectorAll('.card-address')

const desc = document.querySelectorAll('.business-desc')


//fetch and paste
const url = 'https://iskarr.github.io/austindonovan.github.io/api/business.json'
fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        for (let i = 0; i < headers.length; i++) {

            headers[i].textContent = jsObject.business[i].name

            imgs[i].src = jsObject.business[i].imageurl

            address[i].textContent = jsObject.business[i].address

            desc[i].textContent = jsObject.business[i].description

        }
    })



