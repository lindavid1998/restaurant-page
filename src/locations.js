import { createDiv, appendChildren } from './page-setup.js'

let locations = [
    {
        city: 'Arcadia',
        description: 'Westfield Santa Anita',
        street: '400 S Baldwin Ave',
        zip: 'Arcadia, CA 91007',
        phone: '(626) 446-8588'
    },
    {
        city: 'Costa Mesa',
        description: 'South Coast Plaza',
        street: '3333 Bristol St',
        zip: 'Costa Mesa, CA 92626',
        phone: '(714) 549-3388'
    },
    {
        city: 'Los Angeles',
        description: 'Westfield Centruy City',
        street: '10250 Santa Monica Blvd',
        zip: 'Los Angeles, CA 90067',
        phone: '(424) 382-1118'
    }
]

function createCard(location) {
    let addrLineOne = document.createElement('div')
    addrLineOne.textContent = location.street

    let addrLineTwo = document.createElement('div')
    addrLineTwo.textContent = location.zip

    let address = createDiv('address')
    appendChildren(address, [addrLineOne, addrLineTwo])

    let city = createDiv('city', location.city)
    let description = createDiv('description', location.description)
    let phone = createDiv('phone', location.phone)

    let card = createDiv('card')
    appendChildren(card, [city, description, address, phone])

    return card
}

export function loadLocations() {
    let title = createDiv('title', 'Locations')
    
    let h1 = document.createElement('h1')
    h1.textContent = 'California'
    h1.classList.add('california')

    let loc = createDiv('locations')

    for (let i = 0; i < locations.length; i++) {
        loc.appendChild(createCard(locations[i]))
    }

    let content = document.querySelector('.content')
    appendChildren(content, [title, h1, loc])
}