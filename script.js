// const submitButton = document.getElementById('submitButton')
// const submitName = document.getElementById('name')


// let argonaute = 
// {name: ""}

// submitButton.addEventListener('click', (e) => {
// argonaute = {name: submitName.value}
// console.log(console.log(argonaute))
//  e.preventDefault()
// })


const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) => {

    const formData = new FormData(myForm);
    const data = Object.fromEntries(formData)

    fetch('http://localhost:3000/api/argonaute', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))

    // fetch('http://localhost:3000/api/argonaute', {
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application.json'
    //     },
    //     body: JSON.stringify(data),
    // }).then(function (response) {
    //     return response.json();
    // }).then(function (data) {
    //     console.log(data);
    // }).catch(function (error) {
    //     console.log(error)
    // })

})



//Display all argonautes on the DB
function displayArgonaute(argonautes) {
    argonautes.forEach(argonaute => {
        const catchId = document.getElementById('member-list')
        const createDiv = document.createElement('div')
        createDiv.innerHTML = argonaute.name
        catchId.appendChild(createDiv)
    });

}


//Get the argonautes on the DB
async function getData(url) {
    return await fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }

            throw "Ce produit n'existe pas, vous serez redirigé vers la page d'accueil";
        })
        .catch(function (error) {
            alert(error);
            window.location.href = "./index.html"
        })
}



async function main() {
    const argonautes = await getData('http://localhost:3000/api/argonaute')
    displayArgonaute(argonautes)
}
main()