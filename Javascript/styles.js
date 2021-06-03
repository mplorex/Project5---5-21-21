const bigTeddy = {
    price: 19.99,
    name: 'Big teddy'
}
const bigTeddy1 = {
    price: 19.98,
    name: 'Big Teddy 1'
}

const products = [
    bigTeddy,
    bigTeddy2,
    {
        name: 'Big Teddy'
    }
]

for (let i=0; i < products.length; i++) {
    const card = document.createElement ('div')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('h5')

    card.setAttribute('class', 'card')
    cardBody.setAttribute('class', 'card-body')
    cardTitle.setAttribute('class', 'card-title')

    const cardTitleContent = document.createTextNode("bigTeddy1")
    cardTitle.appendChild(cardTitleContent)
    cardBody.appendChild(cardTitle)
    card.appendChild(careBody)

    document.body.appendChild(card)
}