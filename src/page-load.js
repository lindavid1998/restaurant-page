function createDiv(className) {
    let element = document.createElement('div')
    element.classList.add(className)
    return element
}

function loadPage() {
    let content = document.getElementById('content')

    let header = createDiv('header')
    header.textContent = 'Untitled Taco Restaurant'

    content.appendChild(header)

    let hero = createDiv('hero')
    let heroText = createDiv('hero-text')
    heroText.textContent = 'Limited time deal! $1 tacos'
    hero.appendChild(heroText)

    content.appendChild(hero)

    let review = createDiv('review')
    let text = createDiv('text')
    text.textContent = `"i can't believe nacho fries are back they are delicious"`
    let author = createDiv('author')
    author.textContent = `- some guy on yelp`
    review.appendChild(text)
    review.appendChild(author)

    content.appendChild(review)
}

export { loadPage }