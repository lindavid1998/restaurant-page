import { createDiv, appendChildren } from './page-setup.js'
import dumplingImg from './img/dumpling.jpeg'
import cucumberSaladImg from './img/cucumber-salad.jpeg'
import soyNoodleImg from './img/soy-noodle.jpeg'
import xlbImage from './img/xlb.jpeg'
import soupImage from './img/hot-sour-soup.jpeg'


function createMenuItem(item) {
    // returns a 'menu-item' div 
    let [url, name, price] = item

    let img = document.createElement('img')
    img.setAttribute('src', url)
    img.setAttribute('alt', name)
    img.setAttribute('class', 'item-picture')

    let itemName = createDiv('item-name', name)
    let cost = createDiv('cost', price)

    let menuItem = createDiv('menu-item')
    appendChildren(menuItem, [img, itemName, cost])

    return menuItem
}

function createMenuItems(category, items) {
    // returns a parent div, with each menu item added as a child
    let parent = createDiv(category)

    for (let i = 0; i < items.length; i++) {
        parent.appendChild(createMenuItem(items[i]))
    }

    return parent
}

export function loadMenu() {

    let appItems = [
        [cucumberSaladImg, 'Cucumber salad', '$10'],
        [soupImage, 'Hot & Sour Soup (Pork)', '$11'],
        [soyNoodleImg, 'Soy Noodle Salad', '$9']
    ]

    let entItems = [
        [xlbImage, 'Pork Xiao Long Bao', '$23'],
        [dumplingImg, 'Chicken Dumplings', '$19']
    ]

    let menu = createDiv('menu')

    let appHeader = document.createElement('h1')
    appHeader.textContent = 'Appetizers'

    let appetizers = createMenuItems('appetizers', appItems)

    let entHeader = document.createElement('h1')
    entHeader.textContent = 'Entrees'

    let entrees = createMenuItems('entrees', entItems)

    appendChildren(menu, [appHeader, appetizers, entHeader, entrees])
    document.querySelector('.content').appendChild(menu)
}