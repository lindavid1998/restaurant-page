function createDiv(className, text = '') {
    let element = document.createElement('div');
    element.classList.add(className);
    element.textContent = text;
    
    return element
}

function appendChildren(parent, children = []) {
    for (let i = 0; i < children.length; i++) {
        parent.appendChild(children[i])
    }
}

function loadHeader() {
    let home = createDiv('nav-item', 'Home')
    home.setAttribute('id', 'home')

    let menu = createDiv('nav-item', 'Menu')
    menu.setAttribute('id', 'menu')

    let locations = createDiv('nav-item', 'Locations')
    locations.setAttribute('id', 'locations')

    let navBar = createDiv('nav-bar')
    appendChildren(navBar, [home, menu, locations])

    let restaurantName = createDiv('restaurant-name', 'Not Din Tai Fung')

    let headerText = createDiv('header-text')
    
    appendChildren(headerText, [restaurantName, navBar])

    let header = createDiv('header')
    header.appendChild(headerText)

    let content = document.querySelector('.content')
    content.appendChild(header)
}

function resetPage() {
    let content = document.querySelector('.content')
    while (content.childNodes.length > 1) {
        content.removeChild(content.lastChild);
    }
}

export { createDiv, appendChildren, loadHeader, resetPage }