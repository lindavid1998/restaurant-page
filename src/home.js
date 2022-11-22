import { createDiv, appendChildren } from './page-setup.js'

import xlbImage from './img/xlb.jpeg'
import veggieDumplingImage from './img/veggie.jpeg'


function loadHeroImage() {
    let heroImage = createDiv('hero-image');
    let image = document.createElement('img')
    image.setAttribute('src', xlbImage)
    image.setAttribute('alt', 'Xiao long bao from Din Tai Fung')
    heroImage.appendChild(image)
    document.querySelector('.content').appendChild(heroImage)
}

function loadHeroText() {
    let heroText = createDiv('hero-text', 'Shaped by tradition, crafted by hand.')
    document.querySelector('.content').appendChild(heroText)
}

function loadSecondaryMedia() {  
    let img = document.createElement('img')
    img.setAttribute('id', 'veggie')
    img.setAttribute('src', veggieDumplingImage)
    img.setAttribute('alt', 'Veggie')
    
    let p = document.createElement('p')
    p.textContent = 'A vegetarian and vegan favorite.'
    let button = document.createElement('button')
    button.textContent = 'Learn more'
    button.classList.add('button')

    let text = createDiv('text')
    appendChildren(text, [p, button])

    let secondaryMedia = createDiv('secondary-media')
    appendChildren(secondaryMedia, [img, text])

    document.querySelector('.content').appendChild(secondaryMedia)
}

export function loadHome() {
    loadHeroImage()
    loadHeroText()
    loadSecondaryMedia()
}