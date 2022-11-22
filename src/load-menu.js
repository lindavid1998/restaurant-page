import { createDiv, appendChildren } from './page-setup.js'

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
        ['../src/cucumber-salad.jpeg', 'Cucumber salad', '$10'],
        ['../src/hot-sour-soup.jpeg', 'Hot & Sour Soup (Pork)', '$11'],
        ['../src/soy-noodle.jpeg', 'Soy Noodle Salad', '$9']
    ]

    let entItems = [
        ['../src/xlb.jpeg', 'Pork Xiao Long Bao', '$23'],
        ['../src/dumpling.jpeg', 'Chicken Dumplings', '$19']
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